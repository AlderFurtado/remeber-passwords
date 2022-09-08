import React, { useState } from 'react';
import { View,Text,Modal, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style"
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import MasterPasswordForm from '../../components/MasterPasswordForm';

export const MainScreen = () => {
  const [isVisibleMasterPasswordForm, setIsVisibleMasterPasswordForm] = useState(false)

  return (
  <LinearGradient   
    colors={["#5BD987","#2C6CBF"]}
    style={styles.container}>
        <View>
            <Logo/>
            <Text style={styles.text}>Locked Key</Text>
        </View>
        <MasterPasswordForm 
          isVisible={isVisibleMasterPasswordForm}
          setIsVisible={setIsVisibleMasterPasswordForm}
        />
        <Button onPress={() => setIsVisibleMasterPasswordForm(true)}/>
  </LinearGradient>);
}
