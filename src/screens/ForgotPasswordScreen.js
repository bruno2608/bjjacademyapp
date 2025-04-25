
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView,
  Platform, StyleSheet, ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { navigateTo, resetTo } from '../navigation/navigationRef';
import { useNavigation } from '@react-navigation/native';


export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(false);

  const handleEnviar = () => {
    if (!email.includes('@')) {
      setErro(true);
      return;
    }
    setErro(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetTo('Success', {
        title: 'Instruções enviadas!',
        subtitle: 'Verifique seu e-mail para redefinir sua senha.',
        nextScreen: 'Login',
      });
    }, 1500);
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

        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Text style={[styles.title, { color: colors.text }]}>Esqueceu sua senha?</Text>
          <Text style={[styles.subtitle, { color: colors.subtext }]}>
            Não se preocupe! Isso acontece. Insira o e-mail associado à sua conta.
          </Text>

          <Text style={{ color: colors.text, marginBottom: 8, fontWeight: '500' }}>
            Endereço de e-mail
          </Text>
          <TextInput
            placeholder="Digite seu endereço de e-mail"
            placeholderTextColor={colors.subtext}
            value={email}
            onChangeText={setEmail}
            style={[
              styles.input,
              { backgroundColor: colors.card, color: colors.text },
              erro && { borderColor: 'red' },
            ]}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#1877F2' }]}
            onPress={handleEnviar}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Enviar código</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('VerifyCode')}>
            <Text style={{ color: '#0af', textAlign: 'center', marginTop: 12 }}>
              Ir para verificação (teste)
            </Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>

        <TouchableOpacity onPress={() => resetTo('Login')}>
          <Text style={[styles.registerText, { color: colors.text }]}>
            Lembrou sua senha? <Text style={{ color: '#1877F2', fontWeight: 'bold' }}>Conecte-se</Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  container: { flex: 1, justifyContent: 'flex-start', paddingHorizontal: 24, paddingTop: 100 },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 24,
    zIndex: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 28,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 100,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    padding: 16,
    borderRadius: 100,
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
    textAlign: 'center',
    marginTop: 132,
  },
});
