// src/services/authService.js
import axios from 'axios';
import Toast from 'react-native-toast-message';
import { resetTo } from '../navigation/navigationRef';

const API_URL = 'http://192.168.100.87:3000';

export const loginWithApi = async (email, password, setLoading, setUsuario) => {
  try {
    setLoading(true);
    console.log('🔁 Enviando login para a API...');

    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      senha: password,
    });

    const { access_token, email: userEmail, nivel_acesso, academia_id } = response.data;

    console.log('✅ Login bem-sucedido. Token recebido.');

    setUsuario({
      token: access_token,
      email: userEmail,
      nivel_acesso,
      academia_id,
    });

    resetTo('Success');
    return true;
  } catch (error) {
    console.log('🔥 Erro no login:', error?.response?.data || error.message);

    Toast.show({
      type: 'error',
      text1: 'Erro ao fazer login',
      text2: error?.response?.data?.message || 'Verifique suas credenciais.',
      position: 'bottom',
    });

    return false;
  } finally {
    setLoading(false);
  }
};