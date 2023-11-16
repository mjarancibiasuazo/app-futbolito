import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from "react-native-elements";
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../utils';
import { Carousel } from '../../../components/shared';
import { Header, Info } from '../../../components/Torneo';
import { styles } from "./DetailTorneoScreen.styles";

//import { ScrollView } from 'react-native-web';
//const { width } = Dimensions.get( "window" );

export function DetailTorneoScreen(props) {
  const { route } = props;
  const [detailTorneo, setDetailTorneo] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'torneos', route.params.id), (doc) => {
      // Verificar si el documento existe antes de intentar acceder a sus datos
      if (doc.exists()) {
        setDetailTorneo(doc.data());
      } else {
        // Manejar el caso donde el documento no existe
        console.error('El documento no existe');
      }
    });

    // Devolver una función de limpieza para evitar suscripciones múltiples
    return () => unsubscribe();
  }, [route.params.id]);

  return (
    <ScrollView style={styles.content}>
      {/* Verificar si detailTorneo es null antes de acceder a sus propiedades */}
      {detailTorneo && (
        <>
        
         <Carousel 
            arrayImages={ detailTorneo.images } 
            height={ 250 } 
            width={ 250 } 
          />   
            <Header 
              detailTorneo={ detailTorneo } 
            /> 

            <Info 
              detailTorneo={ detailTorneo} 
            />
          
          <Button 
            title="Registrar Equipo"
            containerStyle={ styles.btnContainer } 
            buttonStyle={ styles.btn }
         
         />
           
        </>  
      )}
     
    </ScrollView>
  );
}
