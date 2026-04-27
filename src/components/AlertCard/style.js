import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 14,
        marginBottom: 12,
        shadowColor: 'rgba(0,0,0,0.08)',
        shadowOpacity: 0.08,
        elevation: 3,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
    },
    headerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoryBadge: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 3,
    },
    categoryText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily: fonts.text,
        textTransform: 'uppercase',
    },
    urgencyBadge: {
        backgroundColor: '#fce8e6',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 3,
    },
    urgencyText: {
        color: '#d93025',
        fontSize: 11,
        fontWeight: '600',
        fontFamily: fonts.text,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#202124',
        fontFamily: fonts.text,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#5f6368',
        fontFamily: fonts.text,
        lineHeight: 20,
        marginBottom: 8,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    locationText: {
        fontSize: 12,
        color: '#5f6368',
        fontFamily: fonts.text,
        marginLeft: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#f1f3f4',
        paddingTop: 10,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        fontSize: 12,
        color: '#5f6368',
        fontFamily: fonts.text,
        marginLeft: 4,
    },
});

