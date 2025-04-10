import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useUsuario } from '../contexts/UserContext';
import { resetTo } from '../navigation/navigationRef';

const SuccessScreen = () => {
  const theme = useTheme();
  const { setUsuario } = useUsuario();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // ⚠️ Exemplo fixo apenas para ativar autenticação local
      setUsuario({ id: 'placeholder', email: 'usuario@bjj.com.br' });
      resetTo('MainTabs');
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <LottieView
        source={require('../assets/success-animation.json')}
        autoPlay
        loop={false}
        style={styles.animation}
      />
      <Text style={[styles.message, { color: theme.text }]}>
        Login realizado com sucesso!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 200,
    height: 200,
  },
  message: {
    fontSize: 18,
    marginTop: 16,
    fontWeight: '600',
  },
});

export default SuccessScreen;
