import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { styles } from './style';

export default function AlertCard({ item, onConfirm, onComment, onShare, onPress }) {
    const getCategoryColor = (cat) => {
        switch(cat?.toUpperCase()) {
            case 'ALERTA': return '#d93025';
            case 'ATENÇÃO': return '#f9ab00';
            case 'SEGURO': return '#1e8e3e';
            default: return '#5f6368';
        }
    };

    const getUrgencyLabel = (urg) => {
        switch(urg?.toLowerCase()) {
            case 'alta': return 'Urgência Alta';
            case 'média': return 'Urgência Média';
            case 'baixa': return 'Urgência Baixa';
            default: return '';
        }
    };

    return (
        <TouchableOpacity onPress={() => onPress && onPress(item)} activeOpacity={0.9}>
            <View style={styles.card}>
                <View style={styles.headerCard}>
                    <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(item.categoria) }]}>
                        <Text style={styles.categoryText}>{item.categoria || 'ALERTA'}</Text>
                    </View>
                    {item.urgencia && (
                        <View style={styles.urgencyBadge}>
                            <Text style={styles.urgencyText}>{getUrgencyLabel(item.urgencia)}</Text>
                        </View>
                    )}
                </View>

                <Text style={styles.title}>{item.titulo || item.cidade || 'Sem título'}</Text>
                <Text style={styles.description}>{item.descricao || item.transporte || 'Sem descrição'}</Text>

                {item.localizacao && (
                    <View style={styles.locationRow}>
                        <Ionicons name="location-outline" size={14} color="#5f6368" />
                        <Text style={styles.locationText}>{item.localizacao}</Text>
                    </View>
                )}

                <View style={styles.footer}>
                    <TouchableOpacity style={styles.actionButton} onPress={() => onConfirm && onConfirm(item)}>
                        <Ionicons name="checkmark-circle-outline" size={20} color="#1a73e8" />
                        <Text style={styles.actionText}>Confirmar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton} onPress={() => onComment && onComment(item)}>
                        <Ionicons name="chatbubble-outline" size={18} color="#5f6368" />
                        <Text style={styles.actionText}>Comentar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton} onPress={() => onShare && onShare(item)}>
                        <MaterialIcons name="share" size={18} color="#5f6368" />
                        <Text style={styles.actionText}>Repostar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}

