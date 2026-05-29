import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-web';

export default function Forms() {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);
  const [perigo, setPerigo] = useState(null);
  const [descricao, setDescricao] = useState('');

  const opcoes = [
    { label: 'Roubo/Furto', icon: 'account-lock' },
    { label: 'Incêndio', icon: 'fire' },
    { label: 'Enchente / Deslizamento', icon: 'home-flood' },
    { label: 'Curto circuito', icon: 'flash-alert' },
    { label: 'Emergência Médica', icon: 'medical-bag' },
    { label: 'Violência Urbana', icon: 'account-alert' },
  ];
  
  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.titulo}>Tipos de Emergência</Text>


      <View style={styles.grid}>
        {opcoes.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.card,
              selected === item.label && styles.cardSelected
            ]}
            onPress={() => setSelected(item.label)}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={28}
              color={selected === item.label ? '#fff' : '#2F4C9A'}
            />
            <Text
              style={[
                styles.cardText,
                selected === item.label && { color: '#fff' }
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Descreva o que está acontecendo..."
        multiline
        value={descricao}
        onChangeText={setDescricao}
      />

      <Text style={styles.label}>Você está em perigo agora?</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.btnPerigo,
            perigo === true && styles.btnPerigoAtivo
          ]}
          onPress={() => setPerigo(true)}
        >
          <Text style={styles.btnPerigoTexto}>Sim, preciso de ajuda</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btnPerigo,
            perigo === false && styles.btnNaoAtivo
          ]}
          onPress={() => setPerigo(false)}
        >
          <Text style={styles.btnPerigoTexto}>Não, estou seguro</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Localização atual</Text>

      <View style={styles.localBox}>
        <Text>📍 Rua Augusta, 1200</Text>
        <Text style={styles.subLocal}>São Paulo - SP</Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Confirm')}
      >
        <Text style={styles.botaoTexto}>Enviar Alerta</Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
}