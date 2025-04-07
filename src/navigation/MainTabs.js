import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CheckinScreen from '../screens/CheckinScreen';
import EvolucaoScreen from '../screens/EvolucaoScreen';
import PresencaScreen from '../screens/PresencaScreen';
import { useTheme } from '../contexts/ThemeContext';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
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
          const iconMap = {
            Home: focused ? 'home' : 'home-outline',
            Presença: focused ? 'book' : 'book-outline',
            Checkin: focused ? 'clipboard-check' : 'clipboard-check-outline',
            Evolução: focused ? 'medal' : 'medal-outline',
            Configurações: focused ? 'settings' : 'settings-outline',
          };
          if (route.name === 'Checkin') {
            return (
              <MaterialCommunityIcons name={iconMap[route.name]} size={size} color={color} />
            );
          } else {
            return (
              <Ionicons name={iconMap[route.name]} size={size} color={color} />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Presença" component={PresencaScreen} />
      <Tab.Screen name="Checkin" component={CheckinScreen} />
      <Tab.Screen name="Evolução" component={EvolucaoScreen} />
      <Tab.Screen name="Configurações" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
