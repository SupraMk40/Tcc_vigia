
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes';


// IMPORTAR AS TELAS QUE SERÃO USADAS NO APP

import Login from '../screens/Login';
import Home from '../screens/Home';
import Cadastro from '../screens/Cadastro';
import NovaPagina from '../screens/NovaPagina';


const Stack = createNativeStackNavigator();

export default function StackNavigator(){
    return (
<Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>   

            {/* A TELA QUE TERÁ O MENU LATERAL DEVE ESTAR NO COMPONENT COMO O NOME DO MENU LATERAL DrawerRoutes */}
            <Stack.Screen name="Login" component={Login} /> 
            <Stack.Screen name="Home" component={DrawerRoutes} />                     
            <Stack.Screen name="Cadastro" component={Cadastro} /> 
            <Stack.Screen name="NovaPagina" component={NovaPagina} />
             
        </Stack.Navigator>
    )
}


