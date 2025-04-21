import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable
} from 'react-native';

const FiltroGraduacoesModal = ({ visible, onClose, tipoSelecionado, setTipoSelecionado, onAplicar }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <Pressable style={styles.backdrop} onPress={onClose} />
      <View style={styles.container}>
        <View style={styles.handle} />
        <Text style={styles.title}>Filtrar por tipo</Text>

        <TouchableOpacity
          style={[styles.option, tipoSelecionado === 'grau' && styles.optionSelected]}
          onPress={() => setTipoSelecionado('grau')}
        >
          <Text style={[styles.optionText, tipoSelecionado === 'grau' && styles.optionTextSelected]}>
            🎖️ Grau
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, tipoSelecionado === 'faixa' && styles.optionSelected]}
          onPress={() => setTipoSelecionado('faixa')}
        >
          <Text style={[styles.optionText, tipoSelecionado === 'faixa' && styles.optionTextSelected]}>
            🥋 Troca de faixa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onAplicar}>
          <Text style={styles.buttonText}>Aplicar Filtro</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: '#000000aa'
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1c1c1e',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#444',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  option: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#2c2c2e',
    marginBottom: 12,
  },
  optionSelected: {
    backgroundColor: '#69db7c22',
    borderWidth: 1,
    borderColor: '#69db7c',
  },
  optionText: {
    color: '#ccc',
    fontSize: 14,
  },
  optionTextSelected: {
    color: '#69db7c',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#69db7c',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default FiltroGraduacoesModal;