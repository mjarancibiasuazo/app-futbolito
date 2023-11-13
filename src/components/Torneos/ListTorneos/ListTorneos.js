import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./ListTorneos.styles";

export function ListTorneos(props) {
  
  const { torneos } = props;

  const navigation = useNavigation();

  const goToTorneo = ( torneo ) => {
    navigation.navigate( screen.torneos.detailTorneo, { id: torneo.id } );
  };

   
  return (
    <FlatList
      data={ torneos }
      renderItem={({ item }) => {
        // Accede a las propiedades de cada elemento en torneos
        const torneo = item;

        // Asegúrate de que torneo contenga datos válidos
        console.log("Veamos los datos del torneo", torneo);

        return (
          <TouchableOpacity onPress={() => goToTorneo( torneo )} style={ styles.canvas }>
            <View>
              <Image 
              source={{ uri: torneo.images[0]}} 
              style={ styles.image }
              />
            
            </View>
            <View>
              <Text style={ styles.name }>{ torneo.name }</Text>
              <Text style={ styles.info }>{ torneo.address }</Text> 
              <Text style={ styles.info }>{ torneo.description }</Text> 
            </View>
            
          </TouchableOpacity>
        );
      }}
    />
  );
}