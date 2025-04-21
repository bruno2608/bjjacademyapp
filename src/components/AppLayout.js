import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Platform,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { StatusBar } from 'expo-status-bar';

const AppLayout = ({ children, scrollable = true, style }) => {
  const { colors, isDark } = useTheme();
  const Container = scrollable ? ScrollView : View;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Container
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, style]}
      >
        {children}
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 4,
    paddingBottom: Platform.OS === 'ios' ? 100 : 80,
    flexGrow: 1,
  },
});

export default AppLayout;