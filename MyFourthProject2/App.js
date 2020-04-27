
import {  Text, Image, ScrollView} from 'react-native';
import React from 'react';

const dog = {
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pudel_Grossschwarz.jpg/220px-Pudel_Grossschwarz.jpg" ,
  width: 64,
  height: 64
};

export default MyScrollViewApp = () => (

    <ScrollView style = {{padding: 40}}>
      <Text style={{fontSize: 40}}>Try to Scroll Down</Text>
      <Image source={require('./assets/dog.jpg')} style = {{width: 80, height: 80}} />
      <Image source={require('./assets/dog.jpg')} style = {{width: 64, height: 64}} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}>Try to Scroll Down again</Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style ={{fontSize: 80}}>Try to Scroll Down again</Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style= {{fontSize: 80}}>Try to Scroll Down again</Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />

    </ScrollView>
  
);



