import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [carregandoUsuario, setCarregandoUsuario] = useState(true);

  useEffect(() => {
    async function carregarUsuario() {
      try {
        const dados = await AsyncStorage.getItem('@usuario');
        if (dados) {
          setUsuario(JSON.parse(dados));
        }
      } catch (e) {
        console.log('Erro ao restaurar sessão:', e);
      } finally {
        setCarregandoUsuario(false);
      }
    }

    carregarUsuario();
  }, []);

  const setUsuarioPersistente = async (usuarioData) => {
    setUsuario(usuarioData);
    try {
      await AsyncStorage.setItem('@usuario', JSON.stringify(usuarioData));
    } catch (error) {
      console.log('Erro ao salvar usuário:', error);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('@usuario');
    setUsuario(null);
  };

  return (
    <UserContext.Provider value={{ usuario, setUsuario: setUsuarioPersistente, logout, carregandoUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);