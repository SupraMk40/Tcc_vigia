import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Confirm({ navigation }) {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Index')}
        >

            <View style={styles.centerArea}>
                <View style={styles.outerCircle}>
                    <View style={styles.middleCircle}>
                        <View style={styles.innerCircle}>
                            <Ionicons name="checkmark" size={42} color="#fff" />
                            <Text style={styles.emergencyText}>
                                EMERGÊNCIA
                            </Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.bottomText}>
                    Alerta de Emergência enviado!
                </Text>

                <Text style={styles.subText}>
                    Clique em qualquer lugar
                </Text>
            </View>

        </TouchableOpacity>
    );
}