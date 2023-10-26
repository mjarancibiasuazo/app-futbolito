import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { Icon } from "react-native-elements";
import { CanchaStack } from "./CanchaStack";
import { AccountStack } from "./AccountStack";
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
            <Tab.Screen 
            name={ screen.account.tab } 
            component={ AccountStack } 
            options={{ title: "Cuenta" }}
            />

            <Tab.Screen 
            name={ screen.torneos.tab } 
            component={ TorneoStack } 
            options={{ title: "Torneos" }}
            />

            <Tab.Screen 
            name={ screen.canchas.tab } 
            component={ CanchaStack } 
            options={{ title: "Canchas" }}
            />

            <Tab.Screen 
            name={ screen.partidos.tab } 
            component={ PartidosStack } 
            options={{ title: "Partidos" }}
            />

            <Tab.Screen 
            name={ screen.resultados.tab } 
            component={ ResultadosStack } 
            options={{ title: "Resultados" }}
            />
           
        </Tab.Navigator>
    );
}

function screenOptions(route, color, size){
    let  iconName;

    
    if(route.name === screen.account.tab){
        iconName = "account";
    }

    if(route.name === screen.torneos.tab){
        iconName = "trophy-outline";
    }

    if(route.name === screen.canchas.tab){
        iconName = "soccer-field";
    }

    if(route.name === screen.partidos.tab){
        iconName = "tournament";
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