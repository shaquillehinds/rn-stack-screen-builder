import { templatePath } from "@src/utils/constants";
import InjectionPipeline from "tscodeinject";

interface AddToStoreProps {
  navigatorName: string;
  screenName: string;
}

export default async function createScreenInjector({
  screenName,
  navigatorName,
}: AddToStoreProps) {
  //@ts-ignore
  await new InjectionPipeline(
    `src/navigators/stack/${navigatorName}.stack.navigator.tsx`
  )
    .injectJSXElement(
      {
        stringTemplate: `
<${navigatorName}Stack.Screen
  options={{ headerShown: false }}
  name="${screenName}"
  component={${screenName}Screen}
/>`,
      },
      { name: `${navigatorName}Stack.Navigator` }
    )
    .injectImport({
      importName: `${screenName}Screen`,
      source: `../../screens/stacks/${navigatorName}/${screenName}/${screenName}.screen`,
      isDefault: true,
    })
    .parse(`src/@types/navigation/${navigatorName}.d.ts`)
    .injectTSTypeLiteral(
      { stringTemplate: `{ ${screenName}: undefined }` },
      { name: `${navigatorName}StackParamList` }
    )
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
}
