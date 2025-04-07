import React from 'react';
import { Alert, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CheckinScreen from '../screens/CheckinScreen';
import EvolucaoScreen from '../screens/EvolucaoScreen';
import PresencaScreen from '../screens/PresencaScreen';
import { useTheme } from '../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function LogoutScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    Alert.alert(
      'Confirmar saída',
      'Você deseja realmente sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
          onPress: () => navigation.navigate('Home'),
        },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: () => {
            // 🔐 lógica de logout futura aqui
            console.log('Deslogado');
            navigation.navigate('Home');
          },
        },
      ],
      { cancelable: true }
    );
  }, [navigation]);

  return null;
}

export default function AppNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.card,
          borderTopColor: theme.border || 'transparent',
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? getBottomSpace() + 8 : 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: theme.text,
        tabBarInactiveTintColor: theme.subtext,
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Home') {
            return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
          } else if (route.name === 'Presença') {
            return <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color} />;
          } else if (route.name === 'Check-in') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'clipboard-check' : 'clipboard-check-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Evolução') {
            return <Ionicons name={focused ? 'medal' : 'medal-outline'} size={size} color={color} />;
          } else if (route.name === 'Configurações') {
            return <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />;
          } else if (route.name === 'Sair') {
            return <Ionicons name="log-out-outline" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Presença" component={PresencaScreen} />
      <Tab.Screen name="Check-in" component={CheckinScreen} />
      <Tab.Screen name="Evolução" component={EvolucaoScreen} />
      <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
