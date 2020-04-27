import {  Text, TextInput, View } from 'react-native';
import React, { Component, useState } from 'react';

export default function WordConverter() {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 40}}>
    <TextInput
    style={{height: 40}}
      placeholder = "Input text here!"
      onChangeText={text => setText(text)}
      defaultValue={text}
  
    />

    <Text style={{padding: 10, fontSize: 42}}>
      {text.split(' ').map((word) => word && '*').join(' ')}
      </Text>


    </View>
  );
}

