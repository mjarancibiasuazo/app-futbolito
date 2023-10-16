import React, { useState } from 'react';
import { View } from 'react-native';
import { InfoUser,  AccountOptions } from "../../../components/account";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { styles } from "./UserLoggedScreen.styles";


export function UserLoggedScreen() {

  const [ reload, setReload ] = useState(false)

  const onReload = () => setReload(( prevState ) => !prevState);

  const logout = async () => {
   const auth = getAuth();
   await signOut(auth);
  
  };
  

  return (
    <View>
      <InfoUser />

      <AccountOptions onReload={ onReload } />

      <Button 
      title="Cerrar Sesión" 
      buttonStyle={ styles.btnStyles } 
      titleStyle={ styles.btnTextStyle }
      onPress={ logout }
      
      />
    </View>
  )
} 