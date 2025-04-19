import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Header from './Header';

const AppLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717', // fundo escuro padrão
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
  },
});

export default AppLayout;
