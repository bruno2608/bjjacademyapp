import React from 'react';
import { ScrollView, StyleSheet, Platform } from 'react-native';

const ScreenContainer = ({ children, style }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.container, style]}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
    paddingBottom: Platform.OS === 'ios' ? 60 : 40,
    paddingTop: 0,
    flexGrow: 1,
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

export default ScreenContainer;