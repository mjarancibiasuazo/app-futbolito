import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CanchaScreen } from "../screens/CanchaScreen";
import { screen } from "../utils/screenUtils";

const Stack = createNativeStackNavigator();


export function CanchaStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={ screen.canchas.canchasPartidos } component={ CanchaScreen } options={{ title: "Canchas"}} /> 
        </Stack.Navigator>

    
    );
}