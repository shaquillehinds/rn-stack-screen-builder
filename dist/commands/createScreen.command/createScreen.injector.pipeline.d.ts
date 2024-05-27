interface AddToStoreProps {
    navigatorName: string;
    screenName: string;
}
export default function createScreenInjector({ screenName, navigatorName, }: AddToStoreProps): Promise<void>;
export {};
