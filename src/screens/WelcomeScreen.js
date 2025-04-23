import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import { MotiView } from 'moti';

const { width } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }) {
  const { colors } = useTheme();

  return (
      <View style={styles.container}>
        <LottieView
          source={require('../assets/lottie/lottie_star_glow.json')}
          autoPlay
          loop
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />

        <View style={styles.content}>
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 800 }}
          >
            <Text style={[styles.title, { color: colors.text }]}>BJJ Academy</Text>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 400, type: 'timing', duration: 800 }}
          >
            <Text style={[styles.subtitle, { color: colors.subtext }]}>
              Disciplina. Evolução. Jiu-Jitsu.
            </Text>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 800, type: 'timing', duration: 800 }}
          >
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#1877F2' }]}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.outlineButton, { borderColor: '#1877F2' }]}
              onPress={() => navigation.navigate('Cadastro')}
            >
              <Text style={styles.outlineButtonText}>Criar conta</Text>
            </TouchableOpacity>
          </MotiView>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 100,
    width: '100%',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  outlineButton: {
    paddingVertical: 14,
    borderRadius: 100,
    borderWidth: 2,
    width: '100%',
  },
  outlineButtonText: {
    color: '#1877F2',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});