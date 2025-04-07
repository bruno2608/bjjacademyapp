// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useUsuario } from '../contexts/UserContext'; 
import AuthStack from './AuthStack';
import MainTabs from './MainTabs';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { usuario } = useUsuario();
  const isAuthenticated = usuario !== null;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="MainTabs" component={MainTabs} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
