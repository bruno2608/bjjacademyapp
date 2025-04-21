import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import GraduacoesDoDiaScreen from '../screens/GraduacoesDoDiaScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="GraduacoesDoDia" component={GraduacoesDoDiaScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;