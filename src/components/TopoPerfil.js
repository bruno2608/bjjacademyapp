import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import FaixaComGraus from './FaixaComGraus';
import { useTheme } from '../contexts/ThemeContext';

const TopoPerfil = ({ nome, faixa, grau, dataInicio, avatarUrl, capaUrl }) => {
  const { colors } = useTheme();

  return (
    <>
      {/* Capa sozinha, fora do container cinza */}
      <ImageBackground source={{ uri: capaUrl }} style={styles.capa}>
        <View style={styles.overlay} />
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      </ImageBackground>

      {/* Card com as infos */}
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Text style={[styles.nome, { color: colors.text }]}>{nome}</Text>

        <FaixaComGraus faixa={faixa} grau={grau} />

        <View style={styles.faixaLabelWrapper}>
          <Text style={styles.faixaLabel}>
            Faixa {faixa} • {grau}º grau
          </Text>
        </View>

        <Text style={[styles.subinfo, { color: colors.subtext }]}>
          Treinando desde {dataInicio}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  capa: {
    height: 160,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: -44,
    zIndex: 10,
  },
  card: {
    alignItems: 'center',
    paddingTop: 56,
    paddingBottom: 16,
    paddingHorizontal: 4,
    marginHorizontal: 1,
    marginBottom: 16,
    borderRadius: 12,
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  faixaLabelWrapper: {
    backgroundColor: '#333',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 6,
  },
  faixaLabel: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 13,
  },
  subinfo: {
    marginTop: 4,
    fontSize: 13,
  },
});

export default TopoPerfil;
