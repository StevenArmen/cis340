import React from 'react';
import { Text, TextInput, View } from 'react-native';

 function MyApp() {

  return (
    <View>

      <Text>
        
        Hello, This is a reactor test.
 

      </Text>
     
      </View>
  );
}

export default function MultiComp(){
  return(
    <View  style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      
    }}>
     
      <Text >
        Welcome to this Test 
      </Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />
     </View>
  )
}


