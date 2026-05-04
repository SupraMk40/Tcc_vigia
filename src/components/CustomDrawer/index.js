import React from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { styles } from './styles';
import { DrawerActions, useNavigation } from '@react-navigation/core';

const CustomDrawer = () => {
    const navigation = useNavigation();

    const logout = () => {
        navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Image style={styles.logo} source={require('../../../assets/logo2.png')} />
            <View style={{ width: '90%', backgroundColor: '#c1c1c1', height: 0.5, alignSelf: 'center', marginBottom: 5, marginTop: 20 }}></View>

            <ScrollView style={styles.container}>
                <View>
                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Home");
                            navigation.dispatch(DrawerActions.closeDrawer());
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="home" size={30} color="gray" />
                        <Text style={styles.PagesText}>Feed da Comunidade</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Cadastro");
                            navigation.dispatch(DrawerActions.closeDrawer());
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="add-alert" size={30} color="gray" />
                        <Text style={styles.PagesText}>Novo Alerta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("CamerasDisponiveis");
                            navigation.dispatch(DrawerActions.closeDrawer());
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="videocam" size={30} color="gray" />
                        <Text style={styles.PagesText}>Câmeras Disponíveis</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Cadastro");
                            navigation.dispatch(DrawerActions.closeDrawer());
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="location-on" size={30} color="gray" />
                        <Text style={styles.PagesText}>Registros na Região</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Cadastro");
                            navigation.dispatch(DrawerActions.closeDrawer());
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="group" size={30} color="gray" />
                        <Text style={styles.PagesText}>Chat da Vizinhança</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Pages}
                        onPress={() => {
                            navigation.navigate("Cadastro");
                            navigation.dispatch(DrawerActions.closeDrawer());
                        }}
                    >
                        <MaterialIcons style={styles.iconRegistered} name="camera-alt" size={30} color="gray" />
                        <Text style={styles.PagesText}>Minhas Câmeras</Text>
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
};

export default CustomDrawer;

