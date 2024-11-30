import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { estilosGlobal } from '../constants/estilosGlobal';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function inicioSesion(){
    const navegacion = useNavigation();
    const [Email, setEmail]=React.useState('');
    const [Password, setPassword]=React.useState('');
    return (
        <SafeAreaView style={estilosGlobal.contenedor}>
            <View>
                <Image source={require("../../assets/logo.png")} style={estilosGlobal.logoSmart}/>
            </View>
            <View>
                <Text style={estilosGlobal.titulo}>Inicio Sesión</Text>
            </View>
            <View style={estilosGlobal.form}>
                <View style={estilosGlobal.campoForm}>
                    <TextInput mode="outlined" label="Usuario" onChangeText={text => setEmail(text)}/>
                </View>
                <View style={estilosGlobal.campoForm}>
                    <TextInput secureTextEntry mode="outlined" label="Contraseña" placeholder="Type something" onChangeText={text => setPassword(text)} right={<TextInput.Affix text="/100" />} />
                </View>
                <View style={estilosGlobal.campoForm}>
                    <Button  mode="contained"  onPress={()=>navegacion.navigate('bienvenida')}>
                        Ingresar
                    </Button>
                    
                </View>
                <View style={estilosGlobal.registro}>
                    <Text style={estilosGlobal.textoRegistro}>
                        ¿No tienes cuenta? 
                    </Text>
                    <TouchableOpacity onPress={()=>navegacion.navigate('registro')}>
                        <Text style={estilosGlobal.textoRegistro}>Registrate aquí.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}