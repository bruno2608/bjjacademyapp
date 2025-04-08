import { Platform } from 'react-native';

if (Platform.OS === 'web') {
  require('./src/global.css');
}

import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);
