import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

const Container = (props) => {
  return <View style={{backgroundColor:props.color, width:200, height:200}}/>;
}

export default Container;