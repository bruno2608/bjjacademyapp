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
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../services/supabaseClient';
import { useTheme } from '../contexts/ThemeContext';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const styles = getStyles(theme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao fazer login',
        text2: error.message,
      });
    } else {
      navigation.navigate('Success'); // ✅ corrigido
    }

    setLoading(false);
  };

  return (
    <ImageBackground
      source={require('../assets/background-login.jpg')}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color={theme.text} />
        </TouchableOpacity>

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
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color={theme.text} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotText}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.registerText}>Ainda não tem conta? Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const getStyles = (theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 24,
    zIndex: 10,
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
    borderColor: theme.border || '#444',
    backgroundColor: theme.card,
    color: theme.text,
    borderRadius: 40,
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
  forgotText: {
    fontSize: 14,
    color: theme.subtext,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#1877F2',
    padding: 16,
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerText: {
    fontSize: 14,
    color: theme.text,
    textAlign: 'center',
    marginTop: 12,
  },
});

export default LoginScreen;
