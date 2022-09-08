import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const Button = (props) => {
  return <TouchableOpacity style={styles.container} {...props}>
    <Text style={styles.text}>Add the master password</Text>
  </TouchableOpacity>;
}

export default Button;