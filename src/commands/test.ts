import createNavigatorInjector from "./createNavigator.command/createNavigator.injector.pipeline";
import createScreenInjector from "./createScreen.command/createScreen.injector.pipeline";

const injections = { createNavigatorInjector, createScreenInjector };

async function runInjections() {
  await createNavigatorInjector({ navigatorName: "Onboarding" });
  await createScreenInjector({
    navigatorName: "Onboarding",
    screenName: "GoogleSignUp",
  });
}
runInjections();

export default injections;
