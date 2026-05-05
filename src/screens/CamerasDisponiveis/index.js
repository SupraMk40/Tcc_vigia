import React, { useState } from 'react';
import { View, FlatList, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

const { width } = Dimensions.get('window');
const carouselData = [
  { id: '1', image: 'https://www.google.com/imgres?q=carousel%20card%20css&imgurl=https%3A%2F%2Fwww.jqueryscript.net%2Fimages%2FSmooth-Card-Carousel-jQuery-CSS3.jpg&imgrefurl=https%3A%2F%2Fwww.jqueryscript.net%2Fslider%2FSmooth-Card-Carousel-jQuery-CSS3.html&docid=C8FE5v7pg4UzSM&tbnid=nKFzat6WVe9lsM&vet=12ahUKEwidvuPI9J-UAxXbQ7gEHY1oCToQnPAOegQIFBAB..i&w=620&h=457&hcb=2&ved=2ahUKEwidvuPI9J-UAxXbQ7gEHY1oCToQnPAOegQIFBAB', title: 'Câmera 1' },
  { id: '2', image: 'https://www.google.com/imgres?q=carousel%20card%20css&imgurl=https%3A%2F%2Fwww.codingnepalweb.com%2Fwp-content%2Fuploads%2F2024%2F07%2FHow-to-Create-Responsive-Card-Slider-in-HTML-CSS-JavaScript.jpg&imgrefurl=https%3A%2F%2Fwww.codingnepalweb.com%2Fcreate-responsive-card-slider-html-javascript%2F&docid=S3bQ47Jaa2NDrM&tbnid=B88oR0SJjvPk8M&vet=12ahUKEwidvuPI9J-UAxXbQ7gEHY1oCToQnPAOegQIERAB..i&w=1280&h=720&hcb=2&ved=2ahUKEwidvuPI9J-UAxXbQ7gEHY1oCToQnPAOegQIERAB', title: 'Câmera 2' },
  { id: '3', image: 'https://www.google.com/imgres?q=carousel%20card%20css&imgurl=https%3A%2F%2Fwww.codewithrandom.com%2Fwp-content%2Fuploads%2F2022%2F11%2F15-Bootstrap-login-forms49.png&imgrefurl=https%3A%2F%2Fwww.codewithrandom.com%2F2024%2F05%2F06%2Fcarousel-using-css%2F&docid=c2w7S6K1RtWtRM&tbnid=o4Dcn5Xq9C8f2M&vet=12ahUKEwidvuPI9J-UAxXbQ7gEHY1oCToQnPAOegQIEhAB..i&w=1200&h=628&hcb=2&ved=2ahUKEwidvuPI9J-UAxXbQ7gEHY1oCToQnPAOegQIEhAB', title: 'Câmera 3' },
];

const CamerasDisponiveis = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const renderCamera = ({ item, index }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item.image }} style={styles.carouselImage} resizeMode="cover" />
      <View style={styles.carouselOverlay}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
      </View>
    </View>
  );

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <View style={styles.Header}>
        <Image style={styles.logo} source={require('../../../assets/logo2.png')} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="caret-back-outline" size={35} color="#202124" />
        </TouchableOpacity>
      </View>
      <View style={styles.Title}>
        <Ionicons name="videocam-outline" size={35} color="#1a73e8" />
        <Text style={styles.TitleText}>Câmeras Disponíveis</Text>
      </View>
      <View style={styles.carouselContainer}>
        <FlatList
          data={carouselData}
          renderItem={renderCamera}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          style={styles.carousel}
        />
        <View style={styles.dotsContainer}>
          {carouselData.map((_, index) => (
            <View key={index} style={[styles.dot, { backgroundColor: index === activeIndex ? '#1a73e8' : '#dadce0' }]} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default CamerasDisponiveis;