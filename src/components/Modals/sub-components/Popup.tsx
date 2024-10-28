import React from 'react';
import '../Modals.css';

// Define types for button props
interface ButtonProps {
  text: string;
  type: 'info' | 'danger' | 'success' | 'primary' | 'secondary';
}

// Define types for the Popup props
interface PopupProps {
  title: string;
  text: string;
  buttons: {
    success: ButtonProps;
    cancel: ButtonProps;
    // Add other buttons if needed
  };
  onClose: (success: boolean) => void;
  isVisible: boolean;
}

// Define the Popup component
const Popup: React.FC<PopupProps> = ({ title, text, buttons, onClose, isVisible }) => {
  // Destructure buttons
  const { cancel, success } = buttons;

  // Map button types to Tailwind CSS classes
  const typeClasses = {
    info: 'bg-info text-white',
    danger: 'bg-danger text-white',
    success: 'bg-success text-white',
    primary: 'bg-main text-white', // Assuming 'main' is your primary color
    secondary: 'bg-custom_gray text-white',
  };

  return (
    <div className={`popup-overlay ${isVisible ? '' : 'no-shadow'}`}>
      <div className={`popup-container ${isVisible ? 'show' : ''}`}>
        <h2 className="popup-title">{title}</h2>
        <p className="popup-text">{text}</p>
        <div className="mt-2 popup-buttons">
          <button
            className={`px-4 py-2 rounded-lg ${typeClasses[cancel.type]}`}
            onClick={() => onClose(false)}
          >
            {cancel.text}
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${typeClasses[success.type]}`}
            onClick={() => onClose(true)}
          >
            {success.text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
