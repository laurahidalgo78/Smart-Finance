import { StyleSheet } from "react-native";

export const estilosGlobal = StyleSheet.create({
    contenedor:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin:20,
        padding:20
    },
    contenedorRegistro:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginRight:20,
     },
     logoSmartRegistro:{
        width:200, 
        height:200,
        borderRadius:100
    },
    logoSmart:{
        width:200, 
        height:200,
        marginTop:20,
        borderRadius:100
    },
    titulo:{
        fontSize:22,
        margin:10,
        fontFamily: 'fantasy'
    },
    form:{
        width:'100%'
    },
    campoForm:{
        marginTop:20,
        marginBottom:20
    },
    campoFormRegistro:{
        marginTop:10,
        marginBottom:10
    },
    registro:{
        width:'100%',
        margin:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textoRegistro:{
        fontFamily: 'fantasy',
        fontSize:16
    }
});