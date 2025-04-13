// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainTabs from './MainTabs';
import { useUsuario } from '../contexts/UserContext';
import SuccessScreen from '../screens/SuccessScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { usuario } = useUsuario();
  const isAuthenticated = !!usuario;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!usuario && (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
      {usuario && (
        <>
          <Stack.Screen name="Success" component={SuccessScreen} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
