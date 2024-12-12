import React, { useEffect, useState } from 'react';
import { View , ScrollView, Image } from 'react-native';
import { Icon , Card , Text, Button} from 'react-native-paper';
import { SafeAreaView , SafeAreaProvider} from 'react-native-safe-area-context';
import { estilosGlobal } from '../constants/estilosGlobal';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ingresos(){
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
                    <Card style={estilosGlobal.cardsSaldoIngresos}>
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
                    <Text variant="titleLarge" style={estilosGlobal.textoIngresos}>INGRESOS</Text> 
                    <Card style={estilosGlobal.cardFecha}>
                        <Card.Content style={estilosGlobal.contenidoCardFecha}>
                            <Text >Fecha consulta: dd/mm/aaaa</Text> 
                            <Text >Total Ingresos: ......
                                <Icon
                                        source="eye"
                                        size= {20}
                                    />   
                            </Text>                           
                        </Card.Content>    
                    </Card>
                    <View style={estilosGlobal.contenedorPrincipalBanco}>
                        <View style={estilosGlobal.contenedorBancos}>
                            <View style={estilosGlobal.contenedorImagenBancos}>
                                <Image style={estilosGlobal.imagenBancos} source={require("../../assets/davivienda-logo.png")}/>
                                <Text style={estilosGlobal.nombreBanco}>Davivienda</Text>
                            </View>
                            <View style={estilosGlobal.contenedorValorBanco}>
                                <Text style={estilosGlobal.textoValorBanco}>$1.000.000</Text>
                            </View>
                        </View>
                        <View style={estilosGlobal.contenedorBancos}>
                            <View style={estilosGlobal.contenedorImagenBancos}>
                                <Image style={estilosGlobal.imagenBancos} source={require("../../assets/caja-social-logo.jpg")}/>
                                <Text style={estilosGlobal.nombreBanco}>Caja Social</Text>
                            </View>
                            <View style={estilosGlobal.contenedorValorBanco}>
                                <Text style={estilosGlobal.textoValorBanco}>$500.000</Text>
                            </View>
                        </View>
                        <View style={estilosGlobal.contenedorBancos}>
                            <View style={estilosGlobal.contenedorImagenBancos}>
                                <Image style={estilosGlobal.imagenBancos} source={require("../../assets/grupo-aval-logo.png")}/>
                                <Text style={estilosGlobal.nombreBanco}>Grupo Aval</Text>
                            </View>
                            <View style={estilosGlobal.contenedorValorBanco}>
                                <Text style={estilosGlobal.textoValorBanco}>$1.000.000</Text>
                            </View>
                        </View>
                    </View>
                    <Card style={estilosGlobal.cardFecha}>
                        <Card.Content>
                            <Text >GRAFICA INGRESOS Y GANANCIAS</Text> 
                                               
                        </Card.Content>    
                    </Card>
                    <View >
                        <View>
                            <Image style={estilosGlobal.imagenGrafica} source={require("../../assets/grafica-ingresos.png")}/>                     
                        </View>
                    </View>
                    <View style={estilosGlobal.campoForm}>
                        <Button  mode="contained"  onPress={()=>navegacion.navigate('bienvenida')}>
                            Agregar Banco
                        </Button>                 
                    </View>
                </ScrollView>             
            </SafeAreaView>
       </SafeAreaProvider>       
    )
}