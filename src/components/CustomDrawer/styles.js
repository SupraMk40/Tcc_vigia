import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },

    header:{
        padding: 20,
        backgroundColor: '#0088cc',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 10,
    },

    headerText:{
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },

    Pages:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 12,
        marginHorizontal: 10,
        marginTop: 6,
    },

    PagesText:{
        fontSize: 16,
        color: '#222',
        marginLeft: 15,
        fontWeight: '500',
    },

    itemActive:{
        backgroundColor: '#e3f2fd',
    },

    Sair:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 12,
        marginHorizontal: 10,
    },

    SairText:{
        fontSize: 16,
        color: '#e53935',
        marginLeft: 15,
        fontWeight: '500',
    },

    /*FOOTER*/
    footer:{
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 10,
        marginBottom: 10,
    },
});