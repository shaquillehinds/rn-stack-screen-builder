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
import InjectionPipeline from "tscodeinject";
export default function createScreenInjector({ screenName, navigatorName, }) {
    return __awaiter(this, void 0, void 0, function* () {
        //@ts-ignore
        yield new InjectionPipeline(`src/navigators/stack/${navigatorName}.stack.navigator.tsx`)
            .injectJSXElement({
            stringTemplate: `
<${navigatorName}Stack.Screen
  options={{ headerShown: false }}
  name="${screenName}"
  component={${screenName}Screen}
/>`,
        }, { name: `${navigatorName}Stack.Navigator` })
            .injectImport({
            importName: `${screenName}Screen`,
            source: `@src/screens/stacks/${navigatorName}/${screenName}/${screenName}.screen`,
            isDefault: true,
        })
            .parse(`src/@types/navigation/${navigatorName}.d.ts`)
            .injectTSTypeLiteral({ stringTemplate: `{ ${screenName}: undefined }` }, { name: `${navigatorName}StackParamList` })
            .injectDirectory(`src/screens/stacks/${navigatorName}/${screenName}`)
            .injectFileFromTemplate({
            newFilePath: `src/screens/stacks/${navigatorName}/${screenName}/${screenName}.screen.tsx`,
            templatePath: templatePath("StackScreen"),
            replaceKeywords: [
                { keyword: "{{ScreenName}}", replacement: screenName },
                { keyword: "{{NavigatorName}}", replacement: navigatorName },
            ],
        })
            .injectFileFromTemplate({
            newFilePath: `src/screens/stacks/${navigatorName}/${screenName}/${screenName}.controller.tsx`,
            templatePath: templatePath("StackScreenController"),
            replaceKeywords: [
                { keyword: "{{ScreenName}}", replacement: screenName },
                { keyword: "{{NavigatorName}}", replacement: navigatorName },
            ],
        })
            .finish();
    });
}
