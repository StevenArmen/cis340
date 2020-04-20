import React, {useState} from 'react';
import { Text, Image, View } from 'react-native';

export default function MyDog() {
  let pic = {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pudel_Grossschwarz.jpg/220px-Pudel_Grossschwarz.jpg" }
  return (
    <View
    style ={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      
      

     }}
    >
     <Image source = {pic}
     style ={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
       width:200,
       height: 200,

     }}
     />
      <Text>  This is a dog! </Text>
    </View>
  );
}



