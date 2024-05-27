import { Command } from "commander";
import fs from "fs";
import cp from "child_process";
import checkFiles from "../../utils/fileChecker";
import { RequiredFiles, requiredFiles } from "../../@types";
import chalk from "chalk";
import createNavigatorInjector from "./createNavigator.injector.pipeline";
import { firstLetterCap } from "@src/utils/algorithms";

export default function createNavigatorCommand(program: Command) {
  program
    .command("create-navigator <name>")
    .description("Creates a stack navigator")
    .action(async (name) => {
      checkFiles({ autoCreate: requiredFiles as unknown as RequiredFiles[] });
      name = firstLetterCap(name.trim());
      const navigatorFile = `src/navigators/stack/${name}.stack.navigator.tsx`;
      const navigatorTypesFile = `src/@types/navigation/${name}.d.ts`;
      if (fs.existsSync(navigatorFile) || fs.existsSync(navigatorTypesFile))
        throw new Error("This navigator already exists");
      fs.writeFileSync(navigatorFile, "", { encoding: "utf-8" });
      fs.writeFileSync(navigatorTypesFile, "", { encoding: "utf-8" });
      const packageJSON = fs.readFileSync("package.json", "utf-8");
      let hasReactNavigationStack = false;
      let hasReactNavigationNative = false;
      if (packageJSON.includes(`"@react-navigation/stack"`))
        hasReactNavigationStack = true;
      if (packageJSON.includes(`"@react-navigation/native"`))
        hasReactNavigationNative = true;
      const isYarn = fs.existsSync("yarn.lock");
      if (!hasReactNavigationNative || !hasReactNavigationStack) {
        const command = `${isYarn ? "yarn add" : "npm install"}${
          !hasReactNavigationStack ? " @react-navigation/stack" : ""
        }${!hasReactNavigationNative ? " @react-navigation/native" : ""}`;
        console.log(chalk.cyanBright(`Running command: ${command}`));
        cp.execSync(command, { encoding: "utf-8", stdio: "inherit" });
      }
      await createNavigatorInjector({ navigatorName: name });
      process.exit(0);
    });
}
