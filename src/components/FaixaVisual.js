import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function FaixaVisual({ corBase = '#FFFFFF', corPonteira = '#000000', graus = 0 }) {
  return (
    <View style={[styles.faixa, { backgroundColor: corBase }]}>
      <View style={[styles.ponteira, { backgroundColor: corPonteira }]}>
        <View style={styles.grausContainer}>
          {[...Array(graus)].map((_, i) => (
            <View key={i} style={styles.grau} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  faixa: {
    width: 120,
    height: 20,
    borderRadius: 4,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  ponteira: {
    width: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 2,
  },
  grausContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  grau: {
    width: 3,
    height: 14,
    backgroundColor: '#FFF',
  },
});