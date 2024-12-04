import React, { useState, FocusEvent } from 'react';
import contactImage from '../../assets/hero_page/ContactImage.webp';
import Button from "../Button/Button";
import { sendContactUsMessage } from '../../api/message/postMessage';
import { createNotificationEvent } from '../../utility/modal_utils';
import { useTranslation } from "react-i18next"

function ContactSection() {
  const [nameFocused, setNameFocused] = useState<boolean>(false);
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [descriptionFocused, setDescriptionFocused] = useState<boolean>(false);

  const { t } = useTranslation();

  // State for the form fields
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [question, setQuestion] = useState<string>('');

  const handleBlur = (setFocused: React.Dispatch<React.SetStateAction<boolean>>, e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocused(e.target.value !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email.trim() === "" || fullName.trim() === "" || question.trim() === ""){
      createNotificationEvent(
        "Please Fill The Form",
        "It looks like you did not fill all the necessary fields",
        "info",
        5000
      )
      return;
    }
    
    const result = await sendContactUsMessage(email, fullName, question);

    if (result && result.success){
      createNotificationEvent(
        "We Got Your Message",
        "Our team has recieved your message! We will respond as soon as possible 😊",
        "success",
        5000
      )
      setFullName("");
      setEmail("");
      setQuestion("");
    }else{
      createNotificationEvent(
        "Oops Something Went Wrong",
        "Please try again later or directly email us at info@yoff.academy",
        "danger",
        8500
      )
    }
    // Add the API call logic here to send the data to your server
  };

  return (
    <section className="px-24 my-40 max-1300:px-12 max-900:px-6 max-600:px-1 min-w-96 max-600:min-w-0">
      <div className="flex justify-between gap-10 p-6 pl-12 border rounded-3xl max-1000:justify-center max-1000:items-center max-1000:mx-[10%] max-600:mx-auto">
        
        {/* Form */}
        <div className="mt-3 basis-1/2 max-1000:basis-auto">
          <h2 className="text-5xl font-bold font-gilroy">{t("contact.title")}</h2>
          <div className="font-poppins text-[#434343] mt-2">
            {t("contact.description")}
          </div>

          <div className="w-full mt-4" onSubmit={handleSubmit}>
            
            {/* Name Input */}
            <div className="relative w-full">
              <input
                className="w-full p-3 border border-[#00000033] rounded-lg bg-transparent focus:outline-none focus:border-blue-500 peer placeholder-transparent pt-6"
                type="text"
                name="fullName"
                id="contact-name"
                placeholder={t("contact.form.name.placeholder")}
                autoComplete="off"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => setNameFocused(true)}
                onBlur={(e) => handleBlur(setNameFocused, e)}
              />
              <label
                htmlFor="contact-name"
                className={`absolute left-3 top-3 text-gray-500 transition-all duration-200 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                  peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 ${
                    nameFocused ? 'top-1 text-xs text-blue-500' : ''
                }`}
              >
                {t("contact.form.name.label")}
              </label>
            </div>

            {/* Email Input */}
            <div className="relative w-full mt-2">
              <input
                className="w-full p-3 border border-[#00000033] rounded-lg bg-transparent focus:outline-none focus:border-blue-500 peer placeholder-transparent pt-6"
                type="email"
                name="Email"
                id="contact-email"
                placeholder={t("contact.form.email.placeholder")}
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={(e) => handleBlur(setEmailFocused, e)}
              />
              <label
                htmlFor="contact-email"
                className={`absolute left-3 top-3 text-gray-500 transition-all duration-200 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                  peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 ${
                    emailFocused ? 'top-1 text-xs text-blue-500' : ''
                }`}
              >
                {t("contact.form.email.label")}
              </label>
            </div>

            {/* Description Textarea */}
            <div className="relative w-full mt-2">
              <textarea
                className="resize-none w-full p-3 border border-[#00000033] rounded-lg bg-transparent focus:outline-none focus:border-blue-500 peer placeholder-transparent pt-6 min-h-52"
                name="Description"
                id="description"
                placeholder={t("contact.form.description.placeholder")}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onFocus={() => setDescriptionFocused(true)}
                onBlur={(e) => handleBlur(setDescriptionFocused, e)}
              ></textarea>
              <label
                htmlFor="description"
                className={`absolute left-3 top-3 text-gray-500 transition-all duration-200 
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                  peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500 ${
                    descriptionFocused ? 'top-1 text-xs text-blue-500' : ''
                }`}
              >
                {t("contact.form.description.label")}
              </label>
            </div>
          </div>

          <div className="w-full font-poppins">
            <Button text={t("contact.form.submit")} onClick={handleSubmit} wrapperClasses='!rounded-md max-1000:w-full' buttonClasses='!px-8 !text-base !font-medium !rounded-md max-1000:!w-full
            ' variant='inline'/>
          </div>
        </div>  
        
        {/* Image */}
        <div className="flex justify-end rounded-2xl basis-1/2 max-1000:hidden">
          <img loading="lazy" className="h-[550px] rounded-3xl" src={contactImage} alt="person studying" />
        </div>
      </div>    
    </section>
  );
}

export default ContactSection;
