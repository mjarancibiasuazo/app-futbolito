import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../screens/account/AccountScreen";
import { LoginScreen } from "../screens/account/LoginScreen/LoginScreen";
import { RegisterScreen } from "../screens/account/RegisterScreen";
import { screen } from "../utils/screenUtils";

const Stack = createNativeStackNavigator();


export function AccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={ screen.account.account } 
            component={ AccountScreen } 
            options={{ title: "Cuenta"}} 
            /> 

        <Stack.Screen 
            name={ screen.account.login } 
            component={ LoginScreen } 
            options={{ title: "Iniciar Sesión"}} 
            /> 

        <Stack.Screen 
            name={ screen.account.register } 
            component={ RegisterScreen } 
            options={{ title: "Crea Tu Cuenta"}} 
            /> 
        </Stack.Navigator>

        

    
    );
}