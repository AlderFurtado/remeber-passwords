import React from 'react';
import { TextInput,View } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons'; 

const SearchBar = ({searchText,setSearchText}) => {
  return <View>
        <TextInput 
          style={styles.container}
          value={searchText}
          onChangeText={setSearchText}
        />
        <AntDesign name="search1" size={20} color="rgba(0,0,0,0.5)" style={styles.icon}/>

    </View>
}

export default SearchBar;