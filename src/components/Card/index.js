import React, { useState } from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export const Card = ({tag,password}) => {
  const [isVisible, setIsVisible] = useState(false)
  return <View style={styles.container}>
    <View style={styles.containerText}>
        <Text style={styles.title}>{tag}</Text>
        <Text style={styles.subtitle}>{isVisible ? password : "xxxxxxxx"}</Text>
    </View>
    <TouchableOpacity onPress={() => setIsVisible((value) => !value)}>
      <Text style={styles.textDelete}>Mostrar</Text>
    </TouchableOpacity>
  </View>;
}