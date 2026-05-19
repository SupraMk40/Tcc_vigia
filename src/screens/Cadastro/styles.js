import { StyleSheet } from 'react-native';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingTop: 45,
        paddingBottom: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e8eaed',
    },

    logo: {
        width: 160,
        height: 40,
    },

    Title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 18,
        gap: 10,
    },

    TitleText: {
        fontSize: 22,
        color: '#202124',
        fontFamily: fonts.text,
        fontWeight: 'bold',
    },

    TitleInputs: {
        fontSize: 14,
        color: '#5f6368',
        fontFamily: fonts.text,
        marginTop: 14,
        marginBottom: 6,
        fontWeight: '600',
    },

    TextInput: {
        borderWidth: 1,
        borderColor: '#dadce0',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#ffffff',
        fontSize: 15,
        fontFamily: fonts.text,
        color: '#202124',
    },

    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },

    chip: {
        borderWidth: 1,
        borderColor: '#dadce0',
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 6,
        backgroundColor: '#fff',
    },

    chipActive: {
        backgroundColor: '#e8f0fe',
        borderColor: '#1a73e8',
    },

    chipText: {
        fontSize: 13,
        color: '#5f6368',
        fontFamily: fonts.text,
        textTransform: 'capitalize',
    },

    chipTextActive: {
        color: '#1a73e8',
        fontWeight: 'bold',
    },

    Button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a73e8',
        borderRadius: 10,
        paddingVertical: 14,
        marginTop: 24,
        marginBottom: 30,
        gap: 8,
        shadowColor: 'rgba(0,0,0,0.15)',
        shadowOpacity: 0.15,
        elevation: 4,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
    },

    ButtonText: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: fonts.text,
        fontWeight: 'bold',
    },
});

