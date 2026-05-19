import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { styles } from './styles';

const CustomDrawer = ({ navigation }) => {

    const goTo = (screen) => {
        navigation.navigate(screen);
        navigation.closeDrawer(); 
    };

    const logout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
        });
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>

            <View style={styles.header}>
                <Text style={styles.headerText}>SMC</Text>
            </View>

            <ScrollView style={styles.container}>

                <TouchableOpacity style={styles.Pages} onPress={() => goTo("Home")}>
                    <MaterialIcons name="home" size={26} color="#555" />
                    <Text style={styles.PagesText}>Feed</Text>
                </TouchableOpacity>

                  <TouchableOpacity style={styles.Pages} onPress={() => goTo("Mapa")}>
                    <MaterialIcons name="map" size={26} color="#555" />
                    <Text style={styles.PagesText}>Mapa</Text>
                </TouchableOpacity>

                  <TouchableOpacity style={styles.Pages} onPress={() => goTo("Alertas")}>
                    <MaterialIcons name="notifications-active" size={26} color="#555" />
                    <Text style={styles.PagesText}>Alertas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Pages} onPress={() => goTo("Chat")}>
                    <MaterialIcons name="chat" size={26} color="#555" />
                    <Text style={styles.PagesText}>Chat</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Pages} onPress={() => goTo("Comunidade")}>
                    <MaterialIcons name="groups" size={26} color="#555" />
                    <Text style={styles.PagesText}>Comunidades</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Pages} onPress={() => goTo("Cameras")}>
                    <Entypo name="video-camera" size={24} color="#555" />
                    <Text style={styles.PagesText}>Minhas Câmeras</Text>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.Pages} onPress={() => goTo("Botao")}>
                    <MaterialIcons name="add-alert" size={26} color="#555" />
                    <Text style={styles.PagesText}>Emergência</Text>
                </TouchableOpacity>

            </ScrollView>

            {/*FOOTER*/}
            <View style={styles.footer}>
                <TouchableOpacity onPress={logout} style={styles.Sair}>
                    <MaterialIcons name="logout" size={24} color="#e53935" />
                    <Text style={styles.SairText}>Sair da conta</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default CustomDrawer;