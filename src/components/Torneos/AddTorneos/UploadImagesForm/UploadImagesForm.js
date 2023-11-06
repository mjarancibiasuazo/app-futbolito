import React, { useState } from 'react';
import { View, Alert, ScrollView } from 'react-native';
import { Icon, Avatar, Text } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { LoadingModal } from "../../../shared";
import { map, filter } from "lodash";
//import { v4 as uuid } from "uuid";
import uuid from 'react-native-uuid';
import { styles } from "./UploadImagesForm.styles";
//import { getLocaleDirection } from 'react-native-web/dist/cjs/modules/useLocale';


export function UploadImagesForm( props ) {
  const { formik } = props;

  const [ isLoading, setIsLoading ] = useState(false);

  const openGallery = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.All,
        aspect: [4, 1],
        quality: 1,

      });

    if (!result.canceled) {
      setIsLoading(true);
      uploadImage(result.uri);
    }
  };

  const uploadImage = async ( uri ) => {
    try {
      const response = await fetch( uri );
      const blob = await response.blob();
  
      const storage = getStorage();
      const storageRef = ref(storage, `torneos/${uuid.v4()}`);

      uploadBytes( storageRef, blob ).then(( snapshot ) => {
      updateLogoTorneo(snapshot.metadata.fullPath);
      });
      
    } catch (error) {
      console.error("Error al cargar la imagen:", error);
    }
  };
  
  
  const updateLogoTorneo = async (imagePath) => {
    try {
      const storage = getStorage();
      const imageRef = ref(storage, imagePath);
  
      const imageUrl = await getDownloadURL(imageRef);
      
      formik.setFieldValue("images", [...formik.values.images, imageUrl]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error al actualizar la imagen del torneo:", error);
    }
  };

  const removeImage = ( img ) => {
    Alert.alert(
      "Eliminar imagen",
      "¿Estás seguro de eliminar esta imagen",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Eliminar",
          onPress: () => {
            const result = filter( 
              formik.values.images, 
              ( image ) => image !== img 
            );
            formik.setFieldValue("images", result);
          },
        },
      ], 
      { cancelable: false }
    )
  }
  
  return (
    <>
      <ScrollView 
      style={ styles.viewImage } 
      horizontal
      showsHorizontalScrollIndicator={ false }
      >
        <Icon 
        type="material-community" 
        name="camera" 
        color="black" 
        containerStyle={ styles.containerIcon } 
        onPress={ openGallery }
        
        />

        { map(formik.values.images, ( image ) => (

            <Avatar
              key={ image }
              source={{ uri: image }}
              containerStyle={ styles.imageStyle }
              onPress={() => removeImage( image )}
            />
        ))}
      </ScrollView>
      <Text style={ styles.error }>{ formik.errors.images }</Text>
      <LoadingModal show={ isLoading } text="Subiendo imagen"/>
    </>
  );
}