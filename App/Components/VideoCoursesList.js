import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { api, endpoints } from '../Shared/GlobalApi';
import axios from "axios";



export default function VideoCoursesList({}) {
	const navigation=useNavigation();
	const [samSung, setSamSung] = useState(null);

	const callAPI = async()=> {
		try {
			let myCourses = await axios.get(endpoints['courses'])
			// console.log(myCourses.data)

			setSamSung(myCourses.data.results)
			console.log(myCourses.data)

		} catch (error) {
			console.log(error)
		}
	}
	useEffect(()=> {
		callAPI();
	},[])

  return (
    <View style={styles.container}>
		<Text style={styles.courseText}>Video Courses</Text>
		<ScrollView horizontal={true}>

			{/* <TouchableOpacity onPress={()=>navigation.navigate('video-player')}>
				<Image 
					style={styles.imgCourse} 
					source={require('./../Assets/Images/course2.png')}/>
			</TouchableOpacity> */}

			{/* {samSung.map(s => {
				return (
					<View>
						<Text>{s.id}</Text>
					</View>
				)
			})} */}
			{samSung === null ? (
            <ActivityIndicator />
          		) : (
					samSung.map(s => {
						return (
							<TouchableOpacity key={s.id} onPress={()=>navigation.navigate('course-detail', {videoCourse: s})}>
								<Image 
									style={styles.imgCourse} 
									source={{uri:s.image_url}}/>
							</TouchableOpacity>
						)
					})
				) }
			
			
		</ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 28,
    },
    courseText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    imgCourse: {
      width: 180,
      height: 100,
      borderRadius: 8,
      marginRight: 10,
    },
})