import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useThemeColors from '../hooks/useThemeColors';

export default function HomeScreen() {
  const colors = useThemeColors();

  const statsData = {
    progressoPercent: 65,
    ultimaAula: '1 dia atrás',
    totalAulas: 86,
    presencaMensal: '85%',
    ultimasAulas: [
      { data: '03/04/2025', tipo: 'Fundamentos', status: 'Presente' },
      { data: '01/04/2025', tipo: 'Avançada', status: 'Presente' },
      { data: '29/03/2025', tipo: 'Treino Livre', status: 'Ausente' }
    ]
  };

  const userData = {
    nome: 'adminhml@bjjacademy.com.br',
    faixa: 'Branca',
    grau: 0,
    telefone: '(--) ------.----',
    email: 'adminhml@bjjacademy.com.br',
    peso: '--.- kg',
    altura: '--.- m'
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background, paddingBottom: 96 }]}>
        <View style={[styles.headerBar, { backgroundColor: colors.primary }]}>
          <Text style={styles.logoText}>BJJ Academy</Text>
          <TouchableOpacity>
            <Text style={styles.logout}>Sair</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.profileBox, { backgroundColor: colors.card }]}>
          <View style={[styles.avatar, { backgroundColor: colors.primary }]}>
            <Text style={styles.avatarText}>{userData.nome.charAt(0).toUpperCase()}</Text>
          </View>
          <View>
            <Text style={[styles.username, { color: colors.text }]}>{userData.nome}</Text>
            <View style={styles.badges}>
              <Text style={styles.badge}>Faixa {userData.faixa}</Text>
              <Text style={styles.badge}>{userData.grau} graus</Text>
            </View>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Progresso para próxima graduação</Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${statsData.progressoPercent}%`, backgroundColor: colors.success }]} />
          </View>
          <View style={styles.progressTextRow}>
            <Text style={{ fontSize: 12, color: colors.subtext }}>Progresso: {statsData.progressoPercent}%</Text>
            <Text style={{ fontSize: 12, color: colors.subtext }}>Próxima graduação: {userData.grau + 1}° grau</Text>
          </View>
        </View>

        <View style={styles.statRow}>
          <View style={[styles.statCard, { backgroundColor: colors.card }]}>
            <Text style={[styles.statLabel, { color: colors.subtext }]}>Última aula</Text>
            <Text style={[styles.statValue, { color: colors.text }]}>{statsData.ultimaAula}</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.card }]}>
            <Text style={[styles.statLabel, { color: colors.subtext }]}>Total de aulas</Text>
            <Text style={[styles.statValue, { color: colors.text }]}>{statsData.totalAulas}</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.card }]}>
            <Text style={[styles.statLabel, { color: colors.subtext }]}>Presença mensal</Text>
            <Text style={[styles.statValue, { color: colors.text }]}>{statsData.presencaMensal}</Text>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Informações pessoais</Text>
          <View style={styles.infoGrid}>
            <View style={styles.infoItem}><Text style={[styles.infoLabel, { color: colors.subtext }]}>Telefone</Text><Text style={{ color: colors.text }}>{userData.telefone}</Text></View>
            <View style={styles.infoItem}><Text style={[styles.infoLabel, { color: colors.subtext }]}>E-mail</Text><Text style={[styles.bold, { color: colors.text }]}>{userData.email}</Text></View>
            <View style={styles.infoItem}><Text style={[styles.infoLabel, { color: colors.subtext }]}>Peso</Text><Text style={[styles.bold, { color: colors.text }]}>{userData.peso}</Text></View>
            <View style={styles.infoItem}><Text style={[styles.infoLabel, { color: colors.subtext }]}>Altura</Text><Text style={[styles.bold, { color: colors.text }]}>{userData.altura}</Text></View>
          </View>
        </View>

        <View style={[styles.card, { backgroundColor: colors.card, marginBottom: 16 }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Últimas aulas</Text>
          {statsData.ultimasAulas.map((aula, index) => (
            <View
              key={index}
              style={[styles.aulaItem, index < statsData.ultimasAulas.length - 1 && styles.aulaDivider]}
            >
              <View>
                <Text style={[styles.aulaTipo, { color: colors.text }]}>{aula.tipo}</Text>
                <Text style={[styles.aulaData, { color: colors.subtext }]}>{aula.data}</Text>
              </View>
              <Text
                style={[styles.statusTag, aula.status === 'Presente' ? { backgroundColor: '#e8f5e9', color: colors.success } : { backgroundColor: '#ffebee', color: colors.danger } ]}
              >
                {aula.status}
              </Text>
            </View>
          ))}
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={[styles.viewAllText, { color: colors.subtext }]}>Ver todas as aulas</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  logoText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  logout: { color: '#fff' },
  profileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginVertical: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  username: { fontWeight: 'bold' },
  badges: { flexDirection: 'row', marginTop: 4 },
  badge: {
    backgroundColor: '#444',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 12,
    marginRight: 6,
    color: '#fff'
  },
  card: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },
  cardTitle: { fontWeight: '600', fontSize: 16, marginBottom: 12 },
  progressBarBg: {
    height: 12,
    backgroundColor: '#555',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 6,
  },
  progressTextRow: { flexDirection: 'row', justifyContent: 'space-between', fontSize: 14 },
  statRow: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  statCard: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: { fontSize: 12, marginBottom: 6 },
  statValue: { fontSize: 16, fontWeight: 'bold' },
  infoGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  infoItem: { width: '48%' },
  infoLabel: { fontSize: 12, marginBottom: 2 },
  bold: { fontWeight: 'bold' },
  aulaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  aulaDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  aulaTipo: { fontSize: 16, fontWeight: '500' },
  aulaData: { fontSize: 12 },
  statusTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    fontWeight: '500',
    fontSize: 12,
  },
  viewAllBtn: {
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 12,
  },
  viewAllText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
});
