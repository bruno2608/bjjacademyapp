import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator,
  Image, KeyboardAvoidingView, Platform, StyleSheet, ImageBackground
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { registerWithApi } from '../services/authService';
import { resetTo } from '../navigation/navigationRef';

const CadastroScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [codigoConvite, setCodigoConvite] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    const sucesso = await registerWithApi(
      { nome, email, senha, codigo_convite: codigoConvite },
      setLoading
    );

    if (!sucesso) {
      console.log('⚠️ Cadastro falhou. Toast já exibido pela service.');
    }
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
        <TouchableOpacity style={styles.backButton} onPress={() => resetTo('Welcome')}>
          <Ionicons name="chevron-back" size={28} color={theme.text} />
        </TouchableOpacity>

        <View style={styles.logoArea}>
          <Image source={{ uri: 'https://i.imgur.com/WdGink9.png' }} style={styles.logoImage} resizeMode="contain" />
          <Text style={styles.slogan}>Comece sua jornada no Jiu-Jitsu agora</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            placeholder="Nome completo"
            placeholderTextColor={theme.subtext}
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />
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
              value={senha}
              onChangeText={setSenha}
              style={[styles.input, { flex: 1, paddingRight: 40 }]}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color={theme.text} />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Código de convite"
            placeholderTextColor={theme.subtext}
            value={codigoConvite}
            onChangeText={setCodigoConvite}
            style={styles.input}
            autoCapitalize="characters"
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Cadastrar</Text>
            )}
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
});

export default CadastroScreen;