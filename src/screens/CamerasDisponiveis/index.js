import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

const carouselData = [
  { id: '1', image: 'https://infinitas-automotive.com/tuning-for-bmw-m4-g82/', title: 'Câmera 1' },
  { id: '2', image: 'https://racecarsforyou.com/bmw-g82-m4-gt4-information/', title: 'Câmera 2' },
  { id: '3', image: 'https://www.reddit.com/r/BMW/comments/11conya/stunning_bmw_m4_g82_by_adro/?tl=pt-br', title: 'Câmera 3' },
];

const CamerasDisponiveis = () => {
  const navigation = useNavigation();

  const renderCamera = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item.image }} style={styles.carouselImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{item.title}</Text>
        
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.header}>Câmeras</Text>
      <FlatList
        data={carouselData}
        renderItem={renderCamera}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
    </View>
  );
};

export default CamerasDisponiveis;
