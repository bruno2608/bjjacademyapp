import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
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
    {
      id: '6',
      tipo: 'grau',
      data: '2024-09-01',
      faixa: 'Azul',
      grau: 3,
      professor: 'Prof. Ana',
    },
    {
      id: '5',
      tipo: 'graduacao',
      data: '2024-03-15',
      faixa: 'Azul',
      grau: 0,
      professor: 'Mestre Silva',
    },
    {
      id: '4',
      tipo: 'grau',
      data: '2023-09-10',
      faixa: 'Azul',
      grau: 1,
      professor: 'Prof. Ana',
    },
    {
      id: '3',
      tipo: 'grau',
      data: '2023-03-12',
      faixa: 'Azul',
      grau: 0,
      professor: 'Prof. Ana',
    },
    {
      id: '2',
      tipo: 'grau',
      data: '2022-07-06',
      faixa: 'Branca',
      grau: 4,
      professor: 'Prof. Carlos',
    },
    {
      id: '1',
      tipo: 'graduacao',
      data: '2021-01-10',
      faixa: 'Branca',
      grau: 0,
      professor: 'Mestre Silva',
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Minha Evolução</Text>

        {/* Status Atual */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Status Atual</Text>

          <View style={styles.faixaStatusContainer}>
            <View style={styles.iconBox}>
              <Text style={styles.icon}>🎖️</Text>
            </View>

            <View style={styles.textBox}>
              <Text style={styles.faixaStatusTitulo}>
                Faixa {faixaAtual.faixa} – {faixaAtual.grau}º grau
              </Text>
              <Text style={styles.faixaStatusData}>
                Desde {new Date(faixaAtual.desde).toLocaleDateString('pt-BR')}
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 12 }}>
            <FaixaComGraus faixa={faixaAtual.faixa} grau={faixaAtual.grau} />
          </View>

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

        
        {/* Histórico de Graduações */}
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
                <View style={[styles.timelineContent, item.tipo === 'graduacao' && styles.graduacaoHighlight]}>
                  <FaixaComGraus faixa={item.faixa} grau={item.grau} />
                  <View style={{ marginTop: 6 }}>
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
              </View>
            ))}
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#111' },
  container: { padding: 16, paddingBottom: 64 },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold', marginBottom: 16 },
  sectionTitle: { fontSize: 16, color: '#ccc', marginBottom: 12 },
  card: {
    backgroundColor: '#1D1D1D',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },

  // Faixa atual
  faixaStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 42,
    height: 42,
    backgroundColor: '#1E88E5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
  textBox: {
    flex: 1,
  },
  faixaStatusTitulo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  faixaStatusData: {
    color: '#ccc',
    fontSize: 13,
    marginTop: 2,
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

  // Estatísticas
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

  // Timeline
  timelineWrapper: {
    position: 'relative',
    paddingLeft: 28,
    paddingTop: 8,
    paddingBottom: 8,
  },
  verticalLine: {
    position: 'absolute',
    left: 14,
    top: 14,
    bottom: 0,
    width: 2,
    backgroundColor: '#555',
  },
  timelineItem: {
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  timelineContent: {
    flex: 1,
    paddingLeft: 4,
  },
  timelineText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timelineDate: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 2,
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
  timelineLineBottom: {
    flex: 1,
    width: 2,
    backgroundColor: '#555',
    marginTop: 20,
  },
  timelineLine: {
    marginTop: 6,
    flex: 1,
    width: 2,
    backgroundColor: '#555',
    marginTop: 4,
  },
  timelineContent: {
    flex: 1,
    paddingLeft: 4,
  },

});
