import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { navigationRef } from './src/navigation/navigationRef';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { UserProvider } from './src/contexts/UserContext';
import { SuccessProvider } from './src/contexts/SuccessContext';
import Toast from 'react-native-toast-message';
import CustomToast from './src/components/CustomToast';

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <SuccessProvider>
          <NavigationContainer ref={navigationRef}>
            <AppNavigator />
            <Toast config={{ error: (props) => <CustomToast {...props} /> }} />
          </NavigationContainer>
        </SuccessProvider>
      </UserProvider>
    </ThemeProvider>
  );
}