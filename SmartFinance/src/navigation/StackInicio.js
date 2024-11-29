import { createStackNavigator } from '@react-navigation/stack';
import ahorro from '../screens/ahorro';
import bienvenida from '../screens/bienvenida';
import gastos from '../screens/gastos';
import ingresos from '../screens/ingresos';
import inicioSesion from '../screens/inicioSesion';
import inversiones from '../screens/inversiones';
import registro from '../screens/registro';

const inicioStack = createStackNavigator();

export default function StackInicio() {
    return(
        <inicioStack.Navigator initialRootName="iniciosesion" screenOptions={{ 
            headerShown: false, 
            presentation: 'card' 
        }}>
            <inicioStack.Screen name="iniciosesion" component={ inicioSesion } options={{
                    title: "Inicio Sesion",
                    headerTitleAlign: 'center',
                    headerShown: false,
                }}/>
            <inicioStack.Screen name="ahorro" component={ ahorro } options={{
                    title: "Ahorro",
                    headerTitleAlign: 'center',
                    headerShown: true,
                }}/>
            <inicioStack.Screen name="bienvenida" component={ bienvenida } options={{
                    title: "Bienvenida",
                    headerTitleAlign: 'center',
                    headerShown: true,
                }}/>
            <inicioStack.Screen name="gastos" component={ gastos } options={{
                    title: "Gastos",
                    headerTitleAlign: 'center',
                    headerShown: true,
                }}/>
            <inicioStack.Screen name="ingresos" component={ ingresos } options={{
                    title: "Ingresos",
                    headerTitleAlign: 'center',
                    headerShown: true,
                }}/>

            <inicioStack.Screen name="inversiones" component={ inversiones } options={{
                    title: "Inversiones",
                    headerTitleAlign: 'center',
                    headerShown: true,
                }}/>
            <inicioStack.Screen name="registro" component={ registro } options={{
                    title: "Registro",
                    headerTitleAlign: 'center',
                    headerShown: true,
                }}/>
        </inicioStack.Navigator>
    )
}