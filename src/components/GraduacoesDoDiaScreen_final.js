import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import AppLayout from '../components/AppLayout';
import GraduacoesLista from '../components/GraduacoesLista';
import SearchBarComFiltro from '../components/SearchBarComFiltro';
import FiltroGraduacoesModal from '../components/FiltroGraduacoesModal';

const mockGraduacoes = [
  { id: '1', nome: 'Carlos', faixa: 'Branca', grau: 4 },
  { id: '2', nome: 'Fernanda', faixa: 'Cinza', grau: 1 },
  { id: '3', nome: 'João', faixa: 'Amarela', grau: 3 },
  { id: '4', nome: 'Ana', faixa: 'Laranja', grau: 2 },
];

const GraduacoesDoDiaScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [busca, setBusca] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);
  const [tipoFiltro, setTipoFiltro] = useState(null);
  const [selecionados, setSelecionados] = useState([]);

  const alunosFiltrados = useMemo(() => {
    const textoBusca = busca.toLowerCase();
    return mockGraduacoes.filter((a) => {
      const porBusca = a.nome.toLowerCase().includes(textoBusca);
      const porFiltro = tipoFiltro ? a.faixa === tipoFiltro : true;
      return porBusca && porFiltro;
    });
  }, [busca, tipoFiltro]);

  const alternarSelecao = (id) => {
    setSelecionados((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <AppLayout scrollable={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#69db7c" />
        </TouchableOpacity>
        <SearchBarComFiltro
          value={busca}
          onChange={setBusca}
          onOpenFilters={() => setModalVisivel(true)}
        />
      </View>

      <GraduacoesLista
        alunos={alunosFiltrados}
        selecionados={selecionados}
        toggleSelecao={alternarSelecao}
      />

      {selecionados.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.footerText}>{selecionados.length} selecionado(s)</Text>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Aprovar</Text>
          </TouchableOpacity>
        </View>
      )}

      <FiltroGraduacoesModal
        visible={modalVisivel}
        onClose={() => setModalVisivel(false)}
        tipoSelecionado={tipoFiltro}
        setTipoSelecionado={setTipoFiltro}
        onAplicar={() => setModalVisivel(false)}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    gap: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#212529',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontWeight: '600',
  },
  footerButton: {
    backgroundColor: '#69db7c',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  footerButtonText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default GraduacoesDoDiaScreen;