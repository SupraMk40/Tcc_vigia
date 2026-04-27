import React, { useState, useEffect } from 'react';
import { ScrollView, Alert, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { showMessage } from "react-native-flash-message";
import api from '../../../services/api';
import { useRoute } from '@react-navigation/native';

const Cadastro = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params?.id;

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('ALERTA');
    const [urgencia, setUrgencia] = useState('média');
    const [localizacao, setLocalizacao] = useState('');

    const [sucess, setSucess] = useState(false);

    function limparCampos() {
        setTitulo('');
        setDescricao('');
        setCategoria('ALERTA');
        setUrgencia('média');
        setLocalizacao('');
    }

    async function buscardados() {
        const res = await api.get('PAMII/appBD/buscarId.php?id=' + id);
        setTitulo(res.data.titulo || res.data.cidade || '');
        setDescricao(res.data.descricao || res.data.transporte || '');
        setCategoria(res.data.categoria || 'ALERTA');
        setUrgencia(res.data.urgencia || 'média');
        setLocalizacao(res.data.localizacao || `${res.data.cidade || ''}, ${res.data.estado || ''}`);
    }

    function salvarOuEditar() {
        if (id) {
            editar();
        } else {
            saveData();
        }
    }

    async function editar() {
        if (titulo === "" || descricao === "" || localizacao === "") {
            showMessage({
                message: "Erro ao Editar",
                description: 'Preencha os Campos Obrigatórios!',
                type: "warning",
            });
            return;
        }

        try {
            const obj = {
                id: id,
                titulo: titulo,
                descricao: descricao,
                categoria: categoria,
                urgencia: urgencia,
                localizacao: localizacao,
            };

            const res = await api.post('PAMII/appBD/editar.php', obj);

            if (res.data.sucesso === false) {
                showMessage({
                    message: "Erro ao Editar",
                    description: res.data.mensagem,
                    type: "warning",
                    duration: 3000,
                });
                return;
            }

            setSucess(true);
            showMessage({
                message: "Registro alterado com Sucesso",
                description: "Alerta Atualizado",
                type: "success",
                duration: 800,
            });
            limparCampos();

        } catch (error) {
            Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
            setSucess(false);
        }
    }

    useEffect(() => {
        if (id) {
            buscardados();
        }
    }, [id]);

    async function saveData() {
        if (titulo === "" || descricao === "" || localizacao === "") {
            showMessage({
                message: "Erro ao Salvar",
                description: 'Preencha os Campos Obrigatórios!',
                type: "warning",
            });
            return;
        }

        try {
            const obj = {
                titulo: titulo,
                descricao: descricao,
                categoria: categoria,
                urgencia: urgencia,
                localizacao: localizacao,
            };

            const res = await api.post('PAMII/appBD/salvar.php', obj);

            if (res.data.sucesso === false) {
                showMessage({
                    message: "Erro ao Salvar",
                    description: res.data.mensagem,
                    type: "warning",
                    duration: 3000,
                });
                limparCampos();
                return;
            }

            setSucess(true);
            showMessage({
                message: "Salvo com Sucesso",
                description: "Alerta Publicado",
                type: "success",
                duration: 800,
            });

        } catch (error) {
            Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
            setSucess(false);
        }
    }

    const categorias = ['ALERTA', 'ATENÇÃO', 'SEGURO'];
    const urgencias = ['baixa', 'média', 'alta'];

    return (
        <View style={{ flex: 1, marginTop: 0, backgroundColor: '#f8f9fa' }}>
            <View style={styles.Header}>
                <Image style={styles.logo} source={require('../../../assets/logo2.png')} />
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Ionicons style={{ marginLeft: 5, marginRight: 5 }} name="caret-back-outline" size={35} color="#202124" />
                </TouchableOpacity>
            </View>

            <View style={styles.Title}>
                <Ionicons name="shield-checkmark-outline" size={35} color="#1a73e8" />
                <Text style={styles.TitleText}>{id ? "Editar Alerta" : "Novo Alerta"}</Text>
            </View>

            <ScrollView style={{ paddingHorizontal: 16 }}>
                <View>
                    <Text style={styles.TitleInputs}>Título:</Text>
                    <TextInput
                        placeholder="Ex: Carro estranho parado na rua"
                        onChangeText={setTitulo}
                        value={titulo}
                        style={styles.TextInput}
                    />
                </View>

                <View>
                    <Text style={styles.TitleInputs}>Descrição:</Text>
                    <TextInput
                        placeholder="Descreva o que está acontecendo..."
                        onChangeText={setDescricao}
                        value={descricao}
                        style={[styles.TextInput, { height: 80, textAlignVertical: 'top' }]}
                        multiline
                    />
                </View>

                <View>
                    <Text style={styles.TitleInputs}>Categoria:</Text>
                    <View style={styles.chipContainer}>
                        {categorias.map((cat) => (
                            <TouchableOpacity
                                key={cat}
                                style={[styles.chip, categoria === cat && styles.chipActive]}
                                onPress={() => setCategoria(cat)}
                            >
                                <Text style={[styles.chipText, categoria === cat && styles.chipTextActive]}>{cat}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View>
                    <Text style={styles.TitleInputs}>Urgência:</Text>
                    <View style={styles.chipContainer}>
                        {urgencias.map((urg) => (
                            <TouchableOpacity
                                key={urg}
                                style={[styles.chip, urgencia === urg && styles.chipActive]}
                                onPress={() => setUrgencia(urg)}
                            >
                                <Text style={[styles.chipText, urgencia === urg && styles.chipTextActive]}>{urg}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View>
                    <Text style={styles.TitleInputs}>Localização:</Text>
                    <TextInput
                        placeholder="Ex: Rua das Flores, 123 - Centro"
                        onChangeText={setLocalizacao}
                        value={localizacao}
                        style={styles.TextInput}
                    />
                </View>

                <TouchableOpacity style={styles.Button} onPress={salvarOuEditar}>
                    <Ionicons name="send-outline" size={28} color="#FFF" />
                    <Text style={styles.ButtonText}>
                        {id ? "Atualizar Alerta" : "Publicar Alerta"}
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Cadastro;

