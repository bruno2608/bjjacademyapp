import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { loginWithApi } from '../services/authService';

const LoginScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    await loginWithApi(email, password, setLoading);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.logoArea}>
        <Image
          source={{ uri: 'https://i.imgur.com/WdGink9.png' }}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.slogan}>Entre na sua conta para continuar</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor={theme.subtext}
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <View style={styles.passwordWrapper}>
          <TextInput
            placeholder="Senha"
            placeholderTextColor={theme.subtext}
            value={password}
            onChangeText={setPassword}
            style={[styles.input, { flex: 1, paddingRight: 40 }]}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
              color={theme.text}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const getStyles = (theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoArea: {
    alignItems: 'center',
    marginBottom: 48,
  },
  logoImage: {
    width: 160,
    height: 160,
    marginBottom: 12,
  },
  slogan: {
    fontSize: 14,
    color: theme.subtext,
  },
  form: {
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.border,
    backgroundColor: theme.card,
    color: theme.text,
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
  },
  passwordWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeButton: {
    position: 'absolute',
    right: 14,
  },
  button: {
    backgroundColor: theme.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default LoginScreen;
