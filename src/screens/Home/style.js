import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    header:{
        backgroundColor: '#fafafa',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 55,
    },

    menu:{
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 10,
    },

    logo:{
        width: 160,
        height: 40,
        alignSelf: "center",
        marginTop: 10,
    },

    containerHeader:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    feedTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#202124',
        fontFamily: fonts.text,
        marginBottom: 8,
    },

    searchInput:{
        borderWidth: 1,
        borderColor: '#dadce0',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        fontSize: 14,
        fontFamily: fonts.text,
    },

    containerBox:{
        width: '85%',
        alignSelf: "center",
        marginBottom: 12,
    },

    box:{
        backgroundColor: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 12,
        marginTop: 12,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 4,
        shadowRadius: 10,
        shadowOffset : { width: 1, height: 2},
    },

    rText:{
        fontSize: 16,
        color: 'gray',
        fontFamily: fonts.text,
    },

    textFooter:{
        borderTopColor: '#ccc',
        paddingTop: 12,
        paddingBottom: 10,
        borderTopWidth: 1,
        color: '#FFF',
        backgroundColor: '#871003',
        textAlign: 'center',
        fontSize: 14,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        fontFamily: fonts.text,
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    textos:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    lenghtText:{
        color: colors.green,
        fontSize: 28,
        fontFamily: fonts.text,
    },

    feedSection:{
        paddingHorizontal: 14,
        marginTop: 10,
        marginBottom: 20,
    },

    feedHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    feedSectionTitle:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#202124',
        fontFamily: fonts.text,
    },

    feedHeaderLink:{
        fontSize: 14,
        color: '#1a73e8',
        fontFamily: fonts.text,
        fontWeight: '600',
    },

    emptyFeed:{
        textAlign: 'center',
        color: '#80868b',
        fontFamily: fonts.text,
        fontSize: 14,
        marginVertical: 20,
    },

    adminActions:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 12,
        paddingHorizontal: 4,
        marginTop: -8,
        marginBottom: 16,
    },

    fab:{
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: '#1a73e8',
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 6,
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOpacity: 0.3,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
    },
});

