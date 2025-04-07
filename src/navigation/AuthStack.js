// src/navigation/AuthStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SuccessScreen from '../screens/SuccessScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen 
        name="Success"
        component={SuccessScreen}
        options={{ presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
