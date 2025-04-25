import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import AppLayoutWithBackground from '../components/AppLayoutWithBackground';
import LottieView from 'lottie-react-native';

export default function NewPasswordScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [verSenha, setVerSenha] = useState(false);
  const [verConfirmar, setVerConfirmar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const handleSalvar = () => {
    if (!validouTudo() || senha !== confirmar) {
      setErro('As senhas não atendem aos requisitos ou não coincidem.');
      return;
    }

    setErro('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Success', {
        title: 'Senha alterada!',
        message: 'Agora você pode fazer login com sua nova senha.',
        animation: require('../assets/success-animation.json'),
        nextScreen: 'Login',
        reset: true,
        delay: 2000,
      });
    }, 1000);
  };

  const requisitos = [
    { label: 'Entre 8 e 20 caracteres', valido: senha.length >= 8 && senha.length <= 20 },
    { label: '1 letra maiúscula', valido: /[A-Z]/.test(senha) },
    { label: '1 número', valido: /[0-9]/.test(senha) },
    { label: '1 caractere especial', valido: /[^a-zA-Z0-9]/.test(senha) },
  ];

  const validouTudo = () => requisitos.every((r) => r.valido);

  return (
    <AppLayoutWithBackground>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={28} color={colors.text} />
      </TouchableOpacity>

      <LottieView
        source={require('../assets/lottie/lottie_security.json')}
        autoPlay
        loop
        style={styles.lottieTop}
      />

      <Text style={[styles.title, { color: colors.text }]}>Nova Senha</Text>
      <Text style={[styles.subtitle, { color: colors.subtext }]}>
        Crie e confirme sua nova senha segura:
      </Text>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nova senha"
          placeholderTextColor={colors.subtext}
          style={[styles.input, { color: colors.text, backgroundColor: colors.card, borderColor: colors.border }]}
          secureTextEntry={!verSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.eye} onPress={() => setVerSenha(!verSenha)}>
          <Ionicons name={verSenha ? 'eye-off' : 'eye'} size={20} color={colors.subtext} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Confirmar senha"
          placeholderTextColor={colors.subtext}
          style={[styles.input, { color: colors.text, backgroundColor: colors.card, borderColor: colors.border }]}
          secureTextEntry={!verConfirmar}
          value={confirmar}
          onChangeText={setConfirmar}
        />
        <TouchableOpacity style={styles.eye} onPress={() => setVerConfirmar(!verConfirmar)}>
          <Ionicons name={verConfirmar ? 'eye-off' : 'eye'} size={20} color={colors.subtext} />
        </TouchableOpacity>
      </View>

      <View style={styles.requisitos}>
        {requisitos.map((item, index) => (
          <View key={index} style={styles.requisitoLinha}>
            <Ionicons
              name={item.valido ? 'checkmark-circle' : 'close-circle'}
              size={16}
              color={item.valido ? 'green' : 'red'}
              style={{ marginRight: 8 }}
            />
            <Text style={{ color: colors.text, fontSize: 13 }}>{item.label}</Text>
          </View>
        ))}
      </View>

      {erro !== '' && <Text style={[styles.erro, { color: 'red' }]}>{erro}</Text>}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#1877F2' }]}
        onPress={handleSalvar}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Continuar</Text>
        )}
      </TouchableOpacity>
    </AppLayoutWithBackground>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 24,
    zIndex: 10,
  },
  lottieTop: {
    width: 240,
    height: 160,
    alignSelf: 'center',
    marginBottom: 12,
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  inputGroup: {
    marginBottom: 16,
    position: 'relative',
  },
  input: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 16,
    paddingRight: 42,
  },
  eye: {
    position: 'absolute',
    right: 12,
    top: 16,
  },
  requisitos: {
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  requisitoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  erro: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    padding: 16,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 4,
    marginHorizontal: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
