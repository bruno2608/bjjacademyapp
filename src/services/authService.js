import axios from 'axios';
import Toast from 'react-native-toast-message';
import { resetTo } from '../navigation/navigationRef';

const API_URL = 'http://192.168.100.87:3000';

export async function loginWithApi(email, password, setLoading, setUsuario) {
  try {
    setLoading(true);
    console.log('📤 Enviando login para API...');

    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      senha: password,
    });

    console.log('✅ Login: resposta da API:', response.data);

    const { token, usuario } = response.data;

    if (!token || !usuario) throw new Error('Resposta inválida da API');

    setUsuario({ ...usuario, token });

    resetTo('Success', {
      title: 'Login realizado com sucesso!',
      message: '',
      animation: require('../assets/success-animation.json'),
      autoRedirect: true,
      nextScreen: 'MainTabs',
      reset: true
    });

    return true;
  } catch (error) {
    console.error('❌ Erro no login:', error?.response?.data || error.message || error);
    Toast.show({
      type: 'error',
      text1: 'Erro ao fazer login',
      text2: error?.response?.data?.message || error.message || 'Erro inesperado.',
    });
    return false;
  } finally {
    setLoading(false);
  }
}

export async function registerWithApi({ nome, email, senha, codigo_convite }, setLoading) {
  try {
    setLoading(true);

    const codigoFormatado = codigo_convite.startsWith('BJJ-')
      ? codigo_convite
      : `BJJ-${codigo_convite}`;

    const payload = { nome, email, senha, codigo_convite: codigoFormatado };

    console.log('📤 Enviando dados de cadastro para API...');
    console.log('🧾 Payload:', payload);

    const response = await axios.post(`${API_URL}/auth/registrar`, payload);

    console.log('✅ Cadastro: resposta da API:', response.data);

    if (!response || response.status >= 400) {
      throw new Error('Resposta da API inválida');
    }

    resetTo('Success', {
      title: 'Cadastro concluído!',
      message: 'Agora é só fazer login com seus dados.',
      animation: require('../assets/success-animation.json'),
      autoRedirect: true,
      nextScreen: 'Login',
      reset: true
    });

    return true;
  } catch (error) {
    console.error('❌ Erro no cadastro:', error?.response?.data || error.message || error);
    Toast.show({
      type: 'error',
      text1: 'Erro ao cadastrar',
      text2: error?.response?.data?.message || error.message || 'Erro inesperado.',
    });
    return false;
  } finally {
    setLoading(false);
  }
}