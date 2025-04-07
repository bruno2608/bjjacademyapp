const common = {
  primary: '#243C8B',
  success: '#69db7c',
  danger: '#ff6b6b',
  white: '#ffffff',
  black: '#000000',
  gray: '#999999',
};

export const darkTheme = {
  mode: 'dark',
  background: '#121212',
  card: '#1e1e1e',
  text: '#ffffff',
  subtext: '#aaa',
  ...common,
};

export const lightTheme = {
  mode: 'light',
  background: '#f5f5f5',
  card: '#ffffff',
  text: '#000000',
  subtext: '#444',
  ...common,
};

export default {
  dark: darkTheme,
  light: lightTheme,
};
