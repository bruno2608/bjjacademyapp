import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import AppLayout from '../components/AppLayout';
import { useUserContext } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';

export default function SettingsScreen() {
  const { logout } = useUserContext();
  const theme = useTheme();
  const colors = theme?.colors || {
    background: '#111',
    text: '#fff',
    card: '#1c1c1c',
  };

  const user = {
    nome: 'Bruno Alves',
    email: 'adminhml@bjjacademy.com.br',
    matricula: '00123',
    avatar: 'https://ui-avatars.com/api/?name=Bruno+Alves&background=random',
  };

  return (
    <AppLayout>
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={[styles.nome, { color: colors.text }]}>{user.nome}</Text>
        <Text style={[styles.email, { color: colors.text }]}>{user.email}</Text>
        <Text style={[styles.info, { color: colors.text }]}>Matrícula {user.matricula}</Text>
      </View>

      <View style={styles.card}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Tema</Text>
        <Button title="🌙 Tema Escuro" onPress={() => theme.toggleTheme('dark')} />
        <Button title="☀️ Tema Claro" onPress={() => theme.toggleTheme('light')} />
        <Button title="🖥️ Tema do Sistema" onPress={() => theme.toggleTheme('system')} />
      </View>

      <View style={{ marginTop: 24 }}>
        <Button title="Sair do sistema" onPress={logout} />
      </View>

      <Text style={[styles.version, { color: colors.text }]}>
        Versão do app: {Constants.expoConfig?.version || '1.0.0'}
      </Text>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    marginBottom: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    marginTop: 4,
  },
  info: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  version: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 48,
    opacity: 0.5,
  },
});