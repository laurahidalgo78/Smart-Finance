import React, { useEffect, useState } from 'react';
import { View , ScrollView, Image } from 'react-native';
import { Icon , Card , Text, Button} from 'react-native-paper';
import { SafeAreaView , SafeAreaProvider} from 'react-native-safe-area-context';
import { estilosGlobal } from '../constants/estilosGlobal';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function inversiones(){
    const [datosRegistrados, setDatosRegistrados] = useState([]);
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
        <SafeAreaProvider>
            <SafeAreaView style={estilosGlobal.contenedor}>
                <ScrollView>
                {datosRegistrados.length > 0 && (
                    <View style={estilosGlobal.datosRegistradosContainer}>
                        {datosRegistrados.map((usuario, index) => (
                            <View key={index} style={{ marginBottom: 10 }}>
                                <Text>Hola, {usuario.nombres}  {usuario.apellidos}</Text>
                            </View>
                        ))}
                    </View>
                )}
                    <Card style={estilosGlobal.cardsSaldoInversiones}>
                        <Card.Content>
                            <Text variant="titleLarge" style={estilosGlobal.textoSaldo}>Saldo</Text> 
                            <Card>
                                <Card.Content >

                                    <Text style={estilosGlobal.textoNumeroSaldo}>$1.500.000 (COP)
                                    <Icon
                                        source="eye"
                                        size= {20}
                                    />   
                                    </Text> 
                                    
                                </Card.Content>
                            </Card>                                   
                        </Card.Content>    
                    </Card>
                    <Text variant="titleLarge" style={estilosGlobal.textoIngresos}>INVERSIONES</Text> 
                    
                    <View>
                       <Image style={estilosGlobal.imagenInversion} source={require("../../assets/inversionesWow.png")}/>
                    </View>



                </ScrollView>             
            </SafeAreaView>
       </SafeAreaProvider>       
    )
}