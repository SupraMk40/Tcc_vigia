import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const Cameras = () => {
  const navigation = useNavigation();

  const cameras = [
    {
      id: '1',
      nome: 'Câmera 01 - Rua Delfino',
      endereco: 'Rua Delfino, 123 - Jardim Esperança',
      data: '15/02/2024',
      imagem: 'https://picsum.photos/200/150'
    },
    {
      id: '2',
      nome: 'Câmera 02 - Rua Delfino',
      endereco: 'Rua Delfino, 123 - Jardim Esperança',
      data: '15/02/2024',
      imagem: 'https://picsum.photos/200/151'
    }
  ];

  function renderCamera({ item }) {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.imagem }} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.nome}>{item.nome}</Text>

          <Text style={styles.text}>📍 {item.endereco}</Text>
          <Text style={styles.text}>👤 Proprietário: Carlos Lima</Text>
          <Text style={styles.text}>📅 Adicionado em {item.data}</Text>

          <TouchableOpacity style={styles.botaoVer}>
            <Ionicons name="eye-outline" size={16} color="#6C63FF" />
            <Text style={styles.verTexto}> Adicionar câmera</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.subtitle}>
            Gerencie as suas câmeras para segurança
          </Text>
        </View>

        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.profile}
        />
      </View>

      <View style={styles.dicasBox}>
        <Ionicons name="eye-outline" size={26} color="#6C63FF" />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={styles.dicasTitulo}>Dicas rápidas</Text>
          <Text style={styles.dicasTexto}>
            Posicione suas câmeras em posições estratégicas para obter os melhores ângulos da sua rua.
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#6C63FF" />
      </View>

      <Text style={styles.section}>Câmeras</Text>

      <FlatList
        data={cameras}
        renderItem={renderCamera}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.addBox}
        onPress={() => navigation.navigate('AdicionarCamera')}
      >
        <Ionicons name="add" size={26} color="#6C63FF" />
        <Text style={styles.addText}>Adicionar câmera</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Cameras;