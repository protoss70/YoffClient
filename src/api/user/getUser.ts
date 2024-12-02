import axios from 'axios';
import { UserDataType, GMTOffset } from '../../utility/types';

const serverUrl = import.meta.env.VITE_SERVER_PRODUCTION_URL;

// Function to make the GET request
export const findOrCreateUser = async (
  token: string, 
  timezone: GMTOffset, 
  name?: string, 
  surname?: string
): Promise<UserDataType> => {
  if (!serverUrl) {
    throw new Error('Server URL is not defined in the environment');
  }

  try {
    // Combine name and surname into a single fullName if both exist
    const fullName = name && surname ? `${name} ${surname}` : undefined;

    // Prepare the body object, including fullName if it exists
    const body: Record<string, string> = { timezone };

    if (fullName) {
      body.fullName = fullName;
    }

    // Sending the POST request with Bearer token in Authorization header and body containing timezone and fullName
    const response = await axios.post(
      `${serverUrl}/api/users/findOrCreate`,
      body,  // Send the full body with timezone and optionally fullName
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
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