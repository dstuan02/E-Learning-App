import axios from "axios";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const SERVER_URL = 'http://192.168.2.133:8000';
const SERVER = "http://192.168.2.133:8000";
export const endpoints = {
    'login': `${SERVER_URL}/o/token/`,
    'register': `${SERVER_URL}/user/`,
    'current-user': `${SERVER_URL}/user/current_user/`,
    'categories': `${SERVER_URL}/get_categories/`,
    'courses': `${SERVER_URL}/get_course/`,
    'lessons': (courseId) => `${SERVER_URL}/get_course/${courseId}/lessons/`,
    'lesson-details': (lessonId) => `${SERVER_URL}/get_lesson/${lessonId}/`,
}

export const api = axios.create({
    baseURL: SERVER,
    headers: {
        //...
    }
})