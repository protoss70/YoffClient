import React, { useState, useEffect, useCallback } from 'react';
import Popup from './sub-components/Popup';
import Notification from './sub-components/Notification';
import ScheduleClassModal from './sub-components/ScheduleClassModal';
import { 
  setupPopupEventListener, 
  handlePopupClose, 
  getDefaultPopupState,
  setupNotificationEventListener, 
  getDefaultNotificationState,
  setupCreateFolderListener as setupScheduleListener,
} from './Modals_Util';

import { 
  PopupState,
  NotificationState,
} from '../../utility/types';


const Modals: React.FC = () => {

  type scheduleModalType = {
    name: string,
    surname: string,
    isDemoCredit: boolean,
    date: string,
    isVisible: boolean,
    languages: string[],
    teacherImage: string,
    callback: (language: string, isDemoClass: boolean) => Promise<boolean>
  }
  const [popup, setPopup] = useState<PopupState>(getDefaultPopupState());
  const [notification, setNotification] = useState<NotificationState>(getDefaultNotificationState());
  const [ScheduleModal, setScheduleModal] = useState<scheduleModalType>(
    {
      isVisible: false, 
      date: "", 
      name: "", 
      surname: "", 
      teacherImage: "",
      isDemoCredit: true,
      languages: [""], 
      callback: async (language: string, isDemoClass: boolean) => {return language != isDemoClass.toString()}
    });

  // Memoize the showPopup function
  const showPopup = useCallback((title: string, text: string, buttons: PopupState['buttons'], callback?: (success: boolean) => void) => {
    setPopup({ isVisible: true, title, text, buttons, callback });
  }, []);

  // Memoize the showNotification function
  const showNotification = useCallback((title: string, text: string, type: NotificationState['type'], notification_time?: number) => {
    setNotification({ isVisible: true, title, text, type, notification_time });
  }, []);

   // Memoize the showPopup function
   const showSchedule = useCallback((callback: (language: string, isDemoClass: boolean) => Promise<boolean>, name: string, surname: string, languages: string[], date: string, teacherImage:string, isDemoCredit: boolean) => {
    setScheduleModal({callback: callback, isVisible: true, name, surname, date, languages, isDemoCredit, teacherImage});
  }, []);

  const handleNotificationClose = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  // Setup popup, notification, and modal listeners
  useEffect(() => {
    const cleanupPopupListener = setupPopupEventListener(showPopup);
    const cleanupNotificationListener = setupNotificationEventListener(showNotification);
    const cleanupFolderListener = setupScheduleListener(showSchedule);

    return () => {
      cleanupPopupListener();
      cleanupNotificationListener();
      cleanupFolderListener();
    };
  }, [showPopup, showNotification, showSchedule]);

  return (
    <>
      {/* Popup component */}
      <Popup 
        title={popup.title}
        text={popup.text}
        buttons={popup.buttons}
        onClose={handlePopupClose(setPopup, popup.callback)}
        isVisible={popup.isVisible}
      />

      {/* Notification component */}
      <Notification
        title={notification.title}
        text={notification.text}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={handleNotificationClose}
        notification_time={notification.notification_time}
      />

      <ScheduleClassModal
        show={ScheduleModal.isVisible}
        name={ScheduleModal.name}
        surname={ScheduleModal.surname}
        teacherImageSrc={ScheduleModal.teacherImage}
        languages={ScheduleModal.languages}
        isDemoCredit={ScheduleModal.isDemoCredit}
        date={ScheduleModal.date}
        handleClose={() => setScheduleModal({...ScheduleModal, isVisible: false})}
        handleSchedule={(language: string, isDemoClass: boolean) => {
          return ScheduleModal.callback(language, isDemoClass);
        }}
      />
    </>
  );
};

export default Modals;
