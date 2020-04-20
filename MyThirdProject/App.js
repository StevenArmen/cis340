import React, {useState} from 'react';
import { Text, Button, View } from 'react-native';

function TV(props) {

  const [isOff, setIsOff] = useState(true);
return (
  <View>
    
    <Text>
    {"\n\n\n\n"}
      This is {props.name} TV, and it is {isOff ? "off" : "Turn Me on"}
    </Text>
    <Button
      onPress = {() =>{
        setIsOff(false);

      }}
      disabled = {!isOff}
      title = {isOff ? "Turn Me on" : "thank you!" }
    />

    </View>
);

}

export default function MultiTv() {
  return( 
   
    <View>
    < TV name = "LG"/>
    < TV name = "Sony"/>
    < TV name = "Toshiba"/>


    </View>

  );
}





