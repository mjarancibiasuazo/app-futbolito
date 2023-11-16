import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from "react-native-elements";
import { useFormik } from 'formik';
import uuid from 'react-native-uuid';
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { initailValues, validationSchema } from "./AddTorneoScreen.data";
import { db } from "../../../utils";
import { InfoForm, UploadImagesForm, ImageTorneo } from "../../../components/Torneos/AddTorneos";
import Toast from "react-native-toast-message";
import { styles } from "./AddTorneoScreen.styles";


export function AddTorneoScreen() {

  const navigation = useNavigation();

  const formik = useFormik({

    initialValues: initailValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    
    onSubmit: async ( formValue ) => {
      try {
        const newData = formValue;
        newData.id = uuid.v4();
        newData.createdAt = new Date();

       await setDoc( doc(db, "torneos", newData.id ), newData);
        
        Toast.show({
          type: "success",
          position: "top",
          text1: "Torneo creado con éxito",
        });

        navigation.goBack();

      } catch (error) {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Error al crear el torneo",
        });
        console.log( error );
      }
    },

  });
  return (
    <ScrollView showsVerticalScrollIndicator={ false }>

       <ImageTorneo formik={ formik } />
       
       <InfoForm formik={ formik }/>

       <UploadImagesForm formik={ formik } />

    <Button 
      title="Crear Torneo" 
      buttonStyle={ styles.AddTorneo } 
      onPress={ formik.handleSubmit }
      loading={ formik.isSubmitting }
      />
      
    </ScrollView>
  )
}

