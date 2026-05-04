import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fafafa',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 5 },
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 55,
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu: {
        position: 'absolute',
        left: 20,
        alignSelf: 'center',
        top: 10,
    },
    pageTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#202124',
        fontFamily: fonts.text,
        marginTop: 12,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#dadce0',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        fontSize: 14,
        fontFamily: fonts.text,
    },
    feedSection: {
        paddingHorizontal: 14,
        marginTop: 10,
        marginBottom: 20,
    },
    feedHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    feedSectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#202124',
        fontFamily: fonts.text,
    },
    emptyBox: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    emptyText: {
        textAlign: 'center',
        color: '#80868b',
        fontFamily: fonts.text,
        fontSize: 14,
        marginTop: 10,
    },
});
