import axios from "axios";
import { UserDataType } from "../../utility/types";
const serverUrl = import.meta.env.VITE_SERVER_PRODUCTION_URL;

export const sendContactUsMessage = async (email: string, fullName: string, message: string) => {
    try {
      const response = await axios.post(`${serverUrl}/api/messages/contact-us`, {
        email,
        fullName,
        message,
      });
      console.log("Message sent successfully:", response.data);
      return response.data
    } catch (error) {
      console.error("Error sending contact us message:", error);
      return null;
    }
  };

export const sendMessageToTeacher = async (message: string, teacherID: string, token: string, userData: UserDataType) => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/messages/message-teacher`,
        {
          message,
          teacherID,
          userId: userData._id
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization token for the user
          },
        }
      );
      console.log("Message sent to teacher successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error sending message to teacher:", error);
      return null
    }
  };