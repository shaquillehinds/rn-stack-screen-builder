var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { templatePath } from "../../utils/constants.js";
import { readFileSync } from "fs";
import InjectionPipeline from "tscodeinject";
export default function createNavigatorInjector({ navigatorName, }) {
    return __awaiter(this, void 0, void 0, function* () {
        //@ts-ignore
        yield new InjectionPipeline(`src/navigators/stack/${navigatorName}.stack.navigator.tsx`)
            .injectStringTemplate({
            template: readFileSync(templatePath("StackNavigator"), "utf-8").replaceAll("{{Name}}", navigatorName),
            position: "firstLine",
        })
            .parse(`src/@types/navigation/${navigatorName}.d.ts`)
            .injectStringTemplate({
            template: readFileSync(templatePath("StackParamList"), "utf-8").replaceAll("{{Name}}", navigatorName),
            position: "firstLine",
        })
            .injectDirectory(`src/screens/stacks/${navigatorName}`)
            .finish();
    });
}
