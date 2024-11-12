export interface Teacher {
    image: string;              // Assuming 'image' is a string (e.g., a URL or path to the image)
    name: string;               // Name of the teacher
    country: string;            // Country of the teacher
    hobbies: string[];          // Array of hobbies
    languages: string[];        // Array of languages
}

export interface LanguageCard {
    language: string;         // The name of the language
    teachersCount: number;    // The number of teachers for that language
    flagSrc: string;          // The source of the flag image
  }

  export interface ButtonConfig {
    text: string;
    type: 'info' | 'danger' | 'success' | 'primary' | 'secondary';
  }

  export interface NotificationState {
    title: string;
    text: string;
    type: 'info' | 'danger' | 'success' | 'primary' | 'secondary';
    notification_time?: number; // Optional time for notification display
    isVisible: boolean;
  }

  export const defaultPopupState: PopupState = {
    isVisible: false,
    title: '',
    text: '',
    buttons: {
      success: { text: 'Yes', type: 'primary' },
      cancel: { text: 'No', type: 'secondary' }
    },
    notification_time: 5000 // Default time for popup display
  };

  export const defaultNotificationState: NotificationState = {
    isVisible: false,
    title: '',
    text: '',
    type: 'success',
    notification_time: 2000 // Default time for notification display
  };

  export interface PopupState {
    isVisible: boolean;
    title: string;
    text: string;
    buttons: {
      success: ButtonConfig;
      cancel: ButtonConfig;
    };
    callback?: (success: boolean) => void; // Optional callback function
    notification_time?: number; // Optional time for popup display
  }

  export type UserDataType = {
    _id: string,
    email: string,
    credits: string,
    emailVerified: string,
    demoClass: string
  }

  export type ScheduledClassType = {
    _id: string,
    date: string,
    language: string,
    isDemoClass: boolean,
    teacherDetails: {
      name: string,
      surname: string,
      _id: string
    }
  }

  export type GMTOffset = 
  | "GMT+0"
  | "GMT+1"
  | "GMT+2"
  | "GMT+3"
  | "GMT+4"
  | "GMT+5"
  | "GMT+6"
  | "GMT+7"
  | "GMT+8"
  | "GMT+9"
  | "GMT+10"
  | "GMT+11"
  | "GMT+12"
  | "GMT+13"
  | "GMT+14";