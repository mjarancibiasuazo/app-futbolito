import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PartidosScreen } from "../screens/PartidosScreen";
import { screen } from "../utils/screenUtils";

const Stack = createNativeStackNavigator();


export function PartidosStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={ screen.partidos.partidos } component={ PartidosScreen } options={{ title: "Programación de Partidos"}} /> 
        </Stack.Navigator>

    
    );
}