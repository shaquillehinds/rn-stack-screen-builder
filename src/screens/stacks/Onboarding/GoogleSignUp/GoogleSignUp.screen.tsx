import React from 'react';
import { StyleSheet, View } from 'react-native';
import GoogleSignUpController from './GoogleSignUp.controller';

export default function GoogleSignUpScreen(
  props: OnboardingStackScreenProps<'GoogleSignUp'>,
) {
  const controller = GoogleSignUpController(props);
  return (<View></View>);
}

const styles = StyleSheet.create({});
