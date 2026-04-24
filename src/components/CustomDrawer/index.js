import React from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

import { styles } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';

import { BackHandler } from 'react-native';



const CustomDrawer = () => {
    const navigation = useNavigation();

const logout = () => {
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
};

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

            {/* //IMAGEM DO MENU LATERAL */}
            <Image style={styles.logo} source={require('../../../assets/logo2.png')} />

            <View style={{ width: '90%', backgroundColor: '#c1c1c1', height: 0.5, alignSelf: 'center', marginBottom: 5, marginTop: 20 }}></View>

            <ScrollView
                style={styles.container}
            >
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {

                            // NOME DA TELA QUE SERÁ CHAMADO AO CLICAR NO ITEM DO MENU LATERAL
                            navigation.navigate("Cadastro")
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="people-alt" size={30} color="gray" />

                        <Text style={styles.PagesText}>Cadastrar</Text>
                    </TouchableOpacity>

                   
                    {/* Novo botão para navegar à NovaPagina */}
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate('NovaPagina');
                            navigation.dispatch(DrawerActions.closeDrawer());
                        }}
                    >
                        <Entypo style={styles.iconRegistered} name="add-to-list" size={26} color="gray" />
                        <Text style={styles.PagesText}>Nova Página</Text>
                    </TouchableOpacity>
                </View>


       
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() => logout()}
                    style={styles.Sair}
                >
                    <MaterialIcons name="subdirectory-arrow-left" size={25} color="gray" />
                    <Text style={styles.SairText}>Sair da conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawer;