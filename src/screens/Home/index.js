import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Text
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Home() {

  const [search, setSearch] = useState('');

  const dados = [
    {
      id: '1',
      nome: 'Carlos Lima',
      texto: 'O que está acontecendo no seu bairro?',
      tipo: 'input'
    },
    {
      id: '2',
      nome: 'Maria Dalva',
      local: 'Vila Tupy • há 6h',
      titulo: 'Movimentação Suspeita',
      descricao: 'Pessoas em carro preto rondando as ruas em horário incomum. Fiquem atentos!',
      endereco: 'R. São Judas Tadeu, 230',
      horario: '00h10 • 27/03/2026',
      imagem: 'https://i.imgur.com/1.jpg'
    },
    {
      id: '3',
      nome: 'Juliana Santos',
      local: 'Jardim Caiçara • há 1 dia',
      titulo: 'Movimentação Suspeita',
      descricao: 'Meninos em bicicletas fazendo ronda nas ruas e olhando dentro das casas. Cuidado!',
      endereco: 'R. Carpas, 376',
      horario: '14h50 • 26/03/2026',
      imagem: 'https://i.imgur.com/2.jpg'
    }
  ];

  return (
    <ScrollView style={styles.container}>

      {/*HEADER*/}
      <View style={styles.header}>

        <View>
          <Text style={styles.titulo}>Feed Comunidade</Text>
          <Text style={styles.subtitulo}>Acompanhe e participe de sua comunidade</Text>
        </View>

        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
      </View>

      {/*BUSCA*/}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#888" />
        <TextInput
          placeholder="Buscar..."
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      
      <View style={styles.card}>
        <View style={styles.row}>
          <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatarSmall} />
          <View>
            <Text style={styles.nome}>Carlos Lima</Text>
            <Text style={styles.pergunta}>O que está acontecendo no seu bairro?</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.btn}>
            <Ionicons name="alert-circle-outline" size={16} color="#fff" />
            <Text style={styles.btnText}>Reportar alerta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnOutline}>
            <Ionicons name="videocam-outline" size={16} color="#6c63ff" />
            <Text style={styles.btnOutlineText}>Adicionar câmera</Text>
          </TouchableOpacity>
        </View>
      </View>

     
      {dados.slice(1).map(item => (
        <View key={item.id} style={styles.card}>

          <View style={styles.row}>
            <Image source={{ uri: 'https://i.pravatar.cc/101' }} style={styles.avatarSmall} />
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.local}>{item.local}</Text>
            </View>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>Morador</Text>
            </View>
          </View>

          <Text style={styles.tituloCard}>{item.titulo}</Text>
          <Text style={styles.desc}>{item.descricao}</Text>

          <Text style={styles.info}>📍 {item.endereco}</Text>
          <Text style={styles.info}>⏰ {item.horario}</Text>

          <View style={styles.actionsBottom}>
            <TouchableOpacity style={styles.smallBtn}>
              <Text style={styles.smallText}>Comentários</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.smallBtn}>
              <Text style={styles.smallText}>Compartilhar</Text>
            </TouchableOpacity>
          </View>

        </View>
      ))}

      <Text style={styles.section}>Atividade Recente</Text>

      <View style={styles.activity}>
        <Text>Bianca Matos registrou "Movimentação suspeita"</Text>
      </View>

      <View style={styles.activity}>
        <Text>Carlos Generoso registrou "Barulho Alto"</Text>
      </View>

    </ScrollView>
  );
}