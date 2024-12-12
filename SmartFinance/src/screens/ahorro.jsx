import React, { useEffect, useState } from 'react';
import { View , ScrollView, Image } from 'react-native';
import { Icon , Card , Text, Button} from 'react-native-paper';
import { SafeAreaView , SafeAreaProvider} from 'react-native-safe-area-context';
import { estilosGlobal } from '../constants/estilosGlobal';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ahorro(){
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
                    <Card style={estilosGlobal.cardsSaldoAhorro}>
                        <Card.Content>
                            <Text variant="titleLarge" style={estilosGlobal.textoSaldo}>Saldo</Text> 
                            <Card>
                                <Card.Content >

                                    <Text style={estilosGlobal.textoNumeroSaldo}>$2.500.000 (COP)
                                    <Icon
                                        source="eye"
                                        size= {20}
                                    />   
                                    </Text> 
                                    
                                </Card.Content>
                            </Card>                                   
                        </Card.Content>    
                    </Card>
                    <Text variant="titleLarge" style={estilosGlobal.textoAhorro}>AHORRO</Text> 
                    <Card style={estilosGlobal.cardFecha}>
                        <Card.Content style={estilosGlobal.contenidoCardFecha}>
                            <Text >Fecha Consulta: dd/mm/aaaa</Text> 
                            <Text >Total Ahorro: ......
                                <Icon
                                        source="eye"
                                        size= {20}
                                    />   
                            </Text>                           
                        </Card.Content>    
                    </Card>
                    <View style={estilosGlobal.contenedorPrincipalAhorro}>
                        <View style={estilosGlobal.contenedorAhorro}>
                            <View style={estilosGlobal.contenedorImagenAhorro}>
                                <Image style={estilosGlobal.imagenAhorro} source={require("../../assets/coink-logo.png")}/>
                                <Text style={estilosGlobal.nombreAhorro}>COINK</Text>
                            </View>
                            <View style={estilosGlobal.contenedorValorAhorro}>
                                <Text style={estilosGlobal.textoValorAhorro}>$150.000</Text>
                            </View>
                        </View>
                        <View style={estilosGlobal.contenedorAhorro}>
                            <View style={estilosGlobal.contenedorImagenAhorro}>
                                <Image style={estilosGlobal.imagenAhorro} source={require("../../assets/daviplata-logo.png")}/>
                                <Text style={estilosGlobal.nombreAhorro}>Daviplata</Text>
                            </View>
                            <View style={estilosGlobal.contenedorValorAhorro}>
                                <Text style={estilosGlobal.textoValorAhorro}>$10.000</Text>
                            </View>
                        </View>
                        <View style={estilosGlobal.contenedorAhorro}>
                            <View style={estilosGlobal.contenedorImagenAhorro}>
                                <Image style={estilosGlobal.imagenAhorro} source={require("../../assets/paypal-logo.png")}/>
                                <Text style={estilosGlobal.nombreAhorro}>Paypal</Text>
                            </View>
                            <View style={estilosGlobal.contenedorValorAhorro}>
                                <Text style={estilosGlobal.textoValorAhorro}>$29.000</Text>
                            </View>
                        </View>
                        <View style={estilosGlobal.contenedorAhorro}>
                            <View style={estilosGlobal.contenedorImagenAhorro}>
                                <Image style={estilosGlobal.imagenAhorro} source={require("../../assets/nequi-logo.jpg")}/>
                                <Text style={estilosGlobal.nombreAhorro}>Nequi</Text>
                            </View>
                            <View style={estilosGlobal.contenedorValorAhorro}>
                                <Text style={estilosGlobal.textoValorAhorro}>$100.000</Text>
                            </View>
                        </View>
                    </View>
                    <View >
                        <View>
                            <Image style={estilosGlobal.imagenGrafica} source={require("../../assets/grafica_ahorro.png")}/>                     
                        </View>
                    </View>
                    <View style={estilosGlobal.campoForm}>
                        <Button  mode="contained"  onPress={()=>navegacion.navigate('bienvenida')}>
                            Agregar Ahorro
                        </Button>                 
                    </View>
                </ScrollView>             
            </SafeAreaView>
       </SafeAreaProvider>       
    )
}