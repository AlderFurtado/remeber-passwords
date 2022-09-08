import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import styles from './styles';

const FloatingButton = (props) => {
  return <TouchableOpacity {...props} activeOpacity={0.7} style={styles.container}>
    <AntDesign name="plus" size={24} color="white" />
  </TouchableOpacity>;
}

export default FloatingButton;