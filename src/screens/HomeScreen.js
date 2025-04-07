import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import AppLayout from '../components/AppLayout';

const HomeScreen = () => {
  const theme = useTheme();
  const colors = {
    background: theme.background,
    text: theme.text,
    card: '#1e1e1e',
    subtext: '#aaa',
  };

  return (
    <AppLayout>
      <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
        <View style={styles.container}>
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.emailText, { color: colors.text }]}>
              adminhml@bjjacademy.com.br
            </Text>
            <View style={styles.badges}>
              <Text style={styles.badge}>Faixa Branca</Text>
              <Text style={styles.badge}>0 graus</Text>
            </View>
          </View>

          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Progresso para próxima graduação
            </Text>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: '65%' }]} />
            </View>
            <Text style={[styles.progressText, { color: colors.subtext }]}>
              Progresso: 65% — Próxima graduação: 1º grau
            </Text>
          </View>

          <View style={styles.metricsRow}>
            <View style={[styles.metricBox, { backgroundColor: colors.card }]}>
              <Text style={[styles.metricTitle, { color: colors.subtext }]}>Última aula</Text>
              <Text style={[styles.metricValue, { color: colors.text }]}>1 dia atrás</Text>
            </View>
            <View style={[styles.metricBox, { backgroundColor: colors.card }]}>
              <Text style={[styles.metricTitle, { color: colors.subtext }]}>Total de aulas</Text>
              <Text style={[styles.metricValue, { color: colors.text }]}>86</Text>
            </View>
            <View style={[styles.metricBox, { backgroundColor: colors.card }]}>
              <Text style={[styles.metricTitle, { color: colors.subtext }]}>Presença mensal</Text>
              <Text style={[styles.metricValue, { color: colors.text }]}>85%</Text>
            </View>
          </View>

          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Informações pessoais</Text>
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.subtext }]}>Telefone</Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>(- -) ---------</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.subtext }]}>Peso</Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>--.-- kg</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.subtext }]}>E-mail</Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>adminhml@bjjacademy.com.br</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={[styles.infoLabel, { color: colors.subtext }]}>Altura</Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>--.-- m</Text>
            </View>
          </View>

          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Últimas aulas</Text>
            <View style={styles.classRow}>
              <Text style={[styles.className, { color: colors.text }]}>Fundamentos</Text>
              <Text style={[styles.classDate, { color: colors.subtext }]}>03/04/2025</Text>
              <Text style={[styles.presenceBadge, { backgroundColor: '#b2f2bb', color: '#2f9e44' }]}>Presente</Text>
            </View>
            <View style={styles.classRow}>
              <Text style={[styles.className, { color: colors.text }]}>Avançada</Text>
              <Text style={[styles.classDate, { color: colors.subtext }]}>01/04/2025</Text>
              <Text style={[styles.presenceBadge, { backgroundColor: '#b2f2bb', color: '#2f9e44' }]}>Presente</Text>
            </View>
            <View style={styles.classRow}>
              <Text style={[styles.className, { color: colors.text }]}>Treino Livre</Text>
              <Text style={[styles.classDate, { color: colors.subtext }]}>29/03/2025</Text>
              <Text style={[styles.presenceBadge, { backgroundColor: '#ffc9c9', color: '#c92a2a' }]}>Ausente</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  emailText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  badges: {
    flexDirection: 'row',
    gap: 8,
  },
  badge: {
    backgroundColor: '#555',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    fontSize: 12,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
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
    backgroundColor: '#69db7c',
  },
  progressText: {
    fontSize: 12,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
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
