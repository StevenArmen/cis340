
import {  Text, View, SectionList} from 'react-native';
import React from 'react';


export default StatesApp = () => {
  return(
    <View stile={{flex: 1, paddingTop: 22}}>
      <SectionList
        sections ={[
          {title: 'A', data: ['Alabama', 'Alaska', 'Arizona',]},
          {title: 'C',data : [ 'California', 'Colorado']},
          {title: 'D', data: ['Delaware']},
          {title: 'F', data: ['Florida']},
          {title: 'G', data: ['Georgia']},
          {title: 'H', data: ['Hawaii']},
       
          
        ]}// you can continue with more sections
        renderItem={({item}) => <Text style = {{padding:10, fontSize: 20, height: 44}}>{item} </Text> }
        renderSectionHeader={({section}) => <Text style = {{paddingTop: 4, paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#7FA2DC'}}>{section.title}</Text>} // set tittle
        keyExtractor = {(item, index) => index}
        />
        
            
    </View>
 
  );//end of return statement

}

    
  




