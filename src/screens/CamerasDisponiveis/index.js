import React, { useState } from 'react';
import { View, FlatList, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';

const { width } = Dimensions.get('window');
const carouselData = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
    title: 'Câmera 1',
    location: 'Entrada Principal',
    status: 'online',
    resolution: '1080p',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=800&q=80',
    title: 'Câmera 2',
    location: 'Estacionamento',
    status: 'online',
    resolution: '4K',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    title: 'Câmera 3',
    location: 'Corredor B',
    status: 'offline',
    resolution: '720p',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    title: 'Câmera 4',
    location: 'Sala de Reuniões',
    status: 'online',
    resolution: '1080p',
  },
];

const PulsingDot = () => {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.6,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.liveBadgeContainer}>
      <Animated.View
        style={[styles.pulseDot, { transform: [{ scale: pulseAnim }] }]}
      />
      <View style={styles.liveDot} />
      <Text style={styles.liveText}>AO VIVO</Text>
    </View>
  );
};

const CarouselCard = ({ item }) => {
  const isOnline = item.status === 'online';

  return (
    <View style={styles.carouselItem}>
      <Image
        source={{ uri: item.image }}
        style={styles.carouselImage}
        resizeMode="cover"
      />

      {/* Gradiente escuro no topo para o badge */}
      <View style={styles.topGradient} />

      {/* Gradiente escuro na base para o título */}
      <View style={styles.bottomGradient} />

      {/* Badge de status no topo */}
      <View style={styles.topRow}>
        {isOnline ? (
          <PulsingDot />
        ) : (
          <View style={styles.offlineBadge}>
            <Ionicons name="wifi-outline" size={12} color="#aaa" />
            <Text style={styles.offlineText}>OFFLINE</Text>
          </View>
        )}
        <View style={styles.resolutionBadge}>
          <Text style={styles.resolutionText}>{item.resolution}</Text>
        </View>
      </View>

      {/* Informações na base */}
      <View style={styles.carouselOverlay}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={13} color="rgba(255,255,255,0.75)" />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      </View>
    </View>
  );
};

const CamerasDisponiveis = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (event) => {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / (ITEM_WIDTH + ITEM_SPACING)
    );
    setActiveIndex(index);
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.Header}>
        <Image style={styles.logo} source={require('../../../assets/logo2.png')} />
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="caret-back-outline" size={28} color="#202124" />
        </TouchableOpacity>
      </View>

      {/* Título */}
      <View style={styles.Title}>
        <View style={styles.titleIconWrapper}>
          <Ionicons name="videocam" size={20} color="#fff" />
        </View>
        <Text style={styles.TitleText}>Câmeras Disponíveis</Text>
      </View>

      {/* Contador */}
      <View style={styles.counterRow}>
        <Text style={styles.counterText}>
          {activeIndex + 1} de {carouselData.length}
        </Text>
        <View style={styles.onlineIndicator}>
          <View style={styles.onlineDotSmall} />
          <Text style={styles.onlineCountText}>
            {carouselData.filter((c) => c.status === 'online').length} online
          </Text>
        </View>
      </View>

      {/* Carousel */}
      <FlatList
        data={carouselData}
        renderItem={({ item }) => <CarouselCard item={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + ITEM_SPACING}
        snapToAlignment="start"
        decelerationRate="fast"
        contentContainerStyle={styles.flatListContent}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {carouselData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex ? styles.dotActive : styles.dotInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CamerasDisponiveis;