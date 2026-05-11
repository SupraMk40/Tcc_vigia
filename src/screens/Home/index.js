import React, { useEffect, useState } from 'react';
import { styles } from './style';

import {
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    RefreshControl,
    StatusBar,
    Alert,
    TextInput,
    Platform,
    Text
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import Load from '../../components/Load';
import { DrawerActions, useNavigation } from '@react-navigation/core';
import api from '../../../services/api';
import { useIsFocused } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AlertCard from '../../components/AlertCard';

export default function Home() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const [dados, setDados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const [search, setSearch] = useState('');
    const [filteredDados, setFilteredDados] = useState([]);

    async function totalDadosCadastrados() {
        try {
            const res = await api.get(`PAMII/APPBD/listar-cards.php`);
            setTotal(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function listarDados() {
        try {
            const res = await api.get(`PAMII/APPBD/buscar.php`);
            const resultados = res.data.result || [];
            const adaptados = resultados.map(item => ({
                ...item,
                titulo: item.titulo || item.cidade || 'Alerta sem título',
                descricao: item.descricao || item.transporte || '',
                categoria: item.categoria || 'ALERTA',
                urgencia: item.urgencia || 'média',
                localizacao: item.localizacao || `${item.cidade || ''}, ${item.estado || ''}`,
                confirmacoes: item.confirmacoes || 0,
            }));
            setDados(adaptados);
        } catch (error) {
            console.log("Erro ao Listar " + error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    }

    useEffect(() => {
        listarDados();
        totalDadosCadastrados();
    }, [isFocused]);

    const onRefresh = () => {
        setRefreshing(true);
        listarDados();
    };

    useEffect(() => {
        let lista = [...dados];
        if (search !== '') {
            lista = lista.filter(item =>
                (item.titulo && item.titulo.toLowerCase().includes(search.toLowerCase())) ||
                (item.descricao && item.descricao.toLowerCase().includes(search.toLowerCase())) ||
                (item.localizacao && item.localizacao.toLowerCase().includes(search.toLowerCase())) ||
                (item.categoria && item.categoria.toLowerCase().includes(search.toLowerCase()))
            );
        }
        setFilteredDados(lista);
    }, [search, dados]);

    function handleConfirmar(item) {
        Alert.alert('Confirmar', 'Você confirma essa ocorrência? Outros moradores serão notificados.');
    }

    function handleComentar(item) {
        navigation.navigate('AlertaDetalhe', { item });
    }

    function handleCompartilhar(item) {
        Alert.alert('Repostar', 'Deseja repostar este alerta para a vizinhança?');
    }

    function handlePressCard(item) {
        navigation.navigate('AlertaDetalhe', { item });
    }

    function editarItem(item) {
        navigation.navigate("Cadastro", { id: item.id });
    }

    function excluirItem(id) {
        if (Platform.OS === 'web') {
            const confirmar = window.confirm("Deseja excluir este alerta?");
            if (confirmar) {
                deletar(id);
            }
        } else {
            Alert.alert(
                "Excluir",
                "Deseja excluir este alerta?",
                [
                    { text: "Cancelar" },
                    { text: "Excluir", onPress: () => deletar(id) }
                ]
            );
        }
    }

    async function deletar(id) {
        try {
            await api.get(`PAMII/appBD/excluir.php?id=${id}`);
            listarDados();
            totalDadosCadastrados();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>
                        <TouchableOpacity
                            style={styles.menu}
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <MaterialIcons name="menu" size={35} color="black" />
                        </TouchableOpacity>
                        <Image style={styles.logo} source={require('../../../assets/logo2.png')} />
                    </View>
                </View>

                {isLoading ?
                    <Load /> :

                    <ScrollView
                        style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        <View style={{ padding: 12 }}>
                            <Text style={styles.feedTitle}>Feed da Comunidade</Text>
                            <TextInput
                                placeholder="Buscar alertas, localizações ou categorias..."
                                value={search}
                                onChangeText={setSearch}
                                style={styles.searchInput}
                            />
                        </View>

                        <View style={styles.feedSection}>
                            <View style={styles.feedHeader}>
                                <Text style={styles.feedSectionTitle}>Últimos Alertas</Text>
                                <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                                    <Text style={styles.feedHeaderLink}>Novo Alerta</Text>
                                </TouchableOpacity>
                            </View>

                            {filteredDados.length === 0 && (
                                <View style={styles.emptyFeedBox}>
                                    <Ionicons name="alert-circle-outline" size={40} color="#c1c1c1" />
                                    <Text style={styles.emptyFeed}>Nenhum alerta encontrado. Seja o primeiro a reportar!</Text>
                                </View>
                            )}

                            {filteredDados.map((item) => (
                                <View key={item.id}>
                                    <AlertCard
                                        item={item}
                                        onConfirm={handleConfirmar}
                                        onComment={handleComentar}
                                        onShare={handleCompartilhar}
                                        onPress={handlePressCard}
                                    />
                                    <View style={styles.adminActions}>
                                        <TouchableOpacity onPress={() => editarItem(item)}>
                                            <Ionicons name="create" size={18} color="blue" />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => excluirItem(item.id)}>
                                            <Ionicons name="trash" size={18} color="red" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                }

                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => navigation.navigate("Cadastro")}
                >
                    <Ionicons name="add" size={28} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

