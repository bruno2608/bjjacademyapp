import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import AppLayout from '../components/AppLayout';

import TopoPerfil from '../components/TopoPerfil';
import usePerfil from '../hooks/usePerfil';
import { navigateTo } from '../navigation/navigationRef';

const HomeScreen = () => {
  const { colors } = useTheme();
  const { isInstrutorOuMais } = usePerfil();

  const userMock = {
    nome: 'Bruno Alves',
    faixa: 'Roxa',
    grau: 1,
    dataInicio: 'jan/2023',
    avatarUrl: 'https://ui-avatars.com/api/?name=Bruno+Alves&background=random',
    capaUrl: 'https://i.imgur.com/WdGink9.png',
  };

  const graduacoesHoje = [
    { id: '1', nome: 'João', grau: 1 },
    { id: '2', nome: 'Maria', grau: 4 },
  ];

  return (
    <AppLayout>
      
        <TopoPerfil {...userMock} />

        {isInstrutorOuMais && (
          <TouchableOpacity
            style={[
              styles.card,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: colors.card,
                borderColor: graduacoesHoje.length > 0 ? colors.primary : 'transparent',
                borderWidth: graduacoesHoje.length > 0 ? 1 : 0,
              },
            ]}
            onPress={() => graduacoesHoje.length > 0 && navigateTo('GraduacoesDoDia')}
            disabled={graduacoesHoje.length === 0}
          >
            <View>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>🎓 Graduações do Dia</Text>
              <Text style={[styles.adminText, { color: colors.subtext }]}>
                {graduacoesHoje.length > 0
                  ? 'Alunos aptos para graduação'
                  : 'Nenhum aluno apto hoje'}
              </Text>
            </View>

            {graduacoesHoje.length > 0 && (
              <View style={[styles.contadorBadge, { backgroundColor: colors.primary }]}>
                <Text style={styles.contadorTexto}>
                  {graduacoesHoje.length.toString().padStart(2, '0')}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Progresso para próxima graduação
          </Text>
          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '65%' }]} />
          </View>
          <Text style={[styles.progressText, { color: colors.text }]}>
            Progresso: 65% — Próxima graduação: 1º grau
          </Text>
        </View>

        <View style={styles.metricsRow}>
          <View style={[styles.metricBox, { backgroundColor: colors.card }]}>
            <Text style={[styles.metricTitle, { color: colors.text }]}>Última aula</Text>
            <Text style={[styles.metricValue, { color: colors.text }]}>1 dia atrás</Text>
          </View>
          <View style={[styles.metricBox, { backgroundColor: colors.card }]}>
            <Text style={[styles.metricTitle, { color: colors.text }]}>Total de aulas</Text>
            <Text style={[styles.metricValue, { color: colors.text }]}>86</Text>
          </View>
          <View style={[styles.metricBox, { backgroundColor: colors.card }]}>
            <Text style={[styles.metricTitle, { color: colors.text }]}>Presença mensal</Text>
            <Text style={[styles.metricValue, { color: colors.text }]}>85%</Text>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Informações pessoais</Text>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: colors.text }]}>Telefone</Text>
            <Text style={[styles.infoValue, { color: colors.text }]}>(- -) ---------</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: colors.text }]}>Peso</Text>
            <Text style={[styles.infoValue, { color: colors.text }]}>--.-- kg</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: colors.text }]}>E-mail</Text>
            <Text style={[styles.infoValue, { color: colors.text }]}>adminhml@bjjacademy.com.br</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: colors.text }]}>Altura</Text>
            <Text style={[styles.infoValue, { color: colors.text }]}>--.-- m</Text>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Últimas aulas</Text>
          <View style={styles.classRow}>
            <Text style={[styles.className, { color: colors.text }]}>Fundamentos</Text>
            <Text style={[styles.classDate, { color: colors.text }]}>03/04/2025</Text>
            <Text style={[styles.presenceBadge, { backgroundColor: '#b2f2bb', color: '#2f9e44' }]}>Presente</Text>
          </View>
          <View style={styles.classRow}>
            <Text style={[styles.className, { color: colors.text }]}>Avançada</Text>
            <Text style={[styles.classDate, { color: colors.text }]}>01/04/2025</Text>
            <Text style={[styles.presenceBadge, { backgroundColor: '#b2f2bb', color: '#2f9e44' }]}>Presente</Text>
          </View>
          <View style={styles.classRow}>
            <Text style={[styles.className, { color: colors.text }]}>Treino Livre</Text>
            <Text style={[styles.classDate, { color: colors.text }]}>29/03/2025</Text>
            <Text style={[styles.presenceBadge, { backgroundColor: '#ffc9c9', color: '#c92a2a' }]}>Ausente</Text>
          </View>
        </View>
      
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    width: '100%',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  adminText: {
    fontSize: 13,
  },
  contadorBadge: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    minWidth: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contadorTexto: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#444',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#4dabf7',
  },
  progressText: {
    fontSize: 12,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    width: '100%',
  },
  metricBox: {
    flex: 1,
    padding: 12,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  metricTitle: {
    fontSize: 12,
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  infoLabel: {
    fontSize: 14,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  classRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  className: {
    flex: 1,
    fontSize: 14,
  },
  classDate: {
    fontSize: 12,
    width: 90,
  },
  presenceBadge: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    textAlign: 'center',
    overflow: 'hidden',
  },
});

export default HomeScreen;