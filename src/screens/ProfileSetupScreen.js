import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import { Picker } from '@react-native-picker/picker';
import AppLayout from '../components/AppLayout';

export default function ProfileSetupScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');
  const [faixa, setFaixa] = useState('');
  const [grau, setGrau] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');

  const handleContinuar = () => {
    if (!telefone || !dataNascimento || !genero || !faixa || grau === '') {
      setErro('Preencha todos os campos obrigatórios.');
      return;
    }

    setErro('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }, 1000);
  };

  return (
    <AppLayout>
      <Text style={[styles.title, { color: colors.text }]}>Finalizar cadastro</Text>
      <Text style={[styles.subtitle, { color: colors.subtext }]}>
        Precisamos de mais algumas informações para completar seu perfil.
      </Text>

      <TextInput
        placeholder="Telefone"
        placeholderTextColor={colors.subtext}
        style={[styles.input, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
        keyboardType="phone-pad"
        value={telefone}
        onChangeText={setTelefone}
      />

      <TextInput
        placeholder="Data de nascimento (DD/MM/AAAA)"
        placeholderTextColor={colors.subtext}
        style={[styles.input, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <TextInput
        placeholder="Gênero (ex: Masculino, Feminino, Outro)"
        placeholderTextColor={colors.subtext}
        style={[styles.input, { backgroundColor: colors.card, color: colors.text, borderColor: colors.border }]}
        value={genero}
        onChangeText={setGenero}
      />

      <Text style={[styles.label, { color: colors.text }]}>Faixa atual</Text>
      <View style={[styles.pickerWrapper, { borderColor: colors.border, backgroundColor: colors.card }]}>
        <Picker
          selectedValue={faixa}
          onValueChange={(itemValue) => setFaixa(itemValue)}
          dropdownIconColor={colors.text}
          style={{ color: colors.text }}
        >
          <Picker.Item label="Selecione a faixa" value="" />
          <Picker.Item label="Branca" value="branca" />
          <Picker.Item label="Cinza" value="cinza" />
          <Picker.Item label="Amarela" value="amarela" />
          <Picker.Item label="Laranja" value="laranja" />
          <Picker.Item label="Verde" value="verde" />
          <Picker.Item label="Azul" value="azul" />
          <Picker.Item label="Roxa" value="roxa" />
          <Picker.Item label="Marrom" value="marrom" />
          <Picker.Item label="Preta" value="preta" />
        </Picker>
      </View>

      <Text style={[styles.label, { color: colors.text }]}>Grau atual</Text>
      <View style={[styles.pickerWrapper, { borderColor: colors.border, backgroundColor: colors.card }]}>
        <Picker
          selectedValue={grau}
          onValueChange={(itemValue) => setGrau(itemValue)}
          dropdownIconColor={colors.text}
          style={{ color: colors.text }}
        >
          <Picker.Item label="Selecione o grau" value="" />
          <Picker.Item label="0" value="0" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
        </Picker>
      </View>

      {erro !== '' && <Text style={[styles.erro, { color: 'red' }]}>{erro}</Text>}

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#1877F2' }]}
        onPress={handleContinuar}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Continuar</Text>
        )}
      </TouchableOpacity>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 24,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  label: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 16,
    marginBottom: 16,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  erro: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    padding: 16,
    borderRadius: 100,
    alignItems: 'center',
    marginHorizontal: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
