import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📄 Detail Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24 },
});
