import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { screen } from "../../utils/screenUtils";


export function RegistroEquipoScreen(props) {
  const { navigation } = props;
  
  const goToAddRegistro = () =>{
    navigation.navigate(screen.registrar.addRegistro);
    //si viajamos a otro stack
    //navigation.navigate(screen.account.tab, { screen: screen.account.account })
  }
  return (
    <View>
      <Text>Registro de Equipos</Text>
      <Button title="Crear Equipo" onPress={ goToAddRegistro } />
    </View>
  )
}