import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { navigateTo } from '../navigation/navigationRef';

const WelcomeScreen = () => {
  const theme = useTheme();
  const { height } = Dimensions.get('window');
  const styles = getStyles(theme);

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Image
          source={{ uri: 'https://i.imgur.com/WdGink9.png' }}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Treinar <Text style={styles.highlight}>é evoluir.</Text>
          </Text>
          <Text style={styles.subtitle}>
            Sua jornada no Jiu-Jitsu começa agora.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigateTo('Login')}
          >
            <Text style={styles.primaryText}>Acessar minha conta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigateTo('Cadastro')}
          >
            <Text style={styles.secondaryText}>Abrir conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const getStyles = (theme) => ({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 48,
    justifyContent: 'space-between',
  },
  logo: {
    width: 180,
    height: 90,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'left',
  },
  highlight: {
    color: '#1877F2', // azul forte
  },
  subtitle: {
    fontSize: 15,
    color: '#cfcfcf',
    marginTop: 12,
    textAlign: 'left',
    maxWidth: 280,
    lineHeight: 22,
  },
  buttonContainer: {
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#1877F2',
    paddingVertical: 16,
    borderRadius: 40,
    alignItems: 'center',
  },
  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    borderColor: '#1877F2',
    borderWidth: 1.5,
    paddingVertical: 16,
    borderRadius: 40,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#1877F2',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WelcomeScreen;
