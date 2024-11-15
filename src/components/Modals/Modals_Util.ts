import { 
    PopupState, 
    defaultNotificationState, 
    defaultPopupState, 
    NotificationState 
  } from "../../utility/types";
  
  export const getDefaultPopupState = (): PopupState => {
    return { ...defaultPopupState };
  };
  
  export const handlePopupCustomEvent = (event: CustomEvent, showPopup: (title: string, text: string, buttons: PopupState['buttons'], callback?: (success: boolean) => void, notification_time?: number) => void) => {
    if (event.detail) {
      const { title, text, buttons, callback, notification_time } = event.detail;
      showPopup(title, text, buttons, callback, notification_time);
    }
  };

  export const handleUploadFileCustomEvent = (event: CustomEvent, showUploadFile: (callback: (files: File[]) => void) => void) => {
    if (event.detail) {
      const { callback } = event.detail;
      showUploadFile(callback);
    }
  };

  export const handleScheduleClassModal = (event: CustomEvent, showCreateFolder: (
    callback: (language: string, isDemoClass: boolean) => Promise<boolean>, 
    name: string, 
    surname: string,
    languages: string[],
    date: string,
    teacherImage: string,
    isDemoCredit: boolean,) => void) => {
    if (event.detail) {
      const { callback, name, surname, languages, date, teacherImage, isDemoCredit } = event.detail;
      showCreateFolder(callback, name, surname, languages, date, teacherImage, isDemoCredit);
    }
  };
  
  export const setupPopupEventListener = (showPopup: (title: string, text: string, buttons: PopupState['buttons'], callback?: (success: boolean) => void, notification_time?: number) => void) => {
    const handleCustomEvent = (event: CustomEvent) => handlePopupCustomEvent(event, showPopup);
  
    window.addEventListener('showPopup', handleCustomEvent as EventListener);
  
    // Return cleanup function
    return () => {
      window.removeEventListener('showPopup', handleCustomEvent as EventListener);
    };
  };
  
  export const handlePopupClose = (setPopup: React.Dispatch<React.SetStateAction<PopupState>>, callback?: (success: boolean) => void) => (success: boolean) => {
    setPopup(prev => ({ ...prev, isVisible: false }));
    if (callback) {
      callback(success);
    }
  };
  
  export const getDefaultNotificationState = (): NotificationState => {
    return { ...defaultNotificationState };
  };
  
  export const handleNotificationCustomEvent = (event: CustomEvent, showNotification: (title: string, text: string, type: NotificationState['type'], notification_time?: number) => void) => {
    if (event.detail) {
      const { title, text, type, notification_time } = event.detail;
      showNotification(title, text, type, notification_time);
    }
  };
  
  export const setupNotificationEventListener = (showNotification: (title: string, text: string, type: NotificationState['type'], notification_time?: number) => void) => {
    const handleCustomEvent = (event: CustomEvent) => handleNotificationCustomEvent(event, showNotification);
  
    window.addEventListener('showNotification', handleCustomEvent as EventListener);
  
    // Return cleanup function
    return () => {
      window.removeEventListener('showNotification', handleCustomEvent as EventListener);
    };
  };


  export const setupUploadFileModalListener = (showUploadFile: (callback: (files: File[]) => void) => void) => {
    const handleCustomEvent = (event: CustomEvent) => handleUploadFileCustomEvent(event, showUploadFile);
  
    window.addEventListener('showUploadFile', handleCustomEvent as EventListener);
  
    // Return cleanup function
    return () => {
      window.removeEventListener('showUploadFile', handleCustomEvent as EventListener);
    };
  };

  export const setupCreateFolderListener = (showCreateFolder: (
    callback: (language: string, isDemoClass: boolean) => Promise<boolean>, 
    name: string, 
    surname: string,
    languages: string[],
    date: string,
    teacherImage: string,
    isDemoCredit: boolean,) => void) => {
    const handleCustomEvent = (event: CustomEvent) => handleScheduleClassModal(event, showCreateFolder);
  
    window.addEventListener('showCreateFolder', handleCustomEvent as EventListener);
  
    // Return cleanup function
    return () => {
      window.removeEventListener('showCreateFolder', handleCustomEvent as EventListener);
    };
  };