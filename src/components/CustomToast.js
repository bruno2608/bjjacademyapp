// src/components/CustomToast.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

const CustomToast = ({ text1 }) => {
  const theme = useTheme();

  return (
    <View style={[styles.toastContainer, { backgroundColor: '#e74c3c' }]}>
      <Ionicons name="alert-circle" size={22} color="#fff" style={{ marginRight: 8 }} />
      <Text style={styles.toastText}>{text1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  toastText: {
    color: '#fff',
    fontSize: 14,
    flexShrink: 1,
  },
});

export default CustomToast;
