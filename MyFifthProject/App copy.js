import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.yellow}> Open up App.js to start working on your app!</Text>
      <Text style = {[styles.yellow, styles.largGreen]}>Yellow Text, then Big Green Text</Text>
      <Text style = {styles.largGreen}> This is Big Green</Text>
      <Text style = {[ styles.largGreen, styles.yellow,]}>Yellow Text, then Big Green Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 68,
  },
  largGreen: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 30,

  },

  yellow: {
    color: 'yellow',
    fontSize: 20,
  }
});
