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
        fontWeight: 'bold',
    },
    carouselContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    carousel: {
        flex: 1,
    },
    carouselItem: {
        width: '100%',
        height: 250,
        marginRight: 16,
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    carouselImage: {
        width: '100%',
        height: '100%',
    },
    carouselOverlay: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        right: 16,
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 12,
        borderRadius: 8,
    },
    carouselTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
        gap: 8,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
});