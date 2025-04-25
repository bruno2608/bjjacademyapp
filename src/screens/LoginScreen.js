
// Versão atualizada do LoginScreen com validação visual (borda vermelha)

import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator,
  StyleSheet, Platform, Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { useTheme } from '../contexts/ThemeContext';
import { loginWithApi } from '../services/authService';
import { useUserContext } from '../contexts/UserContext';
import { resetTo } from '../navigation/navigationRef';
import { navigateTo } from '../navigation/navigationRef';


export default function LoginScreen() {
  const { colors } = useTheme();
  const { setUsuario } = useUserContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [erros, setErros] = useState({});

  const handleLogin = async () => {
    const novosErros = {};
    if (!email || !email.includes('@')) novosErros.email = true;
    if (!password) novosErros.password = true;

    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    const sucesso = await loginWithApi(email, password, setLoading, setUsuario);
    if (sucesso) {
      resetTo('Success', {
        title: 'Login realizado!',
        subtitle: 'Bem-vindo de volta.',
        nextScreen: 'MainTabs'
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require('../assets/lottie/lottie_star_glow.json')}
        autoPlay
        loop
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      />

      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity style={styles.backButton} onPress={() => resetTo('Welcome')}>
          <Ionicons name="chevron-back" size={28} color={colors.text} />
        </TouchableOpacity>

        <View style={styles.container}>
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 800 }}
            style={styles.logoWrapper}
          >
            <Image
              source={{ uri: 'https://i.imgur.com/WdGink9.png' }}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={[styles.title, { color: colors.text }]}>Entrar na sua conta</Text>
            <Text style={[styles.subtitle, { color: colors.subtext }]}>Digite seus dados para continuar</Text>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 500, type: 'timing', duration: 800 }}
            style={styles.form}
          >
            <TextInput
              placeholder="E-mail"
              placeholderTextColor={colors.subtext}
              value={email}
              onChangeText={setEmail}
              style={[
                styles.input,
                { color: colors.text, backgroundColor: colors.card },
                erros.email && { borderColor: 'red' }
              ]}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <View style={styles.passwordWrapper}>
              <TextInput
                placeholder="Senha"
                placeholderTextColor={colors.subtext}
                value={password}
                onChangeText={setPassword}
                style={[
                  styles.input,
                  { flex: 1, paddingRight: 40, color: colors.text, backgroundColor: colors.card },
                  erros.password && { borderColor: 'red' }
                ]}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color={colors.text} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigateTo('ForgotPassword')}>
              <Text style={[styles.forgotText, { color: colors.text }]}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Entrar</Text>
              )}
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <View style={styles.line} />
              <Text style={[styles.dividerText, { color: colors.text }]}>ou</Text>

              <View style={styles.line} />
            </View>

            <TouchableOpacity style={styles.googleButton}>
              <Ionicons name="logo-google" size={20} color="#fff" />
              <Text style={styles.googleText}>Entrar com Google</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => resetTo('Cadastro')}>
              <Text style={[styles.registerText, { color: colors.text }]}>
                Não tem conta? <Text style={{ color: '#1877F2', fontWeight: 'bold' }}>Registrar-se</Text>
              </Text>
            </TouchableOpacity>
          </MotiView>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 24 },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 24,
    zIndex: 10,
  },
  logoWrapper: { alignItems: 'center', marginBottom: 32 },
  logoImage: { width: 120, height: 120, marginBottom: 12 },
  title: { fontSize: 22, fontWeight: 'bold' },
  subtitle: { fontSize: 14, marginTop: 4, marginBottom: 12 },
  form: { gap: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 100,
    padding: 14,
    fontSize: 16,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeButton: { position: 'absolute', right: 14 },
  forgotText: { fontSize: 14, textAlign: 'right' },
  button: {
    backgroundColor: '#1877F2',
    padding: 16,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  registerText: { fontSize: 14, textAlign: 'center', marginTop: 12 },
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    backgroundColor: '#DB4437',
    paddingVertical: 16,
    borderRadius: 100,
  },
  googleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 14,
    
    fontWeight: '500',
  },
});
