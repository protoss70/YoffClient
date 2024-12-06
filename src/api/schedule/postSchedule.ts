import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_PRODUCTION_URL;

// Function to make the GET request
type PostScheduleReturn = {
  success: boolean,
  code: number
}

export const postScheduledClasses = async (date: string, teacherId: string, userId: string, language: string, token: string, isDemoClass: boolean = false, userLocale: "en" | "tr"): Promise<PostScheduleReturn> => {
  if (!serverUrl) {
    throw new Error('Server URL is not defined in the environment');
  }

  try {
    // Sending the POST request with Bearer token in Authorization header
    const response = await axios.post(
      `${serverUrl}/api/scheduleClasses?isDemoClass=${isDemoClass}`,
      {
        date: date,
        teacherId: teacherId,
        userId: userId,
        language: language,
        userLocale: userLocale
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Return the response data if the request is successful
    return {success: response.data.success, code: response.status};
  } catch (error: any) {
    // Handle any errors that occur during the request
    console.error('Error during POST request:', error);

    // Check if the error contains a response with status code
    const statusCode = error.response?.status || 500; // Default to 500 if status code is not available

    // Return the status code in the message part of the response
    return { success: false, code: statusCode };
  }
};