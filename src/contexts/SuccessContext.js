// src/contexts/SuccessContext.js
import React, { createContext, useContext, useState } from 'react';

const SuccessContext = createContext();

export const SuccessProvider = ({ children }) => {
  const [successData, setSuccessData] = useState({
    title: 'Tudo certo!',
    message: 'A operação foi concluída com sucesso.',
    animation: require('../assets/success-animation.json'),
    nextScreen: 'MainTabs',
    autoRedirect: true,
  });

  return (
    <SuccessContext.Provider value={{ successData, setSuccessData }}>
      {children}
    </SuccessContext.Provider>
  );
};

export const useSuccess = () => useContext(SuccessContext);
