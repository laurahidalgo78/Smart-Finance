import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { estilosGlobal } from '../constants/estilosGlobal';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function InicioSesion() {
    const navegacion = useNavigation();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const verificarCredenciales = async () => {
        if (!Email || !Password) {
            Alert.alert("Error", "Por favor ingresa tu correo electrónico y contraseña.");
            return;
        }

        try {
            // Verificar si ya hay un usuario logueado
            const usuarioLogeado = await AsyncStorage.getItem('@usuarioLogeado');
            if (usuarioLogeado) {
                // Si hay un usuario logueado, lo eliminamos
                await AsyncStorage.removeItem('@usuarioLogeado');
            }

            const datosGuardados = await AsyncStorage.getItem('@usuarios');
            if (datosGuardados !== null) {
                const listaUsuarios = JSON.parse(datosGuardados);
                const usuarioEncontrado = listaUsuarios.find(usuario => 
                    usuario.correoElectronico === Email && usuario.numeroDocumento === Password
                );

                if (usuarioEncontrado) {
                    // Guardar el nuevo usuario logueado
                    await AsyncStorage.setItem('@usuarioLogeado', JSON.stringify(usuarioEncontrado));
                    navegacion.navigate('bienvenida');
                } else {
                    Alert.alert("Error", "El correo electrónico o la contraseña no coinciden.");
                }
            } else {
                Alert.alert("Error", "No hay usuarios registrados.");
            }
        } catch (error) {
            console.error("Error al verificar las credenciales: ", error);
            Alert.alert("Error", "Ocurrió un error al verificar las credenciales.");
        }
    };

    return (
        <SafeAreaView style={estilosGlobal.contenedor}>
            <ScrollView>
                <View>
                    <Image source={require("../../assets/logo.png")} style={estilosGlobal.logoSmart} />
                </View>
                <View>
                    <Text style={estilosGlobal.titulo}>Inicio Sesión</Text>
                </View>
                <View style={estilosGlobal.form}>
                    <View style={estilosGlobal.campoForm}>
                        <TextInput mode="outlined" label="Usuario" onChangeText={text => setEmail(text)} />
                    </View>
                    <View style={estilosGlobal.campoForm}>
                        <TextInput 
                            secureTextEntry 
                            mode="outlined" 
                            label="Contraseña" 
                            onChangeText={text => setPassword(text)} 
                        />
                    </View>
                    <View style={estilosGlobal.campoForm}>
                        <Button mode="contained" onPress={verificarCredenciales}>
                            Ingresar
                        </Button>
                    </View>
                    <View style={estilosGlobal.registro}>
                        <Text style={estilosGlobal.textoRegistro}>
                            ¿No tienes cuenta? 
                        </Text>
                        <TouchableOpacity onPress={() => navegacion.navigate('registro')}>
                            <Text style={estilosGlobal.textoRegistro}>Regístrate aquí.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}