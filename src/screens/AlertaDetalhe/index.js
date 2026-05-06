import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/core';
import { styles } from './style';
import api from '../../../services/api';

export default function AlertaDetalhe() {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params?.item || {};

    const [comentarios, setComentarios] = useState([]);
    const [novoComentario, setNovoComentario] = useState('');
    const [confirmacoes, setConfirmacoes] = useState(item.confirmacoes || 0);
    const [confirmado, setConfirmado] = useState(false);

    const getCategoryColor = (cat) => {
        switch(cat?.toUpperCase()) {
            case 'ALERTA': return '#d93025';
            case 'ATENÇÃO': return '#f9ab00';
            case 'SEGURO': return '#1e8e3e';
            default: return '#5f6368';
        }
    };

    function handleConfirmar() {
        if (!confirmado) {
            setConfirmacoes(confirmacoes + 1);
            setConfirmado(true);
        } else {
            setConfirmacoes(confirmacoes - 1);
            setConfirmado(false);
        }
    }

    function handleAdicionarComentario() {
        if (novoComentario.trim() === '') return;
        const comentario = {
            id: Date.now(),
            texto: novoComentario,
            autor: 'Você',
            data: new Date().toLocaleString('pt-BR'),
        };
        setComentarios([comentario, ...comentarios]);
        setNovoComentario('');
    }

    function handleCompartilhar() {
        Alert.alert('Repostar', 'Deseja repostar este alerta para seus vizinhos?');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={28} color="#202124" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Detalhe do Alerta</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.headerCard}>
                        <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(item.categoria) }]}>
                            <Text style={styles.categoryText}>{item.categoria || 'ALERTA'}</Text>
                        </View>
                        {item.urgencia && (
                            <View style={styles.urgencyBadge}>
                                <Text style={styles.urgencyText}>Urgência {item.urgencia}</Text>
                            </View>
                        )}
                    </View>

                    <Text style={styles.title}>{item.titulo || item.cidade || 'Sem título'}</Text>
                    <Text style={styles.description}>{item.descricao || item.transporte || 'Sem descrição'}</Text>

                    {item.localizacao && (
                        <View style={styles.locationRow}>
                            <Ionicons name="location-outline" size={16} color="#5f6368" />
                            <Text style={styles.locationText}>{item.localizacao}</Text>
                        </View>
                    )}

                    <View style={styles.statsRow}>
                        <Text style={styles.statsText}>{confirmacoes} confirmações</Text>
                        <Text style={styles.statsText}>{comentarios.length} comentários</Text>
                    </View>
                </View>

                <View style={styles.actionsRow}>
                    <TouchableOpacity style={[styles.actionBtn, confirmado && styles.actionBtnActive]} onPress={handleConfirmar}>
                        <Ionicons name={confirmado ? "checkmark-circle" : "checkmark-circle-outline"} size={22} color={confirmado ? '#1a73e8' : '#5f6368'} />
                        <Text style={[styles.actionBtnText, confirmado && styles.actionBtnTextActive]}>Confirmar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionBtn} onPress={handleCompartilhar}>
                        <Ionicons name="share-outline" size={20} color="#5f6368" />
                        <Text style={styles.actionBtnText}>Repostar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.commentsSection}>
                    <Text style={styles.commentsTitle}>Comentários</Text>

                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.commentInput}
                            placeholder="Escreva um comentário..."
                            value={novoComentario}
                            onChangeText={setNovoComentario}
                            multiline
                        />
                        <TouchableOpacity style={styles.sendButton} onPress={handleAdicionarComentario}>
                            <Ionicons name="send" size={18} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    {comentarios.length === 0 && (
                        <Text style={styles.emptyText}>Nenhum comentário ainda. Seja o primeiro!</Text>
                    )}

                    {comentarios.map((c) => (
                        <View key={c.id} style={styles.commentItem}>
                            <View style={styles.commentHeader}>
                                <Text style={styles.commentAuthor}>{c.autor}</Text>
                                <Text style={styles.commentDate}>{c.data}</Text>
                            </View>
                            <Text style={styles.commentText}>{c.texto}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}