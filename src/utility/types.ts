export interface Teacher {
    name: string;
    surname: string;
    _id: string
    origin: string;
    hobbies: string[];
    bio: string;
    languages: string[];
    scheduleDates: string[];
    occupiedClassDates: {date: string}[];
}

export const pricingPlans = {
  basic: {
    name: 'Basic',
    price: 45,
    perClass: 11.25,
    amountOfClasses: 4
  },
  premium: {
    name: 'Premium',
    price: 90,
    perClass: 9,
    amountOfClasses: 10
  },
  ultimate: {
    name: 'Ultimate',
    price: 170,
    perClass: 7,
    amountOfClasses: 24
  }
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

  export type TeacherCardDisplay = {
    name: string,
    surname: string,
    origin: string,
    country: string,
    hobbies: string[],
    languages: string[],
    _id: string,
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