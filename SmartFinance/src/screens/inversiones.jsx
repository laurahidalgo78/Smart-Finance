import { View , ScrollView, Image } from 'react-native';
import { Icon , Card , Text, Button} from 'react-native-paper';
import { SafeAreaView , SafeAreaProvider} from 'react-native-safe-area-context';
import { estilosGlobal } from '../constants/estilosGlobal';

export default function inversiones(){
    return (
        <SafeAreaProvider>
            <SafeAreaView style={estilosGlobal.contenedor}>
                <ScrollView>
                    <ScrollView>
                        <View style={estilosGlobal.contenedorAccionesGlobales}>
                            <View style={estilosGlobal.contenedorAcciones}>
                                <View style={estilosGlobal.contenedorImagenEmpresa}>
                                    <Image style={estilosGlobal.imagenEmpresa} source={require("../../assets/bitcoin-logo.png")}/>
                                </View>
                                <View style={estilosGlobal.contenedorBotonesCompraVenta}>
                                    <Button mode="contained" style={estilosGlobal.botonVenta}>
                                        Vender
                                    </Button>
                                    <Button mode="contained" style={estilosGlobal.botonCompra}>
                                        Comprar
                                    </Button>
                                </View>
                            </View>
                            <View style={estilosGlobal.contenedorAcciones}>
                                <View style={estilosGlobal.contenedorImagenEmpresa}>
                                    <Image style={estilosGlobal.imagenEmpresa} source={require("../../assets/ethereum-logo.jpg")}/>
                                </View>
                                <View style={estilosGlobal.contenedorBotonesCompraVenta}>
                                    <Button mode="contained" style={estilosGlobal.botonVenta}>
                                        Vender
                                    </Button>
                                    <Button mode="contained" style={estilosGlobal.botonCompra}>
                                        Comprar
                                    </Button>
                                </View>
                            </View>
                            <View style={estilosGlobal.contenedorAcciones}>
                                <View style={estilosGlobal.contenedorImagenEmpresa}>
                                    <Image style={estilosGlobal.imagenEmpresa} source={require("../../assets/tesla-logo.png")}/>
                                </View>
                                <View style={estilosGlobal.contenedorBotonesCompraVenta}>
                                    <Button mode="contained" style={estilosGlobal.botonVenta}>
                                        Vender
                                    </Button>
                                    <Button mode="contained" style={estilosGlobal.botonCompra}>
                                        Comprar
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>             
            </SafeAreaView>
       </SafeAreaProvider>       
    )
}