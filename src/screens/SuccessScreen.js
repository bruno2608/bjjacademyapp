import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useRoute } from '@react-navigation/native';
import { navigateTo, resetTo } from '../navigation/navigationRef';

const SuccessScreen = () => {
  const theme = useTheme();
  const route = useRoute();

  const {
    title = 'Tudo certo!',
    message = 'A operação foi concluída com sucesso.',
    animation = require('../assets/success-animation.json'),
    nextScreen = null,
    reset = false,
    autoRedirect = true,
    delay = 2000,
  } = route.params || {};

  useEffect(() => {
    let timeout;

    if (autoRedirect && nextScreen) {
      console.log('🧪 Preparando redirecionamento em', delay, 'ms...');
      timeout = setTimeout(() => {
        try {
          console.log(`🔁 Redirecionando via ${reset ? 'resetTo' : 'navigateTo'}:`, nextScreen);
          reset ? resetTo(nextScreen) : navigateTo(nextScreen);
        } catch (err) {
          console.error('❌ Erro ao redirecionar:', err);
        }
      }, delay);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [autoRedirect, nextScreen, reset, delay]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <LottieView
        source={animation}
        autoPlay
        loop={false}
        style={styles.animation}
      />
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      {message ? (
        <Text style={[styles.message, { color: theme.subtext }]}>{message}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  animation: {
    width: 180,
    height: 180,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  message: {
    fontSize: 15,
    marginTop: 6,
    textAlign: 'center',
  },
});

export default SuccessScreen;