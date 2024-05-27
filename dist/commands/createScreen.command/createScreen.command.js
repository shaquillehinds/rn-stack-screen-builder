var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { firstLetterCap } from "../../utils/algorithms.js";
import createScreenInjector from "./createScreen.injector.pipeline.js";
import checkFiles from "../../utils/fileChecker.js";
import { requiredFiles } from "../../@types/index.js";
import createScreenPrompt from "./createScreen.prompt.js";
export default function createScreenCommand(program) {
    program
        .command("create-screen <name>")
        .description("Creates a stack screen")
        .option("-n, --navigator <nameOfNavigator>", "The name of the navigator")
        .action((screenName, { navigator }) => __awaiter(this, void 0, void 0, function* () {
        checkFiles({ autoCreate: requiredFiles });
        screenName = firstLetterCap(screenName.trim());
        if (!navigator) {
            navigator = yield createScreenPrompt.navigatorName();
            if (!navigator)
                throw new Error("The name of the navigator is required, e.g -n NameOfNavigator");
        }
        const navigatorName = firstLetterCap(navigator.trim());
        yield createScreenInjector({ screenName, navigatorName });
        process.exit(0);
    }));
}
