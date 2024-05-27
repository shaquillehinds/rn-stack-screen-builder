var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from "fs";
import cp from "child_process";
import checkFiles from "../../utils/fileChecker.js";
import { requiredFiles } from "../../@types/index.js";
import chalk from "chalk";
import createNavigatorInjector from "./createNavigator.injector.pipeline.js";
import { firstLetterCap } from "../../utils/algorithms.js";
export default function createNavigatorCommand(program) {
    program
        .command("create-navigator <name>")
        .description("Creates a stack navigator")
        .action((name) => __awaiter(this, void 0, void 0, function* () {
        checkFiles({ autoCreate: requiredFiles });
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
            const command = `${isYarn ? "yarn add" : "npm install"}${!hasReactNavigationStack ? " @react-navigation/stack" : ""}${!hasReactNavigationNative ? " @react-navigation/native" : ""}`;
            console.log(chalk.cyanBright(`Running command: ${command}`));
            cp.execSync(command, { encoding: "utf-8", stdio: "inherit" });
        }
        yield createNavigatorInjector({ navigatorName: name });
        process.exit(0);
    }));
}
