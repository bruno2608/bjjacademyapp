import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../services/supabaseClient';

const SettingsScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const navigation = useNavigation();

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
    // Aqui futuramente podemos aplicar a troca de tema real
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
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
