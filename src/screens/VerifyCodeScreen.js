import React, { useRef, useState } from 'react';
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
import LottieView from 'lottie-react-native';
import AppLayoutWithBackground from '../components/AppLayoutWithBackground';

export default function VerifyCodeScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [codigo, setCodigo] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) text = text.slice(-1);
    const novoCodigo = [...codigo];
    novoCodigo[index] = text;
    setCodigo(novoCodigo);
    if (text && index < 5) inputs.current[index + 1].focus();
  };

  const handleBackspace = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !codigo[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerificar = () => {
    const codigoFinal = codigo.join('');
    if (codigoFinal.length !== 6) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('NewPassword');
    }, 1000);
  };

  return (
    <AppLayoutWithBackground>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color={colors.text} />
      </TouchableOpacity>

      <LottieView
        source={require('../assets/lottie/lottie_email_verify_code.json')}
        autoPlay
        loop
        style={styles.lottieTop}
      />

      <Text style={[styles.title, { color: colors.text }]}>Verificação de Código</Text>
      <Text style={[styles.subtitle, { color: colors.subtext }]}>
        Enviamos um código para seu e-mail. Insira abaixo:
      </Text>

      <View style={styles.otpWrapper}>
        {codigo.map((value, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={[
              styles.otpBox,
              {
                color: colors.text,
                backgroundColor: colors.card,
                borderColor: value ? '#1877F2' : colors.border,
              },
            ]}
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleBackspace(e, index)}
          />
        ))}
      </View>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#1877F2' }]}
        onPress={handleVerificar}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Verificar código</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={[styles.linkText, { color: '#1877F2' }]}>Reenviar código</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.footer}>
        <Text style={[styles.registerText, { color: colors.text }]}>
          Lembrou sua senha?{' '}
          <Text style={{ color: '#1877F2', fontWeight: 'bold' }}>Conecte-se</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('VerifyCode')}
        style={{ marginTop: 32 }}
      >
        <Text style={{ textAlign: 'center', color: '#1877F2', fontSize: 14 }}>
          Simular envio de código
        </Text>
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
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  otpWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 24,
  },
  otpBox: {
    width: 48,
    height: 55,
    borderWidth: 1,
    borderRadius: 12,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 4,
  },
  button: {
    padding: 16,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 12,
    marginHorizontal: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 14,
  },
  registerText: {
    fontSize: 14,
    textAlign: 'center',
  },
  footer: {
    paddingBottom: 40,
    paddingTop: 20,
  },
});
