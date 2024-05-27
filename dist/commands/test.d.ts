import createNavigatorInjector from "./createNavigator.command/createNavigator.injector.pipeline.js";
import createScreenInjector from "./createScreen.command/createScreen.injector.pipeline.js";
declare const injections: {
    createNavigatorInjector: typeof createNavigatorInjector;
    createScreenInjector: typeof createScreenInjector;
};
export default injections;
