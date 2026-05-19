import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerRoutes from './drawer.routes';

//TELAS
import Inicio from '../screens/Inicio';
import Login from '../screens/Login';
import Index from '../screens/Botao';
import Forms from '../screens/Botao/forms';
import Confirm from '../screens/Botao/confirm';

import AdicionarCamera from '../screens/Cameras/AdicionarCamera';
import SucessoCamera from '../screens/Cameras/SucessoCamera';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Inicio" 
    >

      <Stack.Screen name="Inicio" component={Inicio} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="App" component={DrawerRoutes} />

      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Forms" component={Forms} />
      <Stack.Screen name="Confirm" component={Confirm} />

      <Stack.Screen name="AdicionarCamera" component={AdicionarCamera} />
      <Stack.Screen name="SucessoCamera" component={SucessoCamera} />

    </Stack.Navigator>
  );
}