import React, { useState, FocusEvent } from "react";
import Button from "../Button/Button";
import { sendMessageToTeacher } from "../../api/message/postMessage";
import { useAuth } from "../../context/authContext";
import { createNotificationEvent } from "../../utility/modal_utils";
import { useTranslation } from "react-i18next";

interface MessageTeacherProps {
  teacher: { name: string; surname: string, _id: string } | null;
  imagePath: string;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageTeacher: React.FC<MessageTeacherProps> = ({ teacher, imagePath, isVisible, setIsVisible }) => {
  const [question, setQuestion] = useState<string>("");
  const [descriptionFocused, setDescriptionFocused] = useState<boolean>(false);
  const { currentUser, userData } = useAuth();

  const {t} = useTranslation();

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    setDescriptionFocused(e.target.value !== "");
  };

  const handleSubmit = async () => {
    if (!teacher || !currentUser || !userData) return;
    const token = await currentUser.getIdToken();

    if (!token) return;

    const result = await sendMessageToTeacher(question, teacher._id, token, userData);

    if (!result || !result.success){
        createNotificationEvent(
            "Oops Something Went Wrong",
            "Please try again later or directly email us at info@yoff.academy",
            "danger",
            8500
          )
          return
    }

    createNotificationEvent(
        `${teacher.name} Recieved Your Message`,
        `We have sent your message to ${teacher.name} 😊`,
        "success",
        8000
    )
    handleCloseMessageModal();
  }

  const handleCloseMessageModal = () => {
    setQuestion("");
    setIsVisible(false);
  };

  return (
    <div
      className={`flex items-center justify-center fixed pt-20 z-50 top-0 left-0 w-screen h-screen bg-[#0000007f] ${
        isVisible ? "" : "hidden"
      }`}
      onClick={handleCloseMessageModal} // Close when background is clicked
    >
      <div
        className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg"
        onClick={(e) => e.stopPropagation()} // Prevent background click from closing the modal
      >
        {/* Header */}
        <div className="flex justify-between w-full p-4 text-white rounded-t-md bg-main">
          <h5 className="text-lg font-semibold">{t("sendMessage.header")}</h5>
          <button
            type="button"
            className="text-2xl text-white"
            aria-label="Close"
            onClick={handleCloseMessageModal}
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center gap-3 p-5">
          <img className="object-cover rounded-md w-52 h-52" src={imagePath} alt="Teacher profile picture" />
          <div className="text-xl font-bold font-gilroy">
            {teacher?.name} {teacher?.surname}
          </div>
          <div className="text-center max-w-96 font-poppins">
          {t("sendMessage.description")}
          </div>

          {/* Question Input */}
          <div className="relative w-full mt-2">
            <textarea
              className="resize-none w-full p-3 border border-[#00000033] rounded-lg bg-transparent focus:outline-none focus:border-blue-500 peer placeholder-transparent pt-6 min-h-32"
              name="Description"
              id="description"
              placeholder={t("sendMessage.placeholder")}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onFocus={() => setDescriptionFocused(true)}
              onBlur={(e) => handleBlur(e)}
            ></textarea>
            <label
              htmlFor="description"
              className={`absolute left-3 top-3 text-gray-500 transition-all duration-200 
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 ${
                  descriptionFocused ? "top-1 text-xs text-blue-500" : ""
                }`}
            >
              {t("sendMessage.questionLabel")}
            </label>
          </div>

          {/* Submit Button */}
          <Button text={t("sendMessage.submitButton")} onClick={handleSubmit} variant="inline" wrapperClasses="w-full" buttonClasses="w-full" />
        </div>
      </div>
    </div>
  );
};

export default MessageTeacher;
