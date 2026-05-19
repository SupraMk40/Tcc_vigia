import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Comunidade() {

  const [comunidadeSelecionada, setComunidadeSelecionada] = useState('Jardim Esperança');

  const alertas = [
    {
      id: '1',
      nome: 'Coralina Fernandes',
      tipo: 'Violência Urbana',
      texto: 'Duas pessoas embriagadas brigando na madrugada e quebrando coisas na rua.',
      imagem: 'https://i.imgur.com/1.jpg'
    },
    {
      id: '2',
      nome: 'Luiz Gonçalves',
      tipo: 'Furto Circuito',
      texto: 'Poste e cabos de energia estouraram e pegaram fogo na Rua 11.',
      imagem: 'https://i.imgur.com/2.jpg'
    }
  ];

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <View>
          <Text style={styles.titulo}>Comunidades</Text>
          <Text style={styles.sub}>Acompanhe e participe de sua comunidade</Text>
        </View>

        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
      </View>

      
      <TouchableOpacity style={styles.select}>
        <Text>{comunidadeSelecionada}</Text>
        <Ionicons name="chevron-down" size={18} />
      </TouchableOpacity>

      
      <View style={styles.banner}>
        <Text style={styles.bannerTitulo}>Jardim Esperança</Text>
        <Text style={styles.bannerDesc}>
          Moradores do Jardim Esperança colaborando por um espaço para vidas melhores!
        </Text>
        <Text style={styles.bannerInfo}>320 membros • Desde Jan/2026</Text>

        <TouchableOpacity style={styles.btnEntrar}>
          <Text style={{ color: '#6c63ff' }}>Entrar na comunidade</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.postBox}>
        <View style={styles.row}>
          <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={styles.avatarSmall} />
          <TextInput
            placeholder="Compartilhe alguma coisa na comunidade..."
            style={styles.input}
          />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.btnMid}>
            <Ionicons name="image-outline" size={16} color="#fff" />
            <Text style={styles.btnText}>Foto/Vídeo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnPostar}>
            <Text style={{ color: '#fff' }}>Publicar</Text>
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={styles.infoRow}>
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            Comente nas publicações, compartilhe informações úteis e evite discussões agressivas.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            Antes de publicar um alerta, verifique se a informação é verdadeira e evite alarmes falsos.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            Não apenas reporte problemas, proponha ideias para resolvê-los.
          </Text>
        </View>
      </View>

      {/*ALERTAS*/}
      <Text style={styles.section}>Alertas</Text>

      <View style={styles.alertRow}>
        {alertas.map(item => (
          <View key={item.id} style={styles.alertCard}>
            <View style={styles.row}>
              <Image source={{ uri: 'https://i.pravatar.cc/101' }} style={styles.avatarMini} />
              <View>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.tipo}>{item.tipo}</Text>
              </View>
            </View>

            <Text style={styles.alertText}>{item.texto}</Text>

            <View style={styles.imgBox}>
              <Ionicons name="play-circle" size={30} color="#fff" />
            </View>

            <TouchableOpacity style={styles.btnVer}>
              <Text style={{ color: '#6c63ff' }}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/*CAMERAS*/}
      <Text style={styles.section}>Câmeras</Text>

      <View style={styles.cameraRow}>
        {['C1 - Rua Esperança Nova', 'C2 - Rua Caminho Verde', 'C3 - Rua Vitória do Bairro'].map((item, i) => (
          <View key={i} style={styles.cameraCard}>
            <Ionicons name="videocam-outline" size={20} color="#6c63ff" />
            <Text style={styles.cameraText}>{item}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}