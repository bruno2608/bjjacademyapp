import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const aulasDoDia = [
  { id: 1, horario: '07:00', titulo: 'Iniciantes' },
  { id: 2, horario: '09:00', titulo: 'Avançado' },
  { id: 3, horario: '19:30', titulo: 'Treinamento Livre' },
];

export default function CheckinScreen() {
  const { theme } = useTheme();
  const colors = theme?.colors || {
    background: '#000',
    card: '#1c1c1e',
    text: '#fff',
    primary: '#4CD964',
  };

  const hoje = format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBR });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={[styles.titulo, { color: colors.text }]}>
          Hoje · {hoje.charAt(0).toUpperCase() + hoje.slice(1)}
        </Text>

        {aulasDoDia.map((aula) => (
          <View key={aula.id} style={[styles.card, { backgroundColor: colors.card }]}>
            <Text style={[styles.horario, { color: colors.text }]}>{aula.horario}</Text>
            <Text style={[styles.subtitulo, { color: colors.text }]}>{aula.titulo}</Text>
            <TouchableOpacity>
              <Text style={[styles.botao, { color: colors.primary }]}>Marcar presença</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16 },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  horario: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 16,
    marginTop: 4,
  },
  botao: {
    marginTop: 8,
    fontWeight: 'bold',
  },
});
