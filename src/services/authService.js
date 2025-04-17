import axios from 'axios';
import Toast from 'react-native-toast-message';
import * as jwtDecode from 'jwt-decode'; // ✅ Import compatível com v4.x
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

    const token = response.data?.token || response.data?.access_token;
    if (!token) throw new Error('Token não recebido da API');

    // ✅ jwtDecode v4.x usa named export
    const decoded = jwtDecode.jwtDecode(token);

    const usuario = {
      id: decoded.sub,
      email: decoded.email,
      academia_id: decoded.academia_id,
      nivel_acesso: decoded.nivel_acesso,
      token,
    };

    console.log('✅ Login decodificado:', usuario);
    setUsuario(usuario); // o contexto já salva no AsyncStorage

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