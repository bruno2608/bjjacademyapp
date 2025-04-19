import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import AppLayout from '../components/AppLayout';
import FaixaComGraus from '../components/FaixaComGraus';
import TimelineBullet from '../components/TimelineBullet';

export default function EvolucaoScreen() {
  const faixaAtual = {
    faixa: 'Azul',
    grau: 2,
    desde: '2024-03-15',
  };

  const progresso = {
    percentual: 65,
    tempo: '1 ano e 2 meses',
    aulas: 56,
    faltam: 24,
  };

  const estatisticas = {
    tempoNaFaixa: '1 ano e 2 meses',
    mediaEntreGraduacoes: '4.8 meses',
  };

  const historico = [
    { id: '6', tipo: 'grau', data: '2024-09-01', faixa: 'Azul', grau: 3, professor: 'Prof. Ana' },
    { id: '5', tipo: 'graduacao', data: '2024-03-15', faixa: 'Azul', grau: 0, professor: 'Mestre Silva' },
    { id: '4', tipo: 'grau', data: '2023-09-10', faixa: 'Azul', grau: 1, professor: 'Prof. Ana' },
    { id: '3', tipo: 'grau', data: '2023-03-12', faixa: 'Azul', grau: 0, professor: 'Prof. Ana' },
    { id: '2', tipo: 'grau', data: '2022-07-06', faixa: 'Branca', grau: 4, professor: 'Prof. Carlos' },
    { id: '1', tipo: 'graduacao', data: '2021-01-10', faixa: 'Branca', grau: 0, professor: 'Mestre Silva' },
  ];

  return (
    <AppLayout>
      <View style={styles.topo}>
        <LottieView
          source={{ uri: 'https://lottie.host/3e013e95-9dbe-43e1-9bff-a710674f4fdd/7EaX5G4hKV.lottie' }}
          autoPlay
          loop
          style={{ width: 140, height: 140 }}
        />
        
        
        <Text style={styles.faixaAtual}>🎖 Faixa Atual: {faixaAtual.faixa} – {faixaAtual.grau}º grau</Text>
        <FaixaComGraus faixa={faixaAtual.faixa} grau={faixaAtual.grau} />
        <Text style={styles.detalhe}>📆 Desde {new Date(faixaAtual.desde).toLocaleDateString('pt-BR')}</Text>
        <Text style={styles.detalhe}>🧑 Bruno Alves • Matrícula 00123</Text>
      </View>

      <View style={styles.container}>
        {/* Progresso */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Progresso para próxima graduação</Text>
          <View style={styles.progressoBarLabel}>
            <Text style={styles.progressoTexto}>Próxima graduação</Text>
            <Text style={styles.progressoTexto}>{progresso.percentual}%</Text>
          </View>
          <View style={styles.progressoBar}>
            <View style={[styles.progressoFill, { width: `${progresso.percentual}%` }]} />
          </View>
        </View>

        {/* Estatísticas */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Estatísticas</Text>
          <View style={styles.statsRow}>
            <View style={styles.statsBox}>
              <Text style={styles.statsLabel}>Tempo na faixa atual</Text>
              <Text style={styles.statsValue}>{estatisticas.tempoNaFaixa}</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={styles.statsLabel}>Média entre graduações</Text>
              <Text style={styles.statsValue}>{estatisticas.mediaEntreGraduacoes}</Text>
            </View>
          </View>
        </View>

        {/* Histórico */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Histórico de Graduações</Text>
          <View style={styles.timelineWrapper}>
            {historico.map((item) => (
              <View key={item.id} style={styles.timelineRow}>
                <View style={styles.timelineIconColumn}>
                  <View style={styles.timelineLineTop} />
                  <TimelineBullet type={item.tipo === 'graduacao' ? 'grad' : 'step'} />
                  <View style={styles.timelineLineBottom} />
                </View>
                <View style={styles.timelineContent}>
                  <FaixaComGraus faixa={item.faixa} grau={item.grau} />
                  <Text style={styles.timelineText}>
                    {item.tipo === 'graduacao'
                      ? `Graduação • Faixa ${item.faixa}`
                      : `Faixa ${item.faixa} – ${item.grau}º grau`}
                  </Text>
                  <Text style={styles.timelineDate}>
                    {item.data} • {item.professor}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  topo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  faixaAtual: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  detalhe: {
    fontSize: 13,
    color: '#ccc',
    marginTop: 2,
  },
  container: { padding: 16, paddingBottom: 64 },
  title: { fontSize: 22, color: '#fff', fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  sectionTitle: { fontSize: 16, color: '#ccc', marginBottom: 12 },
  card: {
    backgroundColor: '#1D1D1D',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  progressoBarLabel: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressoTexto: {
    color: '#ccc',
    fontSize: 13,
  },
  progressoBar: {
    height: 8,
    backgroundColor: '#333',
    borderRadius: 4,
    marginTop: 4,
    overflow: 'hidden',
  },
  progressoFill: {
    height: '100%',
    backgroundColor: '#1E88E5',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  statsBox: {
    flex: 1,
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  statsLabel: {
    color: '#ccc',
    fontSize: 12,
    marginBottom: 4,
  },
  statsValue: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  timelineWrapper: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  timelineRow: {
    flexDirection: 'row',
    marginBottom: 36,
    alignItems: 'flex-start',
  },
  timelineIconColumn: {
    width: 40,
    alignItems: 'center',
  },
  timelineLineTop: {
    height: 12,
    width: 2,
    backgroundColor: '#555',
    marginBottom: 4,
  },
  timelineLineBottom: {
    flex: 1,
    width: 2,
    backgroundColor: '#555',
    marginTop: 20,
  },
  timelineContent: {
    flex: 1,
    paddingLeft: 8,
  },
  timelineText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
  },
  timelineDate: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 2,
  },
});