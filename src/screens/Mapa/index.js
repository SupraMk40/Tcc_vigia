import React, { useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity,  Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';

export default function Mapa() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.headerTitle}>Mapa da Comunidade</Text>
      <Text style={styles.subtitle}>Veja as movimentações em tempo real</Text>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar..."
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.filterButton}>
          <Text>⚙️</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Índices totais</Text>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardIcon}>⚠️</Text>
          <Text style={styles.cardNumber}>16</Text>
          <Text style={styles.cardLabel}>Alertas totais</Text>
          <Text style={styles.cardSub}>Mensal</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardNumber}>16</Text>
          <Text style={styles.cardLabel}>Vizinhos registrados</Text>
          <Text style={styles.cardSub}>Mensal</Text>
        </View>
      </View>

        <View style={styles.map}>
        <Image
  source={require('../../../assets/mapa.png')}
  style={styles.mapImage}
  resizeMode="cover"
/>
       </View>
      <Text style={styles.sectionTitle}>Câmeras da comunidades</Text>

      {[ 
        'C1 - Rua Augusta, 1200',
        'C2 - Rua Milton Oliveira, 955',
        'C3 - Avenida Coral Cartes, 1112',
        'C4 - Rua Franco, 1270',
        'C5 - Rua Raposo Tavares, 976',
      ].map((item, index) => (
        <View key={index} style={styles.cameraItem}>
          <Text style={styles.cameraIcon}>🎥</Text>
          <View>
            <Text style={styles.cameraText}>{item}</Text>
            <Text style={styles.live}>● Ao vivo</Text>
          </View>
        </View>
      ))}

    </ScrollView>
  );
}