import React from 'react';
import { View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import styles from './styles';

const Logo = () => {
  return <View style={styles.container}>
        <Fontisto name="locked" size={60} color="white"/>
  </View>;
}

export default Logo;