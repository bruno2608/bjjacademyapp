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
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../services/supabaseClient';
import { useTheme } from '../contexts/ThemeContext';
import { useUsuario } from '../contexts/UserContext';

const LoginScreen = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const { setUsuario } = useUsuario();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
    } else {
      const { data: usuario } = await supabase
        .from('usuarios')
        .select('*')
        .eq('auth_id', supabase.auth.user().id)
        .single();

      setUsuario(usuario);

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }

    setLoading(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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

        <TextInput
          placeholder="Senha"
          placeholderTextColor={theme.subtext}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
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
    borderColor: theme.card,
    backgroundColor: theme.card,
    color: theme.text,
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
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
  errorText: {
    color: 'red',
    fontSize: 13,
    textAlign: 'center',
    marginTop: -8,
  },
});

export default LoginScreen;
