import React, { useEffect, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/core';

export default function VideosPage() {
  const navigation = useNavigation();
  const webview1Ref = useRef(null);
  const webview2Ref = useRef(null);

  // Títulos dos vídeos (você pode mudar)
  const video1Title = "Rick Astley - Never Gonna Give You Up";
  const video2Title = "Outro vídeo interessante";

  // URLs dos vídeos em embed (formato necessário para WebView)
  const video1Url = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0";
  const video2Url = "https://www.youtube.com/embed/1TOVYKbjwOk?autoplay=1&rel=0";

  // Inicia os vídeos automaticamente quando a tela carrega
  useEffect(() => {
    navigation.setOptions({
      title: 'Vídeos Automáticos',
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Reproduzindo vídeos automaticamente</Text>

      {/* Primeiro vídeo */}
      <View style={styles.videoContainer}>
        <Text style={styles.videoTitle}>{video1Title}</Text>
        <WebView
          ref={webview1Ref}
          source={{ uri: video1Url }}
          style={styles.webview}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          onLoad={() => console.log('Vídeo 1 carregado')}
        />
      </View>

      {/* Segundo vídeo */}
      <View style={styles.videoContainer}>
        <Text style={styles.videoTitle}>{video2Title}</Text>
        <WebView
          ref={webview2Ref}
          source={{ uri: video2Url }}
          style={styles.webview}
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          allowsFullscreenVideo={true}
          onLoad={() => console.log('Vídeo 2 carregado')}
        />
      </View>

      <Text style={styles.info}>
        Os vídeos foram configurados para iniciar automaticamente (autoplay).
        {'\n'}Pode ser necessário permitir autoplay no navegador embutido em alguns dispositivos.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  videoContainer: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#222',
  },
  webview: {
    width: '100%',
    height: 220,           // Altura recomendada para vídeos 16:9
    borderRadius: 8,
  },
  info: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
    lineHeight: 20,
  },
});