import React from 'react';
import { StyleSheet, View } from 'react-native';
import PhoneVerificaionController from './PhoneVerificaion.controller';

export default function PhoneVerificaionScreen(
  props: OnboardingStackScreenProps<'PhoneVerificaion'>,
) {
  const controller = PhoneVerificaionController(props);
  return (<View></View>);
}

const styles = StyleSheet.create({});
