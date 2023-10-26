import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TorneoScreen } from "../screens/registro/TorneoScreen";
import {  AddTorneoScreen } from "../screens/registro/AddTorneoScreen";
import { screen } from "../utils/screenUtils";

const Stack = createNativeStackNavigator();


export function TorneoStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name={ screen.torneos.torneo } 
            component={ TorneoScreen } 
            options={{ title: "Torneos"}} 
            /> 

        <Stack.Screen 
            name={ screen.torneos.addTorneo } 
            component={ AddTorneoScreen } 
            options={{ title: "Nuevo Torneo" }} 
            /> 
        </Stack.Navigator>

    
    );
}

