import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const SucessoCamera = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.successContainer}
      onPress={() => navigation.navigate('Cameras')}
      activeOpacity={1}
    >
      <View style={styles.circleOuter}>
        <View style={styles.circleInner}>
          <Text style={styles.check}>✓</Text>
        </View>
      </View>

      <Text style={styles.successTitle}>Câmera salva com sucesso!</Text>
      <Text style={styles.successSub}>Clique em qualquer lugar</Text>
    </TouchableOpacity>
  );
};

export default SucessoCamera;