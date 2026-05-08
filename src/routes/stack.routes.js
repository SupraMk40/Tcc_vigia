import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './drawer.routes';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Cadastro from '../screens/Cadastro';
import AlertaDetalhe from '../screens/AlertaDetalhe';
import Perfil from '../screens/Perfil';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={DrawerRoutes} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="AlertaDetalhe" component={AlertaDetalhe} />
            <Stack.Screen name="Perfil" component={Perfil} />
        </Stack.Navigator>
    );
}

