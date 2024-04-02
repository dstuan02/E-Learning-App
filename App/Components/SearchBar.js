import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import Colors from '../Shared/Colors';

export default function SearchBar() {
  return (
    <View style={styles.container}>
        <Feather name="search" size={24} color={Colors.gray} style={{marginRight: 10}}/>
        <TextInput placeholder='Search'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        elevation: 2,
        marginTop: 10,
        alignItems: 'center',
    },
})