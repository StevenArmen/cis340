import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "http://logosandbrands.directory/wp-content/themes/directorypress/thumbs/Colorado-State-University-logo.jpg",
   
  };

  return (
    <View style={styles.container}>
     <ImageBackground source = {csuLogo}
     style = {styles.image}>
       <Text style = {styles.text}>
        CSU Logo
       </Text>
     </ImageBackground>
      

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: "row",

  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  
  text: {
    color: "black",
    fontSize: 40,
    fontWeight: 'bold'
    

  },

  
});
