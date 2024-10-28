import React, { useEffect } from 'react';

interface NotificationProps {
  title: string;
  text: string;
  type: 'info' | 'danger' | 'success' | 'primary' | 'secondary';
  isVisible: boolean;
  onClose: () => void;
  notification_time?: number;
}

const Notification: React.FC<NotificationProps> = ({
  title,
  text,
  type,
  isVisible,
  onClose,
  notification_time = 2000,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, notification_time); // Dismiss after the specified time
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [isVisible, onClose, notification_time]);

  const typeClasses = {
    info: 'bg-blue-100 text-blue-800',
    danger: 'bg-red-100 text-red-800',
    success: 'bg-green-100 text-green-800',
    primary: 'bg-indigo-100 text-indigo-800',
    secondary: 'bg-gray-100 text-gray-800',
  };

  return (
    <div
      className={`fixed right-1/2 translate-x-1/2 z-50 min-w-[500px] p-4 rounded-lg shadow-lg transition-all duration-500 ease-in-out ${
        isVisible ? 'top-28 opacity-100' : 'top-[-100px] opacity-0'
      } ${typeClasses[type]}`}
    >
      <h2 className="font-semibold">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Notification;
