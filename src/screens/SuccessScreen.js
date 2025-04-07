// src/screens/SuccessScreen.js
import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useTheme } from '../contexts/ThemeContext';
import { useUsuario } from '../contexts/UserContext'; // p/ setUsuario

const SuccessScreen = () => {
  const theme = useTheme();
  const { setUsuario } = useUsuario(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      // Seta algum objeto de usuário (pode ser qualquer dado, mas não nulo)
      setUsuario({ email: 'adminhml@bjjacademy.com.br', id: 'XYZ' });
      // Isso faz o 'isAuthenticated' virar true no AppNavigator => exibe MainTabs
    }, 1500);
    return () => clearTimeout(timer);
  }, [setUsuario]);

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
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  animation: {
    width: 200, height: 200,
  },
  message: {
    fontSize: 18, marginTop: 16,
  },
});

export default SuccessScreen;
