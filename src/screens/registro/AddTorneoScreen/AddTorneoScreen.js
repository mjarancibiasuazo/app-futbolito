import React from 'react';
import { View, Text } from 'react-native';
import { Button } from "react-native-elements";
import { useFormik } from 'formik';
import { initailValues, validationSchema } from "./AddTorneoScreen.data";
import { InfoForm } from "../../../components/Torneos/AddTorneos";
import { styles } from "./AddTorneoScreen.styles";


export function AddTorneoScreen() {

  const formik = useFormik({
    initialValues: initailValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async ( formValue ) => {
      console.log( formValue );
    },

  });
  return (
    <View>
      <InfoForm formik={ formik }/>

      <Button 
      title="Crear Torneo" 
      buttonStyle={ styles.AddTorneo } 
      onPress={ formik.handleSubmit }
      loading={ formik.isSubmitting }
      />
    </View>
  )
}

