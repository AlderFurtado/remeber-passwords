import React, { useEffect, useState } from 'react';
import { AsyncStorage, FlatList, SafeAreaView, View } from 'react-native';
import { Card } from '../../components/Card';
import FloatingButton from '../../components/FloatingButton';
import PasswordForm from '../../components/PasswordForm';
import SearchBar from '../../components/SearchBar';
import { getPasswords } from '../../repositories/Password';

export const PasswordsListScreen = () => {

  const [isVisibleForm,setIsVisibleForm] = useState(false)
  const [searchText,setSearchText] = useState("")
  const [passwords,setPasswords] = useState([])

  const _getPassword = () => {
    getPasswords()
      .then((data) => setPasswords(data))
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    _getPassword()
  },[])

  let passwordsFiltered = passwords.filter(password => password.tag.toLowerCase().includes(searchText.toLowerCase())) || []

  return <SafeAreaView style={{marginHorizontal:16, marginTop: 8, flex:1}}>
    <SearchBar 
      searchText={searchText}
      setSearchText={setSearchText}  
    />
    <FlatList
        showsVerticalScrollIndicator={false}
        data={passwordsFiltered}
        renderItem={({item}) => {
            return (<Card tag={item.tag} password={item.password}/>)
        }}
        contentContainerStyle={{
            marginTop:16,
            paddingBottom:32
        }}
        style={{
            marginBottom:0
        }}
        ItemSeparatorComponent={() => <View style={{height:16}}/>}
    />
    <FloatingButton onPress={() => {
      setIsVisibleForm(true)
    }}/>
    <PasswordForm 
      isVisible={isVisibleForm} 
      setIsVisible={setIsVisibleForm} 
      passwords={passwords}
      setPasswords={setPasswords}
    />
  </SafeAreaView>;
}
