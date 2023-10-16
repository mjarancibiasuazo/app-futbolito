import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrganizarTorneosScreen } from "../screens/account/OrganizarTorneosScreen";
import { LoginScreen } from "../screens/account/LoginScreen/LoginScreen";
import { RegisterScreen } from "../screens/account/RegisterScreen";
import { screen } from "../utils/screenUtils";

const Stack = createNativeStackNavigator();


export function OrganizarTorneosStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={ screen.organizar.organizar } 
            component={ OrganizarTorneosScreen } 
            options={{ title: "Organizar Torneos"}} 
            /> 

        <Stack.Screen 
            name={ screen.organizar.login } 
            component={ LoginScreen } 
            options={{ title: "Iniciar Sesión"}} 
            /> 

        <Stack.Screen 
            name={ screen.organizar.register } 
            component={ RegisterScreen } 
            options={{ title: "Crea Tu Cuenta"}} 
            /> 
        </Stack.Navigator>

        

    
    );
}