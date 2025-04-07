import { createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';
import themes from '../themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const colorScheme = useColorScheme();
    // console.log('🎨 Detected device theme:', colorScheme); // <--- log de debug
    const theme = themes[colorScheme] || themes.dark;
    
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
