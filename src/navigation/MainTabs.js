import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeStack from '../navigation/HomeStack';
import CheckinScreen from '../screens/CheckinScreen';
import EvolucaoScreen from '../screens/EvolucaoScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: '#000',
          borderTopWidth: 0,
          elevation: 0, 
        },
        tabBarActiveTintColor: '#4dabf7',
        tabBarInactiveTintColor: '#d9d9d9',
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Ionicons name="home" size={size} color={color} />;
            case 'Checkin':
              return <MaterialCommunityIcons name="clipboard-check-outline" size={size} color={color} />;
            case 'Evolucao':
              return <Ionicons name="medal-outline" size={size} color={color} />;
            case 'Mais':
              return <Ionicons name="ellipsis-horizontal-outline" size={size} color={color} />;
            default:
              return <Ionicons name="ellipse" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Checkin" component={CheckinScreen} />
      <Tab.Screen name="Evolucao" component={EvolucaoScreen} />
      <Tab.Screen name="Mais" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainTabs;