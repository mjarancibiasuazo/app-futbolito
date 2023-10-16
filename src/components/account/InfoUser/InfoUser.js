import React from 'react';
import { View } from 'react-native';
import { Avatar, Text } from "react-native-elements";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from "expo-image-picker"; 
import { styles } from "./InfoUser.styles"


export function InfoUser() {

    const { uid, photoURL, displayName, email } = getAuth().currentUser
 
    const changeAvatar = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            //allowsEditing: true,
            aspect: [4, 3],
        });

        // if( !result.canceled ) uploadImage( result.uri );
        
    };

    /*  const uploadImage = async (uri) => {
     
      const response = await fetch(uri);
      const blob = await response.blob();
  
      const storage = getStorage();
      const storageRef = ref(storage, `images/${uid}/${new Date().getTime()}`);
  
      try {
        await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(storageRef);
        console.log('URL de descarga:', downloadURL);
      } catch (error) {
        console.error('Error al subir la imagen:', error);
      }
    };  */


  return (
    <View style={ styles.content }>
      <Avatar 
      size="large"
      rounded
      containerStyle={ styles.avatar }
      icon={{ type: "material-community", name: "account" }}
      //source={ { uri: photoURL }}
      >
        <Avatar.Accessory size={ 24 } />
      </Avatar>
      
      <View>
        <Text style={ styles.displayName }>{ displayName || "Anonimo" }</Text>
        <Text>{ email }</Text>
      </View>
    </View>
  )
}