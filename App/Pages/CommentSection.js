import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import CommentItem from '../Components/CommentItem';

export default function CommentSection() {
	// const state = useSelector(state => state.state);
	const [comment, setComment] = useState('');

	return (
		<View>
			<Text style={styles.commentTitle}>Comment</Text>

			{/* Comment body: */}
			<View  style={styles.container}>
				<View style={styles.containerInput}>
					<Image style={styles.avatar} source={require('./../Assets/Images/home-user.png')} />
					<TextInput 
						style={styles.input} 
						placeholder={'Add a comment...'}
						value={comment}
						onChangeText={setComment} />

					<TouchableOpacity style={styles.sendIcon} >
						<Ionicons name="send-sharp" size={26} color="black" />
					</TouchableOpacity>
				</View>
			</View>
			{/* End: Comment body */}

			{/* Comment Items: */}
			<CommentItem />
		</View>
	)
}

const styles = StyleSheet.create({
	commentTitle: {
		fontSize: 22,
		fontWeight: 'bold',
		marginTop: 18,
		marginBottom: 2,
	},
	container: {
		marginTop: 4,
		flex: 1,
		justifyContent: 'flex-start',
	},
	containerInput: {
		flexDirection: 'row',
		padding: 10,
		paddingLeft: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatar: {
		height: 44,
		width: 44,
	},
	input: {
		width: '82%',
		marginBottom: 8,
		borderBottomWidth: 1,
		padding: 6,
		marginRight: 8,
		marginLeft: 1,
		shadowOffset: {
			width: 0,
			height: 4,
		  },
		  shadowOpacity: 0.5, // Độ mờ của shadow
		  shadowRadius: 5, // Bán kính của shadow
		  elevation: 5, // Chỉ áp dụng cho Android, tạo shadow dựa trên elevation
	},
	sendIcon: {
		padding: 4,
	},
})