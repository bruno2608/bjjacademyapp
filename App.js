// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { UserProvider } from './src/contexts/UserContext';
import { navigationRef } from './src/navigation/navigationRef';
import Toast from 'react-native-toast-message';
import CustomToast from './src/components/CustomToast';

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <NavigationContainer ref={navigationRef}>
          <AppNavigator />
          <Toast config={{ error: (props) => <CustomToast {...props} /> }} />
        </NavigationContainer>
      </UserProvider>
    </ThemeProvider>
  );
}
