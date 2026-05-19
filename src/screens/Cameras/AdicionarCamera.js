import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const AdicionarCamera = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [proprietario, setProprietario] = useState('');
  const [data, setData] = useState('');
  const [obs, setObs] = useState('');

  function salvar() {
    if (!nome || !endereco || !proprietario || !data) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    navigation.navigate('SucessoCamera');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>Adicionar câmera</Text>
      </View>

      <Text style={styles.subtitle}>
        Preencha as informações para adicionar uma nova câmera
      </Text>

      {/*FORM*/}
      <View style={styles.form}>

        <Text style={styles.label}>Nome da câmera *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Câmera 01 - Rua Velha"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Endereço *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Rua Velha, 111 - Centro"
          value={endereco}
          onChangeText={setEndereco}
        />

        <Text style={styles.label}>Proprietário *</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do proprietário"
          value={proprietario}
          onChangeText={setProprietario}
        />

        <Text style={styles.label}>Data de Adição *</Text>
        <TextInput
          style={styles.input}
          placeholder="10/03/2026"
          value={data}
          onChangeText={setData}
        />

        <Text style={styles.label}>Observações (opcional)</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          placeholder="Adicione informações..."
          multiline
          value={obs}
          onChangeText={setObs}
        />

        {/*UPLOAD*/}
        <TouchableOpacity style={styles.uploadBox}>
          <Ionicons name="cloud-upload-outline" size={24} color="#6C63FF" />
          <Text style={styles.uploadText}>
            Clique para carregar a imagem
          </Text>
        </TouchableOpacity>

        {/*BOTÃO*/}
        <TouchableOpacity style={styles.button} onPress={salvar}>
          <Text style={styles.buttonText}>Salvar câmera</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
};

export default AdicionarCamera;