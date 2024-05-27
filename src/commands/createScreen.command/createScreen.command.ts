import { firstLetterCap } from "@src/utils/algorithms";
import { Command } from "commander";
import createScreenInjector from "./createScreen.injector.pipeline";
import checkFiles from "@src/utils/fileChecker";
import { RequiredFiles, requiredFiles } from "@src/@types";

export default function createScreenCommand(program: Command) {
  program
    .command("create-screen <name>")
    .description("Creates a stack screen")
    .option("-n, --navigator <nameOfNavigator>", "The name of the navigator")
    .action(async (screenName, { navigator }) => {
      checkFiles({ autoCreate: requiredFiles as unknown as RequiredFiles[] });
      screenName = firstLetterCap(screenName.trim());
      if (!navigator)
        throw new Error(
          "The name of the navigator is required, e.g -n NameOfNavigator"
        );
      const navigatorName = firstLetterCap(navigator.trim());
      await createScreenInjector({ screenName, navigatorName });
      process.exit(0);
    });
}
