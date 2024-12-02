// components/LanguageCard.tsx
import React from "react";
import { LanguageCard as LanguageCardType } from "../../utility/types"; // Adjust the path as necessary
import arrowLeft from "../../assets/hero_page/arrowMain.png";
import Flag from "react-world-flags";

interface LanguageCardProps {
  languageCard: LanguageCardType;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ languageCard }) => {
  return (
    <div className="flex items-center justify-between w-full gap-2 p-3 transition-all duration-300 bg-white rounded-lg hover:scale-105">
      {/* Flag Image and Text */}
      <div className="flex gap-3">
        <div className="bg-[#b671ff33] p-1 rounded-full">
          <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 h-16 p-2 rounded-full">
            <Flag
              code={languageCard.flagCode} // Replace this with the actual country code field in your data
              alt={`${languageCard.language} flag`}
              style={{ width: "100%", height: "100%", borderRadius: "100%" }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-1 mt-1 font-gilroy">
          <div className="text-xl font-semibold text-dark max-1300:text-lg hover:underline hover:cursor-pointer">
            {`${languageCard.language} Tutors`}
          </div>
          <div className="font-medium text-custom_gray">
            {`${languageCard.teachersCount} Teacher${languageCard.teachersCount !== 1 ? 's' : ''}`}
          </div>
        </div>
      </div>
      {/* Arrow */}
      <div className="flex items-center justify-center w-[8px] h-full hover:cursor-pointer">
        <img src={arrowLeft} alt="left arrow" className="mr-1" />
      </div>
    </div>
  );
};

export default LanguageCard;
