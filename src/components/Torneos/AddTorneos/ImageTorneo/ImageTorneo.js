import React from 'react';
import { View } from 'react-native';
import { Image } from "react-native-elements";
import { styles } from "./ImageTorneo.styles";


export function ImageTorneo( props ) {
    const { formik } = props;

    const primaryImage = formik.values.images[0];
    console.log( primaryImage );

  return (
    <View style={ styles.content }>
      <Image 
        source={ 
            primaryImage 
            ? { uri: primaryImage } 
            : require( "./../../../../../assets/img/image-not-found.png" ) 
        }
        style={ styles.image }
      />
    </View>
  );
}