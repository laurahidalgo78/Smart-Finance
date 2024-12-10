import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { estilosGlobal } from '../constants/estilosGlobal';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';


export default function registro(){
    const navegacion = useNavigation();
    const [Email, setEmail]=React.useState('');
    const [Password, setPassword]=React.useState('');
    return (
<SafeAreaView style={estilosGlobal.contenedorRegistro}>
<View>
                <Image source={require("../../assets/logo.png")} style={estilosGlobal.logoSmartRegistro}/>
            </View>
            <View>
                <Text style={estilosGlobal.titulo}>Registro</Text>
            </View>
                             
            <View style={estilosGlobal.form}>
                <View style={estilosGlobal.campoFormRegistro}>
                    <TextInput mode="outlined" label="Nombres" onChangeText={text => setEmail(text)}/>
                </View>
                <View style={estilosGlobal.campoFormRegistro}>
                    <TextInput mode="outlined" label="Apellidos" onChangeText={text => setEmail(text)}/>
                </View>
                <View style={estilosGlobal.campoFormRegistro}>
                <Picker> 
                    <Picker.Item label="Seleccione un tipo de documento" value="" />
                        <Picker.Item label="Cedula de Ciudania" value="java" />
                        <Picker.Item label="Cedula de Extrangeria" value="js" />
                        <Picker.Item label="Pasarporte" value="js" />                        
                    </Picker>    
                </View>               
                <View style={estilosGlobal.campoFormRegistro}>
                    <TextInput mode="outlined" label="Numero De Documento" onChangeText={text => setEmail(text)}/>
                </View>
                <View style={estilosGlobal.campoFormRegistro}>
                    <TextInput mode="outlined" label="Celular" onChangeText={text => setEmail(text)}/>
                </View>
                <View style={estilosGlobal.campoFormRegistro}>
                    <TextInput mode="outlined" label="Correo Electronico" onChangeText={text => setEmail(text)}/>
                </View>                
                <View style={estilosGlobal.campoFormRegistro}>
                    <Button  mode="contained"  onPress={()=>navegacion.navigate('bienvenida')}>
                        Registrarse
                    </Button>
                    
                </View>
                
            </View>
       
        </SafeAreaView>
    )
}