import React from 'react';
import { View } from 'react-native';
import { Text, ListItem, Icon } from "react-native-elements";
import { map } from "lodash";
import { Map } from "../../shared";
import { styles } from "./Info.styles";


export function Info(props) {
    
  const { detailTorneo } = props;
    
    const listInfo = [
      {
        text: detailTorneo.address,
        iconType: "material-community",
        iconName: "map-marker",
      },
      {
        text: detailTorneo.phone,
        iconType: "material-community",
        iconName: "phone",

      },
      {
        text: detailTorneo.email,
        iconType: "material-community",
        iconName: "at",

      },
    ];
  
    return (
      <View style={ styles.content }>
        <Text style={ styles.title }>Información sobre el Torneo</Text>
        <Map location={ detailTorneo.location } name={ detailTorneo.name }/>

        {map(listInfo, ( item, index ) => (
          <ListItem 
          key={ index } 
          bottomDivider>
            <Icon 
            type={ item.iconType } 
            name={ item.iconName } 
            color="#004AAD" />
            <ListItem.Content>
              <ListItem.Title>{ item.text }</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </View>
    );
  }
  