import React, { useState, useEffect} from 'react';
import { ScrollView, View, Text } from 'react-native';
import { doc, onSnapshot, collection, query, where, orderBy } from "firebase/firestore";
import { db } from "../../../utils";
import { Carousel } from "../../../components/shared/Carousel/Carousel";
import { styles } from "./DetailTorneoScreen.styles";

/*const { width } = Dimensions.get( "window" );*/

export function DetailTorneoScreen( props ) {
  
  const { route } = props;
  console.log( route.params );
  
return (
  <View>
    <Text>Torneo detalle </Text>
  </View>
)
}