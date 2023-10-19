import React, { useState } from 'react';
import { View } from 'react-native';
import { InfoUser,  AccountOptions } from "../../../components/account";
import { Button } from "react-native-elements";
import { LoadingModal } from "../../../components";
import { getAuth, signOut } from "firebase/auth";
import { styles } from "./UserLoggedScreen.styles";


export function UserLoggedScreen() {

  const [ loading, setLoading ] = useState(false)

  const [ loadingText, setLoadingText] = useState("")
  
  const [ reload, setReload ] = useState(false)

  const onReload = () => setReload(( prevState ) => !prevState);

  const logout = async () => {
   const auth = getAuth();
   await signOut(auth);
  
  };
  

  return (
    <View>
      <InfoUser setLoading={ setLoading } setLoadingText= { setLoadingText }/>

      <AccountOptions onReload={ onReload } />

      <Button 
      title="Cerrar Sesión" 
      buttonStyle={ styles.btnStyles } 
      titleStyle={ styles.btnTextStyle }
      onPress={ logout }
      
      />

      <LoadingModal show={ loading } text={ loadingText }/>
    </View>
  )
} 