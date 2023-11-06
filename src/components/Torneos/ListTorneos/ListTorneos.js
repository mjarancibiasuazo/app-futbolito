import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";

export function ListTorneos(props) {
  const { torneos } = props;

  const goToTorneos = (torneo) => {
    console.log("Ir al Torneo Nuevo 123");
    if (torneo && torneo.address) {
      console.log(torneo.address);
    } else {
      console.log("Torneo o propiedad 'address' no definidos.");
    }
  }

  return (
    <View>
      <FlatList
        data={torneos}
        renderItem={({ item }) => {
          const torneo = item.torneos;

          return (
            <TouchableOpacity onPress={() => goToTorneos(torneo)}>
              <View>
                <View>
                  {torneo && torneo.address ? (
                    <Text>{torneo.address}</Text>
                  ) : (
                    <Text>Información de dirección no disponible</Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

    
  
