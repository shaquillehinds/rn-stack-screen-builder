type OnboardingStackParamList = {
  GoogleSignUp: undefined;
  PhoneVerificaion: undefined;
};

type OnboardingStackScreenProps<T extends keyof OnboardingStackParamList> =
  import("@react-navigation/stack").StackScreenProps<
    OnboardingStackParamList,
    T,
    "OnboardingStack"
  >;
