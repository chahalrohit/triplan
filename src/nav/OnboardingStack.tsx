import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Routes from 'config/Routes';
import LoginScreen from 'screens/LoginScreen';
import ForgotPassScreen from 'screens/ForgotPassScreen';
import ResetPassScreen from 'screens/ResetPassScreen';
import AcknowledgementScreen from 'screens/AcknowledgementScreen';
import SignUpScreen from 'screens/SignUpScreen';
import WalkthroughScreen from 'screens/WalkthroughScreen';

const Stack = createStackNavigator();
const OnboardingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Walkthrough}
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={Routes.Walkthrough} component={WalkthroughScreen} />
      <Stack.Screen name={Routes.Login} component={LoginScreen} />
      <Stack.Screen name={Routes.ForgotPassword} component={ForgotPassScreen} />
      <Stack.Screen name={Routes.ResetPassword} component={ResetPassScreen} />
      <Stack.Screen
        name={Routes.ResetSuccess}
        component={AcknowledgementScreen}
      />
      <Stack.Screen name={Routes.Signup} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
