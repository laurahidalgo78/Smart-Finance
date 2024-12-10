import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estilosGlobal } from '../constants/estilosGlobal';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Registro() {
    const navegacion = useNavigation();
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [celular, setCelular] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');
    const [datosRegistrados, setDatosRegistrados] = useState([]);

    const guardarDatos = async () => {
        try {
            const usuarioData = {
                nombres,
                apellidos,
                tipoDocumento,
                numeroDocumento,
                celular,
                correoElectronico
            };

            // Obtener los datos existentes
            const datosExistentes = await AsyncStorage.getItem('@usuarios');
            const listaUsuarios = datosExistentes ? JSON.parse(datosExistentes) : [];

            // Agregar el nuevo usuario a la lista
            listaUsuarios.push(usuarioData);

            // Guardar la lista actualizada en AsyncStorage
            await AsyncStorage.setItem('@usuarios', JSON.stringify(listaUsuarios));
            navegacion.navigate('bienvenida');
        } catch (error) {
            console.error("Error al guardar los datos: ", error);
        }
    };

    const obtenerDatos = async () => {
        try {
            const datosGuardados = await AsyncStorage.getItem('@usuarios');
            if (datosGuardados !== null) {
                setDatosRegistrados(JSON.parse(datosGuardados));
            }
        } catch (error) {
            console.error("Error al obtener los datos: ", error);
        }
    };

    useEffect(() => {
        obtenerDatos();
    }, []);

    return (
        <SafeAreaView style={estilosGlobal.contenedorRegistro}>
            <ScrollView>
                <View>
                    <Image source={require("../../assets/logo.png")} style={estilosGlobal.logoSmartRegistro} />
                </View>
                <View>
                    <Text style={estilosGlobal.titulo}>Registro</Text>
                </View>

                <View style={estilosGlobal.form}>
                    <View style={estilosGlobal.campoFormRegistro}>
                        <TextInput mode="outlined" label="Nombres" onChangeText={text => setNombres(text)} />
                    </View>
                    <View style={estilosGlobal.campoFormRegistro}>
                        <TextInput mode="outlined" label="Apellidos" onChangeText={text => setApellidos(text)} />
                    </View>
                    <View style={estilosGlobal.campoFormRegistro}>
                        <Picker selectedValue={tipoDocumento} onValueChange={(itemValue) => setTipoDocumento(itemValue)}>
                            <Picker.Item label="Seleccione un tipo de documento" value="" />
                            <Picker.Item label="Cédula de Ciudadanía" value="cedula_ciudadania" />
                            <Picker.Item label="Cédula de Extranjería" value="cedula_extranjeria" />
                            <Picker.Item label="Pasaporte" value="pasaporte" />
                        </Picker>
                    </View>
                    <View style={estilosGlobal.campoFormRegistro}>
                        <TextInput mode="outlined" label="Número De Documento" onChangeText={text => setNumeroDocumento(text)} />
                    </View>
                    <View style={estilosGlobal.campoFormRegistro}>
                        <TextInput mode="outlined" label="Celular" onChangeText={text => setCelular(text)} />
                    </View>
                    <View style={estilosGlobal.campoFormRegistro}>
                        <TextInput mode="outlined" label="Correo Electrónico" onChangeText={text => setCorreoElectronico(text)} />
                    </View>
                    <View style={estilosGlobal.campoFormRegistro}>
                        <Button mode="contained" onPress={guardarDatos}>
                            Registrarse
                        </Button>
                    </View>
                </View>

               
                {datosRegistrados.length > 0 && (
                    <View style={estilosGlobal.datosRegistradosContainer}>
                        <Text style={estilosGlobal.titulo}>Datos Registrados:</Text>
                        {datosRegistrados.map((usuario, index) => (
                            <View key={index} style={{ marginBottom: 10 }}>
                                <Text>Nombres: {usuario.nombres}</Text>
                                <Text>Apellidos: {usuario.apellidos}</Text>
                                <Text>Tipo de Documento: {usuario.tipoDocumento}</Text>
                                <Text>Número de Documento: {usuario.numeroDocumento}</Text>
                                <Text>Celular: {usuario.celular}</Text>
                                <Text>Correo Electrónico: {usuario.correoElectronico}</Text>
                            </View>
                        ))}
                    </View>
                )}
                    
            </ScrollView>
        </SafeAreaView>
    );
}