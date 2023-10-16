import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistroEquipoScreen } from "../screens/registro/RegistroEquipoScreen";
import { AddRegistroScreen } from "../screens/registro/AddRegistroScreen";
import { screen } from "../utils/screenUtils";

const Stack = createNativeStackNavigator();

export function RegistroEquiposStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={ screen.registrar.registartEquipos } component={ RegistroEquipoScreen } options={{ title: "Equipos"}} />
            <Stack.Screen name={ screen.registrar.addRegistro } component={ AddRegistroScreen } options={{ title: "Equipos"}} />
            
        </Stack.Navigator>

    
    );
}