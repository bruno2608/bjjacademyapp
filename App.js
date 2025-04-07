import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from './src/contexts/ThemeContext';
import { UserProvider } from './src/contexts/UserContext'; // Adicionando o UserProvider
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <UserProvider>  {/* Aqui envolvemos o App com o contexto de usuário */}
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </UserProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
