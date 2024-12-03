import axios from 'axios';
const serverUrl = import.meta.env.VITE_SERVER_PRODUCTION_URL;
import { Teacher, TeacherCardDisplay } from '../../utility/types';

// Function to make the GET request
export const getTeacherCards = async (count: number = 8, random:boolean = false): Promise<TeacherCardDisplay[]> => {
  if (!serverUrl) {
    throw new Error('Server URL is not defined in the environment');
  }
  const randomInt = random ? "1" : "0"
  try {
    // Sending the POST request with Bearer token in Authorization header and timezone in the body
    const response = await axios.get(`${serverUrl}/api/teachers/cards?count=${count}&random=${randomInt}`);
    // Return the response data
    return response.data;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error during GET request:', error);
    throw error;
  }
};

export const getTeacher = async (_id: string): Promise<Teacher> => {
  if (!serverUrl) {
    throw new Error('Server URL is not defined in the environment');
  }

  try {
    // Sending the POST request with Bearer token in Authorization header and timezone in the body
    const response = await axios.get(`${serverUrl}/api/teachers/${_id}`);
    // Return the response data
    return response.data;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error during GET request:', error);
    throw error;
  }
}