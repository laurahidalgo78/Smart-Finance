import React, { useEffect, useState } from 'react';
import { View , ScrollView } from 'react-native';
import { Icon , Card , Text} from 'react-native-paper';
import { SafeAreaView , SafeAreaProvider} from 'react-native-safe-area-context';
import { estilosGlobal } from '../constants/estilosGlobal';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function bienvenida(){
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
    const navegacion = useNavigation();
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
                    <View style={estilosGlobal.contenedorTextoBienvenida}>
                        <Text style={estilosGlobal.textoBienvenida}>Organiza Tu Dinero</Text>
                    </View>
                    <View>
                        <Text style={estilosGlobal.textoDinero}>TU SALDO ACTUAL ES DE</Text>
                        <Text style={estilosGlobal.textoDinero}>$................... 
                        <Icon
                            source="eye"
                            size= {20}
                        />   
                        </Text>
                        
                    </View>
                    <View style={estilosGlobal.contenedorCards} >
                        <Card style={estilosGlobal.cardsBienvenida} onPress={()=> navegacion.navigate("ingresos")}>
                            
                            <Card.Content>
                                <Text variant="titleLarge">INGRESOS</Text>                                    
                            </Card.Content>
                            <Card.Cover source={{  uri: "https://blog.nubox.com/hubfs/%C2%BFQu%C3%A9%20es%20ingreso%20en%20contabilidad.jpg"}}/>
                        </Card>
                        <Card style={estilosGlobal.cardsBienvenida}  onPress={()=> navegacion.navigate("gastos")}>
                            
                            <Card.Content>
                                <Text variant="titleLarge">GASTOS</Text>                                    
                            </Card.Content>
                            <Card.Cover source={{  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJ_lb4zMj9juK4CIVCU4MD6NyHDG1tCFROg&s"}}/>
                        </Card>
                        <Card style={estilosGlobal.cardsBienvenida} onPress={()=> navegacion.navigate("inversiones")}>
                            
                            <Card.Content>
                                <Text variant="titleLarge">INVERSIONES</Text>                                    
                            </Card.Content>
                            <Card.Cover source={{  uri: "https://bc-business-directory.com/wp-content/uploads/2020/10/que-es-la-gestion-de-inversiones.jpg"}}/>
                        </Card>
                        <Card style={estilosGlobal.cardsBienvenida} onPress={()=> navegacion.navigate("ahorro")}>
                            
                            <Card.Content>
                                <Text variant="titleLarge">AHORRO</Text>                                    
                            </Card.Content>
                            <Card.Cover source={{  uri: "https://concepto.de/wp-content/uploads/2018/04/ahorro2-e1547087574282.jpg"}}/>
                        </Card>
                    </View>
                </ScrollView>             
            </SafeAreaView>
       </SafeAreaProvider>       
    )
}