import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <>
      <View style={styles.statusBarBackground} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerBar}>
          <Ionicons name="school-outline" size={24} color="#fff" />
          <Text style={styles.logoText}>BJJ Academy</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
    backgroundColor: '#243C8B',
  },
  safeArea: {
    backgroundColor: '#243C8B',
  },
  headerBar: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Header;
