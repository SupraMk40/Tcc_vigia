import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Chat = () => {
  const navigation = useNavigation();

  const [mensagem, setMensagem] = useState('');

  const comunidades = [
    { id: '1', nome: 'Chat Geral' },
    { id: '2', nome: 'Jardim Esperança' },
    { id: '3', nome: 'Vila Tupy' },
    { id: '4', nome: 'Jardim Caiçara' },
  ];

  const [mensagens, setMensagens] = useState([
    { id: '1', nome: 'Leandro Gomes', texto: 'Favor verifiquem...', hora: '12:21' },
    { id: '2', nome: 'Daniel Silva', texto: 'E também o posicionamento...', hora: '12:28' },
    { id: '3', nome: 'Sara Mendes', texto: 'Alguém pode ajudar?', hora: '12:28' },
  ]);

  function renderMensagem({ item }) {
    return (
      <View style={styles.message}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
        <View style={styles.messageBox}>
          <Text style={styles.name}>{item.nome} <Text style={styles.time}>{item.hora}</Text></Text>
          <Text style={styles.text}>{item.texto}</Text>
        </View>
      </View>
    );
  }

  function renderComunidade({ item }) {
    return (
      <TouchableOpacity style={styles.card}>
        <Ionicons name="chatbubble-outline" size={20} color="#6C63FF" />
        <Text style={styles.cardText}>{item.nome}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       

        <View>
          <Text style={styles.subtitle}>Converse com as pessoas em tempo real</Text>
        </View>

        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.profile}
        />
      </View>

      {/*BUSCA*/}
      <View style={styles.search}>
        <Ionicons name="search" size={18} color="#999" />
        <TextInput placeholder="Buscar..." style={{ marginLeft: 8 }} />
      </View>

      <FlatList
        horizontal
        data={comunidades}
        renderItem={renderComunidade}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      {/* CHAT*/}
      <View style={styles.chatBox}>
        <Text style={styles.chatTitle}>Chat Geral</Text>

        <FlatList
          data={mensagens}
          renderItem={renderMensagem}
          keyExtractor={(item) => item.id}
        />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Escreva sua mensagem..."
            style={styles.input}
            value={mensagem}
            onChangeText={setMensagem}
          />

          <TouchableOpacity style={styles.send}>
            <Ionicons name="send" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};

export default Chat;