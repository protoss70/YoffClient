import React, { useState, useEffect, useCallback } from 'react';
import Popup from './sub-components/Popup';
import Notification from './sub-components/Notification';
import CreateFolder from './sub-components/CreateFolder';
import { 
  setupPopupEventListener, 
  handlePopupClose, 
  getDefaultPopupState,
  setupNotificationEventListener, 
  getDefaultNotificationState,
  setupCreateFolderListener,
} from './Modals_Util';

import { 
  PopupState,
  NotificationState,
} from '../../utility/types';

const Modals: React.FC = () => {
  const [popup, setPopup] = useState<PopupState>(getDefaultPopupState());
  const [notification, setNotification] = useState<NotificationState>(getDefaultNotificationState());
  const [createFolderModal, setCreateFolderModal] = useState({isVisible: false, callback: (folderName: string) => {console.log(folderName)}});

  // Memoize the showPopup function
  const showPopup = useCallback((title: string, text: string, buttons: PopupState['buttons'], callback?: (success: boolean) => void) => {
    setPopup({ isVisible: true, title, text, buttons, callback });
  }, []);

  // Memoize the showNotification function
  const showNotification = useCallback((title: string, text: string, type: NotificationState['type'], notification_time?: number) => {
    setNotification({ isVisible: true, title, text, type, notification_time });
  }, []);

   // Memoize the showPopup function
   const showCreateFolder = useCallback((callback: (folderName: string) => void) => {
    setCreateFolderModal({callback: callback, isVisible: true});
  }, []);

  const handleNotificationClose = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  // Setup popup, notification, and modal listeners
  useEffect(() => {
    const cleanupPopupListener = setupPopupEventListener(showPopup);
    const cleanupNotificationListener = setupNotificationEventListener(showNotification);
    const cleanupFolderListener = setupCreateFolderListener(showCreateFolder);

    return () => {
      cleanupPopupListener();
      cleanupNotificationListener();
      cleanupFolderListener();
    };
  }, [showPopup, showNotification, showCreateFolder]);

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

      <CreateFolder
        show={createFolderModal.isVisible}
        handleClose={() => setCreateFolderModal({...createFolderModal, isVisible: false})}
        handleCreate={(folderName: string) => {
          createFolderModal.callback(folderName)
        }}
      />
    </>
  );
};

export default Modals;
