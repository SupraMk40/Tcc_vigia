import React from 'react';

import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core';


import CustomDrawer from '../components/CustomDrawer';
// IMPORTAR AS TELAS QUE SERÃO USADAS NO APP
import Login from '../screens/Login';
import Home from '../screens/Home';
import Cadastro from '../screens/Cadastro';
import NovaPagina from '../screens/NovaPagina';

const DrawerRoutes = () => {
    
    const Drawer = createDrawerNavigator();

    return (
    <Drawer.Navigator 
        screenOptions={{
            headerShown:false,
            drawerStyle:{
            width: 250,
            height: '100%',
            justifyContent: 'center',
            backgroundColor: '#f2f2f2',
            zIndex: 11,
            
            }
        }}
        drawerContent={props => <CustomDrawer />}
    >
        

        {/* COLOCAR OS NOMES DAS TELAS DO MENU LATERAL */}
        <Drawer.Screen 
            name="Home"
            component={Home}
            
        />

       <Drawer.Screen 
            name="Cadastro"
            component={Cadastro}
            
        />
        {/* Registrar a nova página no Drawer para acesso */}
       <Drawer.Screen 
            name="NovaPagina"
            component={NovaPagina}
        />

        {/* Tela de Login (pode ser usada fora do drawer também) */}
       <Drawer.Screen 
            name="Login"
            component={Login}
        />

    </Drawer.Navigator>
    )
}

export default DrawerRoutes;

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#CFCFCF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    logout:{
        paddingTop: '190%',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    }
})