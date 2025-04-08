// src/navigation/MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

import HomeScreen from '../screens/HomeScreen';
import PresencaScreen from '../screens/PresencaScreen';
import CheckinScreen from '../screens/CheckinScreen';
import EvolucaoScreen from '../screens/EvolucaoScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.card },
        tabBarActiveTintColor: theme.text,
        tabBarInactiveTintColor: theme.subtext,
        tabBarIcon: ({ color, size, focused }) => {
          switch (route.name) {
            case 'Home':
              return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
            case 'Presença':
              return <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color} />;
            case 'Check-in':
              return <MaterialCommunityIcons name={focused ? 'clipboard-check' : 'clipboard-check-outline'} size={size} color={color} />;
            case 'Evolução':
              return <Ionicons name={focused ? 'medal' : 'medal-outline'} size={size} color={color} />;
            case 'Configurações':
              return <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />;
            default:
              return null;
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
};

export default MainTabs;
