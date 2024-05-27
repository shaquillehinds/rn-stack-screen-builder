import { templatePath } from "@src/utils/constants";
import { readFileSync } from "fs";
import InjectionPipeline from "tscodeinject";

interface AddToStoreProps {
  navigatorName: string;
}

export default async function createNavigatorInjector({
  navigatorName,
}: AddToStoreProps) {
  //@ts-ignore
  await new InjectionPipeline(
    `src/navigators/stack/${navigatorName}.stack.navigator.tsx`
  )
    .injectStringTemplate({
      template: readFileSync(
        templatePath("StackNavigator"),
        "utf-8"
      ).replaceAll("{{Name}}", navigatorName),
      position: "firstLine",
    })
    .parse(`src/@types/navigation/${navigatorName}.d.ts`)
    .injectStringTemplate({
      template: readFileSync(
        templatePath("StackParamList"),
        "utf-8"
      ).replaceAll("{{Name}}", navigatorName),
      position: "firstLine",
    })
    .injectDirectory(`src/screens/stacks/${navigatorName}`)
    .finish();
}
