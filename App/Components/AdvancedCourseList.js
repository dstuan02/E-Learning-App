import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import Colors from '../Shared/Colors'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react';
import { api, endpoints } from '../Shared/GlobalApi';
import axios from "axios";



export default function AdvancedCourseList() {
	const navigation=useNavigation();
	const [samSung, setSamSung] = useState(null);

	const callAPI = async()=> {
		try {
			let myCourses = await axios.get(endpoints['courses'])
			// console.log(endpoints['courses'])

			setSamSung(myCourses.data.results)
			// console.log(myCourses.data)

		} catch (error) {
			console.log(error)
		}
	}
	useEffect(()=> {
		callAPI();
	},[])
  return (
    <View style={styles.container}>
		<Text style={styles.courseText}>Advanced Courses</Text>
		<ScrollView horizontal={true}>
			{/* <TouchableOpacity 
				style={{display: 'flex', flexDirection: 'column', marginRight: 10}}
				onPress={() => navigation.navigate('course-detail', {})}>
				<View style={{backgroundColor: '#fff'}}>
					<Image 
						style={styles.imgCourse} 
						source={require('./../Assets/Images/basic1.png')}/>
				</View>
				<View style={{padding: 10, backgroundColor: '#ffff', borderBottomLeftRadius: 8, borderBottomRightRadius: 8,}}>
					<Text style={styles.nameCourse}>Basic of Python</Text>
					<Text style={styles.lessonCourse}>15 Lessons</Text>
				</View>
			</TouchableOpacity> */}
			{samSung === null ? (
            <ActivityIndicator />
          		) : (
					samSung.map(s => {
						return (
							<TouchableOpacity key={s.id} onPress={()=>navigation.navigate('course-detail', {videoCourse: s})}>
								<Image 
									style={styles.imgCourse} 
									source={{uri:s.image_url}}/>
								<View style={{marginRight: 10 ,padding: 10, backgroundColor: '#fff', borderBottomLeftRadius: 8, borderBottomRightRadius: 8,}}>
									<Text style={styles.nameCourse}>{s.subject}</Text>
									<Text style={styles.lessonCourse}>15 Lessons</Text>
								</View>

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
		marginRight: 10,
		width: 180,
		height: 120,
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
		// resizeMode: 'contain',
	  },
	  nameCourse: {
		fontSize: 16,
		fontWeight: 'bold',
		paddingTop: 2,
		paddingBottom: 2,
	  },
	  lessonCourse: {
		color: Colors.gray,
	  }
})