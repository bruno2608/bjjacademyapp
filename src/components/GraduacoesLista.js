import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function GraduacoesLista({ alunos, selecionados, toggleSelecao }) {
  const { colors } = useTheme();

  const renderItem = ({ item }) => {
    const selecionado = selecionados.includes(item.id);
    return (
      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: selecionado ? '#69db7c33' : colors.card,
            borderColor: selecionado ? '#69db7c' : 'transparent',
          },
        ]}
        onPress={() => toggleSelecao(item.id)}
      >
        <Text style={[styles.nome, { color: colors.text }]}>{item.nome}</Text>
        <Text style={[styles.subinfo, { color: colors.text }]}>
          Faixa {item.faixa} — Grau {item.grau}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={alunos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ paddingBottom: 120 }}
      ListEmptyComponent={
        <Text style={{ textAlign: 'center', marginTop: 32, color: colors.text }}>
          Nenhum aluno encontrado.
        </Text>
      }
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subinfo: {
    fontSize: 13,
    marginTop: 4,
  },
});