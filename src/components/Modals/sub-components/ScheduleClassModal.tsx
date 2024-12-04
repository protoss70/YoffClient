import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CreateFolderModalProps {
  show: boolean;
  handleClose: () => void;
  handleSchedule: (language: string, isDemoClass: boolean) => Promise<boolean>;
  isDemoCredit: boolean;
  languages: string[];
  date: string; // Expecting a date string in the format "YYYY-MM-DD HH:mm"
  name: string; // Teacher's first name
  surname: string; // Teacher's last name
  teacherImageSrc: string; // Teacher's profile image URL
}

const ScheduleClassModal: React.FC<CreateFolderModalProps> = ({
  show,
  handleClose,
  handleSchedule,
  isDemoCredit,
  languages,
  date,
  name,
  surname,
  teacherImageSrc,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isDemoClass, setIsDemoClass] = useState(false);
  const navigate = useNavigate();

  // Focus on the input when the modal is shown
  useEffect(() => {
    if (show && inputRef.current) {
      inputRef.current.focus();
    }
  }, [show]);

  useEffect(() => {
    setSelectedLanguage(languages[0]);
  }, [languages]);

  // Handle keydown events for Escape and Enter
  useEffect(() => {
    if (!show) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on unmount or when modal is hidden
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [show, handleClose]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value); // Update the selected language state
  };

  const handleDemoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setIsDemoClass(parseInt(event.target.value) === 1); // Update the selected language state
  };

  // Handle modal close and clear the input
  const handleCloseModal = () => {
    handleClose();
  };

  // Handle form submission
  const handleSubmit = async () => {
    const result = await handleSchedule(selectedLanguage, isDemoClass);
    console.log(result);
    if (result) {
      navigate("/my-classes");
      handleClose();
      return;
    }
  };

  // Format the date string
  const formattedDate = new Date(date);
  const formattedDateString = formattedDate.toLocaleDateString(); // e.g., "15/11/2024"
  const formattedTimeString = formattedDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  }); // e.g., "15:30"

  if (!show) return null; // Do not render the modal if it's not shown

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 ${show ? 'block' : 'hidden'}`}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
        onClick={handleOverlayClick}
      >
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
          <div className="flex justify-between p-4 text-white rounded-t-lg bg-main">
            <h5 className="text-lg font-semibold">Schedule Class</h5>
            <button
              type="button"
              className="text-2xl text-white"
              aria-label="Close"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col items-center gap-3 p-4">
            <div className="flex flex-col items-center justify-center w-full gap-4">
              <img src={teacherImageSrc} alt="Teacher Profile Pic" className="object-cover rounded-full w-60 h-60" />
              <div className="text-2xl font-semibold">{name} {surname}</div>
            </div>

            <div className="flex flex-col w-full gap-3">
              <div className="">
                <div><b>Date:</b> {formattedDateString}</div>
                <div><b>Time:</b> {formattedTimeString}</div>
              </div>
              <div>
                <label htmlFor="language" className="block mb-1 font-bold">
                  Language
                </label>
                <select onChange={handleLanguageChange} value={selectedLanguage} name="language" className="w-full p-2 border rounded-md hover:cursor-pointer" id="language-field">
                  {languages.map((language, index) => (
                    <option key={index} value={language}>{language}</option>
                  ))}
                </select>
              </div>

              {isDemoCredit && (
                <div>
                  <label htmlFor="classType" className="block mb-1 font-bold">
                    Class Type
                  </label>
                  <select name="classType" onChange={handleDemoChange} className="w-full p-2 border rounded-md hover:cursor-pointer" id="class-type-field">
                    <option value={0}>Language Class (45 minutes)</option>
                    <option value={1}>Demo Class (30 minutes)</option>
                  </select>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end p-4 space-x-2">
            <button
              type="button"
              className="px-4 py-2 font-semibold text-black bg-gray-300 rounded-lg font-gilroy hover:bg-gray-400"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg font-gilroy hover:bg-green-600"
              onClick={handleSubmit}>
              <i className="bi bi-folder-plus"></i> Schedule
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleClassModal;
