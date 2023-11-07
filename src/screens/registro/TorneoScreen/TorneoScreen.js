import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Icon  } from "react-native-elements";
import { screen, db } from "../../../utils";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { LoadingModal } from "../../../components/shared";
import { ListTorneos } from "../../../components/Torneos";
import { styles } from "./TorneoScreen.styles";


export function TorneoScreen( props ) {
  const { navigation } = props;
  const [ currentUser, setCurrenttUser ] = useState( null );
  const [ torneos, setTorneos] = useState( null );

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

  useEffect(() => {
    const q = query(
      collection(db, "torneos"),
      orderBy("createdAt", "desc")
    );
      
    onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      //console.log("torneos", data);
      setTorneos(data);
  
   });
    
  }, []);
  
  return (
    <View style={ styles.content }>
      { !torneos ? (
        <LoadingModal show text="Cargando"/>
      ): (
        
        <ListTorneos torneos={ torneos }/>
     

      )}
      
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
