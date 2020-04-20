import React from 'react';
import { Text, Image, View } from 'react-native';

export default function MyDog() {
  return (
    <View>
     <Image source = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pudel_Grossschwarz.jpg/220px-Pudel_Grossschwarz.jpg"
     style ={{
       width:200,
       height: 200,

     }}
     />
      <Text>  This is a dog </Text>
    </View>
  );
}




