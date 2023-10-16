import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ResultadosScreen } from "../screens/ResultadosScreen";
import { screen } from "../utils/screenUtils";

const Stack = createNativeStackNavigator();


export function ResultadosStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={ screen.resultados.resultados } component={ ResultadosScreen } options={{ title: "Resultados de Partidos"}} /> 
        </Stack.Navigator>

    
    );
}