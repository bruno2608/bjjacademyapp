import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';

const SettingsScreen = () => {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

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

  const handleLogoutPress = () => {
    Alert.alert('Sair da Conta', 'A funcionalidade ainda não está disponível.');
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

      <TouchableOpacity onPress={handleLogoutPress} style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={28} color="red" />
        <Text style={styles.logoutText}>Sair da Conta</Text>
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
