import axios from 'axios';
import { UserDataType } from '../../utility/types';
const serverUrl = import.meta.env.VITE_SERVER_PRODUCTION_URL;

// Function to make the GET request
export const findOrCreateUser = async (token: string): Promise<UserDataType> => {
  if (!serverUrl) {
    throw new Error('Server URL is not defined in the environment');
  }

  try {
    // Sending the POST request with Bearer token in Authorization header
    const response = await axios.post(
      `${serverUrl}/api/users/findOrCreate`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Return the response data
    return response.data.user;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error during POST request:', error);
    throw error;
  }
};