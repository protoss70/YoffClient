import axios from "axios";
const serverUrl = import.meta.env.VITE_SERVER_PRODUCTION_URL;

// Function to make the DELETE request
export const deleteScheduledClass = async (
  scheduleId: string,
  token: string,
  userId: string,
  teacherId: string,
  userLocale: "en" | "tr"
): Promise<boolean> => {
  if (!serverUrl) {
    throw new Error('Server URL is not defined in the environment');
  }

  try {
    // Sending the DELETE request with Bearer token in Authorization header
    await axios.delete(
      `${serverUrl}/api/scheduleClasses/${scheduleId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          userId,      // Pass userId in the body
          teacherId,   // Pass teacherId in the body
          userLocale
        },
      }
    );

    console.log('Schedule deleted successfully');
    return true;
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error during DELETE request:', error);
    return false;
  }
};
