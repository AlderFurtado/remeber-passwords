import React, { forwardRef, useState } from 'react';
import { View, Modal, TextInput, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

const MasterPasswordForm = ({isVisible, setIsVisible}) => {
  const navigation = useNavigation();

  return <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      >
        <TouchableWithoutFeedback 
          onPress={() => setIsVisible(false)}
        >
          <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder={"Master Password"}
                textAlign={"center"}
                secureTextEntry
                onSubmitEditing={() => 
                {
                  setIsVisible(false)
                  navigation.reset({
                  index: 0,
                  routes: [{ name: 'PasswordsListScreen' }],
                })
              }
              }
            />
          </View>
        </TouchableWithoutFeedback>
  </Modal>;
}

export default MasterPasswordForm;

