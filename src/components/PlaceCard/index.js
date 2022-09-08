import React from 'react';
import { View,Image } from 'react-native';

// import { Container } from './styles';

const PlaceCard = () => {
  return <View>
    <Image style={{width: 50, height:50, borderRadius:100}} source={require("../../../assets/favicon.png")}/>
  </View>;
}

export default PlaceCard;