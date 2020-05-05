import React from 'react';
import {  View } from 'react-native';

export default function App() {
  return (
    <View style = {{flex: 1, flexDirection: 'column', marginTop: 100}}>
      <View style = {{ width: 50, height: 50, backgroundColor: 'green'}}/>
        <View style = {{ width: 50, height: 50,backgroundColor: 'gray'}}/>
          <View style= {{ width: 50, height: 50, backgroundColor: 'steelblue'}}/> 
      
    </View>
    
  );
}



