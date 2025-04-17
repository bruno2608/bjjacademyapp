// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainTabs from './MainTabs';
import { useUserContext } from '../contexts/UserContext';
import SuccessScreen from '../screens/SuccessScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { usuario } = useUserContext();
  const isAuthenticated = !!usuario;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated && (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
      {isAuthenticated && (
        <>
          <Stack.Screen name="MainTabs" component={MainTabs} />
          <Stack.Screen name="Success" component={SuccessScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
