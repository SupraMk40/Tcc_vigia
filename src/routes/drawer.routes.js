import React from 'react';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';

import Home from '../screens/Home';
import Mapa from '../screens/Mapa';
import Alertas from '../screens/Alertas';
import Cadastro from '../screens/Cadastro';
import Chat from '../screens/Chat';
import Comunidade from '../screens/Comunidade';
import Cameras from '../screens/Cameras';
import Botao from '../screens/Botao';

const DrawerRoutes = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                drawerStyle: {
                    width: 250,
                    height: '100%',
                    justifyContent: 'center',
                    backgroundColor: '#f2f2f2',
                    zIndex: 11,
                }
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Mapa" component={Mapa} />
            <Drawer.Screen name="Alertas" component={Alertas} />
            <Drawer.Screen name="Cadastro" component={Cadastro} />
            <Drawer.Screen name="Chat" component={Chat} />
            <Drawer.Screen name="Comunidade" component={Comunidade} />
             <Drawer.Screen name="Botao" component={Botao} />
            <Drawer.Screen name="Cameras" component={Cameras} />
        </Drawer.Navigator>
        
    );
};

export default DrawerRoutes;

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#CFCFCF',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    logout: {
        paddingTop: '190%',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    }
});

