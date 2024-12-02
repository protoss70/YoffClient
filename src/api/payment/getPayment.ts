import axios from "axios";
import { ScheduledClassType } from "../../utility/types";
const serverUrl = import.meta.env.VITE_SERVER_PRODUCTION_URL;

// Function to make the GET request
export const sendPaymentProcessingRequest = async (id: string, token: string, plan: string): Promise<ScheduledClassType[]> => {
    if (!serverUrl) {
      throw new Error('Server URL is not defined in the environment');
    }
  
    try {
      // Sending the GET request with Bearer token in Authorization header
      const response = await axios.get(
        `${serverUrl}/api/payments/inform-support-payment?userId=${id}&plan=${encodeURIComponent(plan)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // Return the response data
      return response.data.scheduledClasses;
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error during GET request:', error);
      throw error;
    }
  };