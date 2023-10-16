import React from 'react';
import { ScrollView } from 'react-native';
import { Text, Button, Image} from "react-native-elements";
import { useNavigation } from '@react-navigation/native'; 
import { screen } from "../../../utils";
import { styles } from "./UserGuestScreen.styles";

export function UserGuestScreen() {

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.organizar.login);
  }
  
  return (
    <ScrollView centerContent={ true } style={ styles.content }>
      <Image source={ require( "../../../../assets/img/user-guest.png")} style={ styles.image } />


      <Text style={ styles.title }>Consultar tu perfi de Futbolito</Text>
      
        <Button title="Ver tu Perfil" onPress={ goToLogin } buttonStyle={ styles.buttonStyle }/>
      
    </ScrollView>
  )
}