import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeHeader() {
	const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.helloText}>Hello</Text>
            <Text style={styles.nameText}>Tuan Dang</Text>
        </View>
        <TouchableOpacity style={styles.imgContainer} onPress={()=>navigation.push('Logout')}>
            <Image style={styles.imgUser} source={require('./../Assets/Images/home-user.png')}/>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        // backgroundColor: 'red',
    },
    imgContainer: {
        height: 62,
        width: 62,
    },
    imgUser: {
        height: '100%',
        width: '100%',
    },
    helloText: {
        fontSize: 18,
    },
    nameText: {
        fontSize: 22,
        fontWeight: 'bold',
    },


})