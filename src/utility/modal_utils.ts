import { PopupState, NotificationState } from "./types";

export const createPopupEvent = (title: string, text: string, buttons: PopupState['buttons'], callback?: (success: boolean) => void) => {
    const showPopupEvent = new CustomEvent('showPopup', {
      detail: { title, text, buttons, callback }
    });
    window.dispatchEvent(showPopupEvent);
  };

export const createNotificationEvent = (title: string, text: string, type: NotificationState['type'], notification_time?: number) => {
    const showNotificationEvent = new CustomEvent('showNotification', {
      detail: { title, text, type, notification_time }
    });
    window.dispatchEvent(showNotificationEvent);
  };

export const createScheduleModalEvent = (
  callback: (language: string, isDemoClass: boolean) => Promise<boolean>, 
  name: string, 
  surname: string,
  languages: string[],
  date: string,
  teacherImage: string,
  isDemoCredit: boolean,
) => {
  const showCreateFolderModalEvent = new CustomEvent('showCreateFolder', { 
    detail: { callback, name, surname, languages, date, teacherImage, isDemoCredit } 
  });
  window.dispatchEvent(showCreateFolderModalEvent);
};
  