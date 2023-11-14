import React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./Header.styles";


export function Header( props ) {

  const { detailTorneo } = props;
  console.log(detailTorneo);

  return (
    <View style={ styles.content }>
      <View style= { styles.titleView }>
       <Text style={ styles.name }>{ detailTorneo.name }</Text>
      </View>
      <Text style={ styles.description }>{ detailTorneo.description }</Text>
      
    </View>
  )
}