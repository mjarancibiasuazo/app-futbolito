import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TorneoScreen } from "../screens/TorneoScreen";
import { screen } from "../utils/screenUtils";

const Stack = createNativeStackNavigator();


export function TorneoStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={ screen.torneos.torneos } component={ TorneoScreen } options={{ title: "Torneos"}} /> 
        </Stack.Navigator>

    
    );
}