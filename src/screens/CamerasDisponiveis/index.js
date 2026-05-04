import React, { useEffect, useState } from 'react';
import { View, ScrollView, TextInput, RefreshControl, StatusBar, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import Load from '../../components/Load';
import AlertCard from '../../components/AlertCard';
import { styles } from './style';
import api from '../../../services/api';

export default function CamerasDisponiveis() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [cameras, setCameras] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [search, setSearch] = useState('');
    const [filteredCameras, setFilteredCameras] = useState([]);

    async function listarCameras() {
        try {
            // Placeholder - ajustar endpoint conforme API
            const res = await api.get('PAMII/APPBD/listar-cameras.php'); 
            const resultados = res.data.result || [];
            const adaptados = resultados.map(item => ({
                ...item,
                titulo: item.nome || item.local || 'Câmera sem nome',
                descricao: item.descricao || 'Câmera disponível',
                localizacao: item.endereco || item.local || '',
            }));
            setCameras(adaptados);
        } catch (error) {
            console.log('Erro ao listar câmeras:', error);
            setCameras([]);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    }

    useEffect(() => {
        listarCameras();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarCameras();
    };

    useEffect(() => {
        let lista = [...cameras];
        if (search) {
            lista = lista.filter(item =>
                item.titulo.toLowerCase().includes(search.toLowerCase()) ||
                item.descricao.toLowerCase().includes(search.toLowerCase()) ||
                (item.localizacao || '').toLowerCase().includes(search.toLowerCase())
            );
        }
        setFilteredCameras(lista);
    }, [search, cameras]);

    if (isLoading) return <Load />;

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={styles.header}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity
                        style={styles.menu}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    >
                        <Ionicons name="menu" size={35} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>Câmeras Disponíveis</Text>
                </View>
            </View>

            <ScrollView
                style={{ flex: 1 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={{ padding: 12 }}>
                    <TextInput
                        placeholder="Buscar câmeras por nome ou localização..."
                        value={search}
                        onChangeText={setSearch}
                        style={styles.searchInput}
                    />
                </View>

                <View style={styles.feedSection}>
                    <View style={styles.feedHeader}>
                        <Text style={styles.feedSectionTitle}>Câmeras na Vizinhança</Text>
                    </View>

                    {filteredCameras.length === 0 ? (
                        <View style={styles.emptyBox}>
                            <Ionicons name="camera-outline" size={40} color="#c1c1c1" />
                            <Text style={styles.emptyText}>Nenhuma câmera encontrada</Text>
                        </View>
                    ) : (
                        filteredCameras.map((item) => (
                            <AlertCard
                                key={item.id}
                                item={item}
                                onPress={() => console.log('Ver câmera:', item.id)}
                            />
                        ))
                    )}
                </View>
            </ScrollView>
        </View>
    );
}
