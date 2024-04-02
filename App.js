import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import Home from './App/Pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './App/Navigations/HomeNavigation';
import CourseDetails from './App/Pages/CourseDetails';
import CourseChapter from './App/Pages/CourseChapter';
import VideoPlayer from './App/Pages/VideoPlayer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseContent from './App/Pages/CourseContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from './App/Pages/Signup';

const Stack = createNativeStackNavigator();
export default function App() {
	const Drawer = createDrawerNavigator();
	return (
		<NavigationContainer>
			<HomeNavigation/>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
