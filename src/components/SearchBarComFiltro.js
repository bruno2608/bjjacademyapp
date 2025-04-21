import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBarComFiltro = ({ value, onChange, onOpenFilters }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchWrapper}>
        <Feather name="search" size={18} color="#aaa" style={{ marginRight: 8 }} />
        <TextInput
          style={styles.input}
          placeholder="Buscar aluno..."
          placeholderTextColor="#999"
          value={value}
          onChangeText={onChange}
        />
      </View>
      <TouchableOpacity style={styles.filterButton} onPress={onOpenFilters}>
        <Feather name="sliders" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: '#222',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 42,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
  },
  filterButton: {
    backgroundColor: '#69db7c',
    borderRadius: 12,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
    width: 42,
  },
});

export default SearchBarComFiltro;