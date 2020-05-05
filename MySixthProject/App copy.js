import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "http://logosandbrands.directory/wp-content/themes/directorypress/thumbs/Colorado-State-University-logo.jpg",
   
  };

  return (
    <View style={styles.container}>
      <Image
        style = {styles.localCSULogo}
        source = {require('./assets/ram.png')}

      />

<Image
        style = {styles.urlCSULogo}
        source = {{
          uri:
           "http://logosandbrands.directory/wp-content/themes/directorypress/thumbs/Colorado-State-University-logo.jpg"
        
        }}

      />
    <Image 
    style = {styles.stretchLogo}
    source={csuLogo} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 50,

  },

  localCSULogo: {
    width: 55,
    height: 65
  },
  urlCSULogo: {
    width: 55,
    height: 55
    

  },

  stretchLogo: {
   
    height: 200,
    resizeMode: 'center'

  }
});
