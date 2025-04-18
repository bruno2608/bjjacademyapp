
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AppSafeLayout({ children, style }) {
  return (
    <SafeAreaView style={[{ flex: 1 }, style]} edges={['top', 'left', 'right']}>
      {children}
    </SafeAreaView>
  );
}
