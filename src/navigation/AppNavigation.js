import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { Icon } from "react-native-elements";
import { RegistroEquiposStack } from "./RegistroEquiposStack";
import { CanchaStack } from "./CanchaStack";
import { OrganizarTorneosStack } from "./OrganizarTorneoStack";
import { PartidosStack } from "./PartidosStack"
import { TorneoStack } from "./TorneoStack";
import { ResultadosStack } from "./ResultadosStack";
import { screen } from "../utils/screenUtils";

const Tab = createBottomTabNavigator();

export function AppNavigation(){
    return(
        <Tab.Navigator 
        screenOptions={({ route }) =>({
                tabBarActiveTintColor:"#004AAD",
                tabBarInactiveTintColor:"#646464",
                headerShown: false,
                tabBarIcon: ({ color, size }) => screenOptions(route, color, size)
        })}
        
        >
            <Tab.Screen name={ screen.registrar.tab } component={ RegistroEquiposStack } options={{ title: "Equipos" }}/>
            <Tab.Screen name={ screen.organizar.tab } component={ OrganizarTorneosStack } options={{ title: "Organizar Torneos" }}/>
            <Tab.Screen name={ screen.torneos.tab } component={ TorneoStack } options={{ title: "Torneos" }}/>
            <Tab.Screen name={ screen.canchas.tab } component={ CanchaStack } options={{ title: "Canchas" }}/>
            <Tab.Screen name={ screen.partidos.tab } component={ PartidosStack } options={{ title: "Partidos" }}/>
            <Tab.Screen name={ screen.resultados.tab } component={ ResultadosStack } options={{ title: "Resultados Partidos" }}/>
           
        </Tab.Navigator>
    );
}

function screenOptions(route, color, size){
    let  iconName;

    if(route.name === screen.registrar.tab){
        iconName = "tshirt-v-outline";
    }

    if(route.name === screen.organizar.tab){
        iconName = "trophy-outline";
    }

    if(route.name === screen.torneos.tab){
        iconName = "tournament";
    }

    if(route.name === screen.canchas.tab){
        iconName = "soccer-field";
    }

    if(route.name === screen.partidos.tab){
        iconName = "soccer";
    }

    if(route.name === screen.resultados.tab){
        iconName = "scoreboard-outline";
    }

    return(
        <Icon 
        type="material-community" 
        name={iconName } 
        color={ color } 
        size={ size } 
    />
    )
}