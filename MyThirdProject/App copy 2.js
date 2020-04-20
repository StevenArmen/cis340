import React from 'react';
import { Text, TextInput, View } from 'react-native';

 function Student(props) {
  return (
    <View>
      <Text>Hello, My name is {props.name}. I am a student</Text>
    </View>
  );
}

export default function MultiComp() {
  return( 
    <View  style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      
    }}>  
    <Text> Welcome to CIS340 </Text>
    <Student name = "Alice Jost"/>
    <Student name = "Cg Jund"/>
    <Student name = "Steven Arevalo"/>
    </View>

  );
}


