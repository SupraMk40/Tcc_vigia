import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import api from '../../../services/api';

const Perfil = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);
  const userId = 1;

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      try {
        const res = await api.get(`PAMII/appBD/perfil.php?id=${userId}`);
        if (res.data && res.data.success) {
          const user = res.data.user || res.data;
          setNome(user.nome || '');
        } else if (res.data && res.data.nome) {
          setNome(res.data.nome);
        }
      } catch (error) {
        console.log('Erro ao buscar perfil', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  async function salvar() {
    if (!nome || nome.trim() === '') {
      Alert.alert('Nome obrigatório', 'Informe seu nome.');
      return;
    }

    setLoading(true);
    try {
      const obj = { id: userId, nome: nome.trim() };
      const res = await api.post('PAMII/appBD/perfil.php', obj);
      if (res.data && res.data.success) {
        Alert.alert('Sucesso', 'Nome atualizado');
        navigation.goBack();
      } else {
        Alert.alert('Erro', res.data.mensagem || 'Não foi possível atualizar');
      }
    } catch (error) {
      console.log('Erro ao salvar perfil', error);
      Alert.alert('Erro', 'Falha na conexão com o servidor');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.header}>Meu Perfil</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#1e90ff" />
      ) : (
        <View style={{ padding: 16 }}>
          <Text style={{ marginBottom: 8, color: '#555' }}>Nome</Text>
          <TextInput
            value={nome}
            onChangeText={setNome}
            placeholder="Alterar seu nome"
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={salvar}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Perfil;
