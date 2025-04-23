
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator,
  Platform, StyleSheet, ScrollView, KeyboardAvoidingView, Linking
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { useTheme } from '../contexts/ThemeContext';
import { registerWithApi } from '../services/authService';
import { resetTo } from '../navigation/navigationRef';

export default function CadastroScreen() {
  const { colors } = useTheme();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [codigoConvite, setCodigoConvite] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [erros, setErros] = useState({});

  const handleRegister = async () => {
    const novosErros = {};
    if (!nome) novosErros.nome = true;
    if (!email.includes('@')) novosErros.email = true;
    if (!senha) novosErros.senha = true;
    if (!confirmarSenha || senha !== confirmarSenha) novosErros.confirmarSenha = true;
    if (!codigoConvite) novosErros.codigoConvite = true;
    if (!aceitouTermos) novosErros.termos = true;

    setErros(novosErros);
    if (Object.keys(novosErros).length > 0) return;

    await registerWithApi({ nome, email, senha, codigo_convite: codigoConvite }, setLoading);
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
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity style={{ position: 'absolute', top: Platform.OS === 'ios' ? 60 : 40, left: 24, zIndex: 10 }} onPress={() => resetTo('Welcome')}>
          <Ionicons name="chevron-back" size={28} color={colors.text} />
        </TouchableOpacity>

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView contentContainerStyle={{ paddingBottom: 48 }} keyboardShouldPersistTaps="handled">
            <View style={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24, paddingTop: 32 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: colors.text }}>Crie sua conta</Text>
              <Text style={{ fontSize: 14, marginTop: 4, marginBottom: 24, textAlign: 'center', color: colors.subtext }}>Digite seus dados para começar</Text>

              <View style={{ gap: 16 }}>
                <TextInput
                  placeholder="Nome completo"
                  placeholderTextColor={colors.subtext}
                  value={nome}
                  onChangeText={setNome}
                  style={[styles.input, { color: colors.text, backgroundColor: colors.card }, erros.nome && styles.erroInput]}
                />
                <TextInput
                  placeholder="E-mail"
                  placeholderTextColor={colors.subtext}
                  value={email}
                  onChangeText={setEmail}
                  style={[styles.input, { color: colors.text, backgroundColor: colors.card }, erros.email && styles.erroInput]}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
                <View style={styles.passwordWrapper}>
                  <TextInput
                    placeholder="Senha"
                    placeholderTextColor={colors.subtext}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={!showPassword}
                    style={[styles.input, { flex: 1, paddingRight: 40, color: colors.text, backgroundColor: colors.card }, erros.senha && styles.erroInput]}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
                    <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color={colors.text} />
                  </TouchableOpacity>
                </View>
                <View style={styles.passwordWrapper}>
                  <TextInput
                    placeholder="Confirmar senha"
                    placeholderTextColor={colors.subtext}
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                    secureTextEntry={!showConfirmPassword}
                    style={[styles.input, { flex: 1, paddingRight: 40, color: colors.text, backgroundColor: colors.card }, erros.confirmarSenha && styles.erroInput]}
                  />
                  <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeButton}>
                    <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color={colors.text} />
                  </TouchableOpacity>
                </View>
                <TextInput
                  placeholder="Código de convite (ex: A1B2C3)"
                  placeholderTextColor={colors.subtext}
                  value={codigoConvite}
                  onChangeText={(text) => setCodigoConvite(text.toUpperCase())}
                  style={[styles.input, { color: colors.text, backgroundColor: colors.card }, erros.codigoConvite && styles.erroInput]}
                  autoCapitalize="characters"
                  maxLength={6}
                />

                <TouchableOpacity onPress={() => setAceitouTermos(!aceitouTermos)} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                  <Ionicons
                    name={aceitouTermos ? 'checkbox' : 'square-outline'}
                    size={22}
                    color={erros.termos ? 'red' : colors.text}
                    style={{ marginRight: 8 }}
                  />
                  <Text style={{ fontSize: 12, color: colors.text }}>
                    Ao continuar, você aceita nossos{' '}
                    <Text style={{ color: '#1877F2', textDecorationLine: 'underline' }} onPress={() => Linking.openURL('LINK')}>
                      Termos de Uso
                    </Text>.
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, !aceitouTermos && { opacity: 0.6 }]}
                  onPress={handleRegister}
                  disabled={loading}
                >
                  {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Cadastrar</Text>}
                </TouchableOpacity>

                <View style={styles.dividerContainer}>
                  <View style={styles.line} />
                  <Text style={[styles.dividerText, { color: colors.text }]}>ou</Text>
                  <View style={styles.line} />
                </View>

                <TouchableOpacity style={styles.googleButton}>
                  <Ionicons name="logo-google" size={20} color="#fff" />
                  <Text style={styles.googleText}>Cadastrar com Google</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => resetTo('Login')} style={{ marginTop: 24 }}>
                <Text style={{ fontSize: 14, textAlign: 'center', color: colors.text }}>
                  Já tem uma conta? <Text style={{ color: '#1877F2', fontWeight: 'bold' }}>Fazer login</Text>
                </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 100,
    padding: 14,
    fontSize: 16,
  },
  erroInput: {
    borderColor: 'red',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeButton: { position: 'absolute', right: 14 },
  button: {
    backgroundColor: '#1877F2',
    padding: 16,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
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
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB4437',
    paddingVertical: 12,
    borderRadius: 100,
  },
  googleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});
