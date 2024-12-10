import { StyleSheet } from "react-native";
import { colores } from "./colores";

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
    },
    textoBienvenida:{
        fontFamily: 'fantasy',
        fontSize:25
    },
    textoDinero:{
        fontFamily: 'fantasy',
        fontSize:16
    },
    contenedorTextoBienvenida:{
        margin:10
    },
    contenedorCards:{
        margin:20,
        padding:20,
    },
    cardsBienvenida:{
        marginBottom:20,
        padding:20,
        width:250,        
    },
    cardsSaldoIngresos:{
        marginBottom:10,
        width:'100%',
        backgroundColor: colores.saldoIngresos
    },
    cardsSaldoGastos:{
        marginBottom:10,
        width:'100%',
        backgroundColor: colores.saldoGastos
    },
    cardsSaldoInversiones:{
        marginBottom:10,
        width:'100%',
        backgroundColor: colores.saldoInversiones
    },
    cardsSaldoAhorro:{
        marginBottom:10,
        width:'100%',
        backgroundColor: colores.saldoAhorro
    },
    textoSaldo:{   
        color: '#ffffff',
        fontFamily: 'fantasy',
        fontWeight: 'bold',
        marginBottom: 5
   },
    textoNumeroSaldo:{
         fontSize: 25,
         padding: 4,
         marginRight: 5
    },
    textoIngresos:{
        fontSize: 30,
        fontFamily: 'fantasy',
        marginTop: 10
    },
    textoAhorro:{
        fontSize: 30,
        fontFamily: 'fantasy',
        marginTop: 10
    },
    cardFecha:{
        backgroundColor: '#dddddd'
    },
    cardFecha:{
        backgroundColor: '#dddddd'
    },
    contenedorPrincipalBanco:{
        //display: 'flex',
        //flexDirection: 'column',
        //justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        marginTop: 30,
        marginBottom: 30,
       // padding: 10
    },
    contenedorBancos:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    contenedorImagenBancos:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%'
    },
    imagenBancos:{
        width:50, 
        height:50,
        borderRadius:100,
    },
    imagenInversion:{
        width:"100%", 
        height: 200,
    },
    contenedorValorBanco:{
        display: 'flex',
        alignItems: 'center'
    },
    textoValorBanco:{
        display: 'inline',
        fontFamily: 'fantasy',
        fontSize: 17,
        color: '#09D886'
    },
    nombreBanco:{
        fontFamily: 'fantasy',
        fontSize: 17
    },
    imagenGrafica:{
        width: '100%',
        height: '200',
        marginTop: 20,
        marginBottom: 5
    },
    contenedorAccionesGlobales: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        marginBottom: 30,
    },
    contenedorAcciones:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '100%'
    },
    contenedorImagenEmpresa: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imagenEmpresa:{
        width:70, 
        height:40,
        objectFit: 'fill',
        aspectRatio: '9/5'
    },
    contenedorBotonesCompraVenta:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    botonCompra: {
        backgroundColor: '#090',
        borderRadius: 1,
        boxShadow: '3px 8px 21px -11px rgba(0,0,0,0.75)',
        '-webkit-box-shadow': '3px 8px 21px -11px rgba(0,0,0,0.75)',
        '-moz-box-shadow': '3px 8px 21px -11px rgba(0,0,0,0.75)'
    },
    botonVenta: {
        backgroundColor: '#900',
        marginEnd: 5,
        borderRadius: 1,
        boxShadow: '3px 8px 21px -11px rgba(0,0,0,0.75)',
        '-webkit-box-shadow': '3px 8px 21px -11px rgba(0,0,0,0.75)',
        '-moz-box-shadow': '3px 8px 21px -11px rgba(0,0,0,0.75)'
    },
    contenedorValorGastos:{
        display: 'flex',
        alignItems: 'center'
    },
    textoValorGastos:{
        display: 'inline',
        fontFamily: 'fantasy',
        fontSize: 17,
        color: '#E14D58'
    },
    nombreGastos:{
        fontFamily: 'fantasy',
        fontSize: 17
    },
    imagenGraficaGastos:{
        width: '100%',
        height: '200',
        marginTop: 20,
        marginBottom: 5
    },
    contenedorValorGastos:{
        display: 'flex',
        alignItems: 'center'
    },
    textoValorGastos:{
        display: 'inline',
        fontFamily: 'fantasy',
        fontSize: 17,
        color: '#E14D58'
    },
    nombreGastos:{
        fontFamily: 'fantasy',
        fontSize: 17
    },
    imagenGraficaGastos:{
        width: '100%',
        height: '200',
        marginTop: 20,
        marginBottom: 5
    },

    contenedorPrincipalAhorro:{
        //display: 'flex',
        //flexDirection: 'column',
        //justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        marginTop: 30,
        marginBottom: 10,
       // padding: 10
    },
    contenedorAhorro:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    contenedorImagenAhorro:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '50%'
    },
    imagenAhorro:{
        width:50, 
        height:50,
        borderRadius:100,
    },
    contenedorValorAhorro:{
        display: 'flex',
        alignItems: 'center'
    },
    textoValorAhorro:{
        display: 'inline',
        fontFamily: 'fantasy',
        fontSize: 17,
        color: '#09D886'
    },
    nombreAhorro:{
        fontFamily: 'fantasy',
        fontSize: 17
    },
});