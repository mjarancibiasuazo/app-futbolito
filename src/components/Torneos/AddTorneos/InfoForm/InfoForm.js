import React, { useState } from 'react'
import { styles } from "./InfoForm.styles";
import { Input } from "react-native-elements";
//import DateTimePicker  from '@react-native-community/datetimepicker';
import { View, Text } from 'react-native';
import { MapForm } from '../MapForm';
//import moment from 'moment';
//import 'moment/locale/es'; 


export function InfoForm( props ) {
    const { formik } = props;

    const [ showMap, setShowMap ] = useState( false );
   
    const onOpenCloseMap = () => setShowMap((prevState) => !prevState );

  return (
    <>
    <View style={ styles.content }>
      <Input 
      placeholder="Nombre del Torneo" 
      onChangeText={(text) => formik.setFieldValue( "name", text) }
      errorMessage={ formik.errors.name }
      />
      
      <Input 
      placeholder="Dirección del Torneo"
      rightIcon={{
        type: "material-community",
        name: "map-marker-radius",
        color: getColorIconMap( formik ),
        onPress: onOpenCloseMap,
      }}
      onChangeText={(text) => formik.setFieldValue( "address", text) }
      errorMessage={ formik.errors.address}
      />

      <Input 
      placeholder="Telefono"
      onChangeText={(text) => formik.setFieldValue( "phone", text) }
      errorMessage={ formik.errors.phone }
      />
      
      <Input 
      placeholder="Email Organizador"
      onChangeText={(text) => formik.setFieldValue( "email", text) }
      errorMessage={ formik.errors.email }
      />

      <Input 
      placeholder="Descripcón del torneo" 
      multiline={ true }
      inputContainerStyle={ styles.textArea }
      onChangeText={(text) => formik.setFieldValue( "description", text) }
      errorMessage={ formik.errors.description }
      
      />
    </View>

    <MapForm show={ showMap } close={ onOpenCloseMap } formik={ formik } />
    
    </>
  );
}

const getColorIconMap = ( formik ) => {
  if( formik.errors.location ) return "#ff0000";

  if( formik.values.location ) return "#004AAD";

  return "#c2c2c2";

};