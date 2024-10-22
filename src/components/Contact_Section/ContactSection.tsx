import React, { useState, FocusEvent } from 'react';
import contactImage from '../../assets/hero_page/ContactImage.webp';

function ContactSection() {
  const [nameFocused, setNameFocused] = useState<boolean>(false);
  const [emailFocused, setEmailFocused] = useState<boolean>(false);
  const [descriptionFocused, setDescriptionFocused] = useState<boolean>(false);

  const handleBlur = (setFocused: React.Dispatch<React.SetStateAction<boolean>>, e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFocused(e.target.value !== '');
  };

  return (
    <section className="px-24 my-40 max-1300:px-12 max-900:px-6 max-600:px-1 min-w-96 max-600:min-w-0">
      <div className="flex justify-between gap-10 p-6 pl-12 border rounded-3xl max-1000:justify-center max-1000:items-center max-1000:mx-[10%] max-600:mx-auto">
        
        {/* Form */}
        <div className="mt-3 basis-1/2 max-1000:basis-auto">
          <h2 className="text-5xl font-bold font-gilroy">Contact Us</h2>
          <div className="font-poppins text-[#434343] mt-2">
            Have questions or ready to start your project? We're here to help! Contact us using the form.
          </div>

          <div className="w-full mt-4">
            
            {/* Name Input */}
            <div className="relative w-full">
              <input
                className="w-full p-3 border border-[#00000033] rounded-lg bg-transparent focus:outline-none focus:border-blue-500 peer placeholder-transparent pt-6"
                type="text"
                name="Name"
                id="contact-name"
                placeholder="Type here"
                autoComplete="off"
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
                Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative w-full mt-2">
              <input
                className="w-full p-3 border border-[#00000033] rounded-lg bg-transparent focus:outline-none focus:border-blue-500 peer placeholder-transparent pt-6"
                type="email"
                name="Email"
                id="contact-email"
                placeholder="Type here"
                autoComplete="off"
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
                Email
              </label>
            </div>

            {/* Description Textarea */}
            <div className="relative w-full mt-2">
              <textarea
                className="resize-none w-full p-3 border border-[#00000033] rounded-lg bg-transparent focus:outline-none focus:border-blue-500 peer placeholder-transparent pt-6 min-h-52"
                name="Description"
                id="description"
                placeholder="Type here"
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
                Description
              </label>
            </div>
          </div>

          <div className="w-full font-poppins">
            <button className="px-8 py-3 font-medium text-center text-white rounded-md bg-gradient-to-r from-main to-secondary">
              Submit
            </button>
          </div>
        </div>  
        
        {/* Image */}
        <div className="flex justify-end rounded-2xl basis-1/2 max-1000:hidden">
          <img className="h-[550px] rounded-3xl" src={contactImage} alt="person studying" />
        </div>
      </div>    
    </section>
  );
}

export default ContactSection;
