import React from 'react';
import { View, StyleSheet } from 'react-native';

const BELT_COLORS = {
  Branca: '#FFFFFF',
  Azul:   '#1E88E5',
  Roxa:   '#8E24AA',
  Marrom: '#6D4C41',
  Preta:  '#000000',
};

const PONTEIRA_W   = 56;
const RIGHT_TAIL_W = 14;
const EDGE_MARGIN  = 6;
const STRIPE_W     = 4;
const STRIPE_GAP   = 4;
const MAX_GRAUS    = 4;

export default function FaixaComGraus({
  faixa  = 'Branca',
  grau   = 0,
  width  = 260,
  height = 20,
}) {
  const color   = BELT_COLORS[faixa] ?? '#999';
  const n       = Math.max(0, Math.min(grau, MAX_GRAUS));
  const corpoW  = Math.max(0, width - PONTEIRA_W - RIGHT_TAIL_W);
  const stripeH = height * 0.9;
  const stripeT = (height - stripeH) / 2;

  return (
    <View style={[styles.wrap, { width, height }]}>
      <View style={[styles.seg, { width: corpoW, backgroundColor: color }]} />
      <View style={[styles.seg, { width: PONTEIRA_W }]}>
        {Array.from({ length: n }).map((_, i) => (
          <View
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            style={[
              styles.stripe,
              {
                width: STRIPE_W,
                height: stripeH,
                top: stripeT,
                left: EDGE_MARGIN + i * (STRIPE_W + STRIPE_GAP),
              },
            ]}
          />
        ))}
      </View>
      <View style={[styles.seg, { width: RIGHT_TAIL_W, backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', overflow: 'hidden', borderRadius: 4 },
  seg:  { backgroundColor: '#000', position: 'relative' },
  stripe: { backgroundColor: '#FFF', position: 'absolute', borderRadius: 1 },
});
