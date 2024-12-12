import React, { useEffect, useState } from 'react';
import { View , ScrollView, Image } from 'react-native';
import { Icon , Card , Text, Button} from 'react-native-paper';
import { SafeAreaView , SafeAreaProvider} from 'react-native-safe-area-context';
import { estilosGlobal } from '../constants/estilosGlobal';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function gastos(){
    const navegacion = useNavigation();
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
                    <Card style={estilosGlobal.cardsSaldoGastos}>
                        <Card.Content>
                            <Text variant="titleLarge" style={estilosGlobal.textoSaldo}>Saldo</Text> 
                            <Card>
                                <Card.Content >

                                    <Text style={estilosGlobal.textoNumeroSaldo}>-$1.000.000 (COP)
                                    <Icon
                                        source="eye"
                                        size= {20}
                                    />   
                                    </Text> 
                                    
                                </Card.Content>
                            </Card>                                   
                        </Card.Content>    
                    </Card>
                    <Text variant="titleLarge" style={estilosGlobal.textoIngresos}>GASTOS</Text> 
                    <Card style={estilosGlobal.cardFecha}>
                        <Card.Content style={estilosGlobal.contenidoCardFecha}>
                            <Text >Fecha consulta: dd/mm/aaaa</Text> 
                            <Text >Total Gastos: ......
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
                                <Image style={estilosGlobal.imagenBancos} source={require("../../assets/Arriendo.jpg")}/>
                                <Text style={estilosGlobal.nombreBanco}>Arriendo</Text>
                            </View>
                            <View style={estilosGlobal.contenedorValorBanco}>
                                <Text style={estilosGlobal.textoValorGastos}>$-600.000</Text>
                            </View>
                        </View>
                        <View style={estilosGlobal.contenedorBancos}>
                            <View style={estilosGlobal.contenedorImagenBancos}>
                                <Image style={estilosGlobal.imagenBancos} source={require("../../assets/Mercado.png")}/>
                                <Text style={estilosGlobal.nombreBanco}>Mercado</Text>
                            </View>
                            <View style={estilosGlobal.contenedorValorBanco}>
                                <Text style={estilosGlobal.textoValorGastos}>-$200.000</Text>
                            </View>
                        </View>
                        <View style={estilosGlobal.contenedorBancos}>
                            <View style={estilosGlobal.contenedorImagenBancos}>
                                <Image style={estilosGlobal.imagenBancos} source={require("../../assets/Servicios.png")}/>
                                <Text style={estilosGlobal.nombreBanco}>Servicios</Text>
                            </View>
                            <View style={estilosGlobal.contenedorValorBanco}>
                                <Text style={estilosGlobal.textoValorGastos}>-$200.000</Text>
                            </View>
                        </View>
                    </View>
                    <Card style={estilosGlobal.cardFecha}>
                        <Card.Content>
                            <Text >GRAFICA GASTOS Y PERDIDAS</Text> 
                                               
                        </Card.Content>    
                    </Card>
                    <View >
                        <View>
                            <Image style={estilosGlobal.imagenGrafica} source={require("../../assets/grafica-Gastos.jpg")}/>                     
                        </View>
                    </View>
                    <View style={estilosGlobal.campoForm}>
                        <Button  mode="contained"  onPress={()=>navegacion.navigate('bienvenida')}>
                            Agregar Gasto
                        </Button>                 
                    </View>
                </ScrollView>             
            </SafeAreaView>
       </SafeAreaProvider>       
    )
}