// src/services/authService.js
import { supabase } from './supabaseClient';
import Toast from 'react-native-toast-message';
import { resetTo } from '../navigation/navigationRef';

export const loginWithApi = async (email, password, setLoading) => {
  try {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Erro ao fazer login',
        text2: error.message || 'Verifique seu e-mail e senha.',
      });
      return false;
    }

    resetTo('Success');
    return true;
  } catch (e) {
    Toast.show({
      type: 'error',
      text1: 'Erro inesperado',
      text2: 'Tente novamente mais tarde.',
    });
    return false;
  } finally {
    setLoading(false);
  }
};

export const logout = async () => {
  await supabase.auth.signOut();
  resetTo('AuthStack');
};
