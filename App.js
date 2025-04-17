// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { UserProvider } from './src/contexts/UserContext';
import AppNavigator from './src/navigation/AppNavigator';
import { SuccessProvider } from './src/contexts/SuccessContext';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/navigationRef';

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <SuccessProvider>
          <StatusBar style="light" backgroundColor="#000" />
          <NavigationContainer ref={navigationRef}>
            <AppNavigator />
            <Toast />
          </NavigationContainer>
        </SuccessProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
