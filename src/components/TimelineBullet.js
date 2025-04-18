
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TimelineBullet({ type = 'step', beforeGrad = false, afterGrad = false }) {
  const isGrad = type === 'grad';

  return (
    <View style={styles.container}>
      {/* Linha acima */}
      <View style={styles.lineTop}>
        <View style={[styles.line, (beforeGrad || isGrad) && styles.goldLine]} />
      </View>

      {/* Bullet */}
      <View style={[styles.bullet, isGrad ? styles.gradBullet : styles.stepBullet]}>
        {isGrad ? (
          <MaterialCommunityIcons name="medal-outline" color="#FFD700" size={18} />
        ) : (
          <View style={styles.stepDot} />
        )}
      </View>

      {/* Linha abaixo */}
      <View style={styles.lineBottom}>
        <View style={[styles.line, (afterGrad || isGrad) && styles.goldLine]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 30,
  },
  lineTop: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  lineBottom: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  line: {
    width: 2,
    height: '100%',
    backgroundColor: '#444',
    alignSelf: 'center',
  },
  goldLine: {
    backgroundColor: '#FFD700',
  },
  bullet: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  gradBullet: {
    backgroundColor: '#222',
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  stepBullet: {
    backgroundColor: '#111',
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  stepDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3',
  },
});
