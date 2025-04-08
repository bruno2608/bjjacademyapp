// src/screens/SettingsScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { logout } from '../services/authService';
import { useUsuario } from '../contexts/UserContext';

const SettingsScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const { setUsuario } = useUsuario();
  const [isDarkMode, setIsDarkMode] = useState(theme.mode === 'dark');

  useEffect(() => {
    const loadThemePreference = async () => {
      const savedTheme = await SecureStore.getItemAsync('theme');
      if (savedTheme) {
        setIsDarkMode(savedTheme === 'dark');
      }
    };
    loadThemePreference();
  }, []);

  const toggleTheme = async () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    await SecureStore.setItemAsync('theme', newTheme);
  };

  const handleLogout = async () => {
    setUsuario(null); // limpa o contexto de usuário
    await logout();   // faz logout via authService e redireciona
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <Text style={styles.subtitle}>Alternar entre temas e sair.</Text>

      <TouchableOpacity onPress={toggleTheme} style={styles.button}>
        <Ionicons
          name={isDarkMode ? 'moon' : 'sunny'}
          size={28}
          color={theme.text}
        />
        <Text style={styles.buttonText}>
          {isDarkMode ? 'Modo Escuro' : 'Modo Claro'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={28} color="red" />
        <Text style={styles.logoutText}>Sair da Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (theme) => ({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: theme.text,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: theme.subtext,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 8,
    color: theme.text,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  logoutText: {
    fontSize: 16,
    color: 'red',
    marginLeft: 8,
  },
});

export default SettingsScreen;
