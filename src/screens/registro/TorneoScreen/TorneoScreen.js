import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon  } from "react-native-elements";
import { screen } from "../../../utils";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { styles } from "./TorneoScreen.styles";


export function TorneoScreen( props ) {
  const { navigation } = props;
  const [ currentUser, setCurrenttUser ] = useState( null );

  useEffect(( ) => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user ) => {
        setCurrenttUser( user );
      })
  }, []);

  const goToAddTorneo = () => {
    navigation.navigate( screen.torneos.tab, { 
      screen: screen.torneos.addTorneo,
    });
  };

  return (
    <View style={ styles.content }>
      <Text>Estamos en la Screen de Torneos</Text>

      { currentUser && (
      
      <Icon 
      reverse 
      type="material-community" 
      name="plus" 
      color="#004AAD" 
      containerStyle={ styles.btnContainer }
      onPress={ goToAddTorneo }
      
      />
      )}
    </View>
  )
}
