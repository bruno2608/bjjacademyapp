import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.headerBar}>
      <Ionicons name="school-outline" size={24} color="#fff" />
      <Text style={styles.logoText}>BJJ Academy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: '#243C8B',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8, // se não funcionar, substituímos por margin
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Header;
