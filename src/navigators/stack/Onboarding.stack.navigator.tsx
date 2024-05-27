import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PhoneVerificaionScreen from "@src/screens/stacks/Onboarding/PhoneVerificaion/PhoneVerificaion.screen";
import { NavigationContainer } from "@react-navigation/native";
// import { theme } from '@utils/themes';

const OnboardingStack = createStackNavigator<OnboardingStackParamList>();

interface OnboardingStackNavigatorProps {
  initialRouteName: keyof OnboardingStackParamList;
}

export default function OnboardingStackNavigator(
  props: OnboardingStackNavigatorProps,
) {
  return (
    <NavigationContainer
    //theme={{
    //  dark: theme.mode === 'dark',
    //  colors: {
    //    background: theme.background,
    //    border: theme.background,
    //    card: theme.background,
    //    notification: theme.primary.dark,
    //    primary: theme.primary.dark,
    //    text: theme.typeface.primary,
    //  },
    //}}
    >
      <OnboardingStack.Navigator initialRouteName={props.initialRouteName}>
        <OnboardingStack.Screen
          options={{ headerShown: false }}
          name="PhoneVerificaion"
          component={PhoneVerificaionScreen}
        />
      </OnboardingStack.Navigator>
    </NavigationContainer>
  );
}
