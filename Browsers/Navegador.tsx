import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import EditarScreen from "../screens/EditarScreen";
import LeerScreen from "../screens/LeerScreen";
import GuardarScreen from "../screens/GuardarScreen";
import EliminarScreen from "../screens/EliminarScreen";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function MyStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}} >
            <Stack.Screen name= 'Welcome' component={WelcomeScreen} />
            <Stack.Screen name = 'Login' component={LoginScreen}/>
            <Stack.Screen name = 'Drawer' component={MyDrawer} />
        </Stack.Navigator>
    )
}

function MyDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Guardar" component={GuardarScreen} />
            <Drawer.Screen name="Leer" component={LeerScreen} />
            <Drawer.Screen name="Editar" component={EditarScreen} />
            <Drawer.Screen name="Eliminar" component={EliminarScreen} />
        </Drawer.Navigator>
    )
}

export default function Navegador() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}