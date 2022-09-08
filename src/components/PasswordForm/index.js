import React, { forwardRef, useRef, useState } from 'react';
import { View, Modal, TextInput, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { saveNewPassword } from '../../repositories/Password';
import styles from './styles';

const PasswordForm = ({
  isVisible, 
  setIsVisible,
  passwords,
  setPasswords
}) => {
  const [tag, setTag] = useState("");
  const [password,setPassword] = useState("")

  const refTextInputPassword = useRef()

  const onHandleSubmit = async () => {
    const data = {tag,password}
    await saveNewPassword(data)
    setPasswords([...passwords, data])
    setIsVisible(false)
    setTag("")
    setPassword("")
  }

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
                style={[styles.input, {marginBottom: 16}]}
                placeholder={"Tag to remeber"}
                textAlign={"center"}
                onChangeText={setTag}
                value={tag}
                onSubmitEditing={() => {
                  refTextInputPassword?.current.focus()
                }}
            />
            <TextInput 
                ref={refTextInputPassword}
                style={styles.input}
                placeholder={"Password"}
                textAlign={"center"}
                secureTextEntry
                onChangeText={setPassword}
                value={password}
                onSubmitEditing={onHandleSubmit}
            />
          </View>
        </TouchableWithoutFeedback>
  </Modal>;
}

export default PasswordForm;

