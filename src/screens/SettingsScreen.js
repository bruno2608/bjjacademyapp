import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store'; // Para armazenar preferências do usuário de forma segura

const SettingsScreen = () => {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    // Carregar o tema preferido ao iniciar o app
    const loadThemePreference = async () => {
      const savedTheme = await SecureStore.getItemAsync('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
    };

    loadThemePreference();
  }, []);

  const toggleTheme = async () => {
    // Alternar o estado do tema
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);

    // Salvar a preferência do tema no SecureStore
    await SecureStore.setItemAsync('theme', newTheme);

    // Aqui você pode alterar o app.json para forçar a mudança de tema, mas o expo não permite
    // alterar o app.json diretamente em tempo de execução. O modo automático é a melhor opção.
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Configurações</Text>
      <Text style={[styles.subtitle, { color: theme.subtext }]}>
        Alternar entre temas e sair.
      </Text>

      <TouchableOpacity onPress={toggleTheme} style={styles.button}>
        <Ionicons
          name={isDarkMode ? 'moon' : 'sunny'}
          size={32}
          color={theme.text}
        />
        <Text style={[styles.buttonText, { color: theme.text }]}>
          {isDarkMode ? 'Modo Escuro' : 'Modo Claro'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 8,
  },
});

export default SettingsScreen;
