import React from 'react';
import "./TeacherCard.css";
import Flag from 'react-world-flags';
import { languageToCountryCode } from '../../utility/languages';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import teacherImages from '../../utility/teacherImages';
import { useTranslation } from 'react-i18next';

interface TeacherCardProps {
  name: string;
  country: string;
  hobbies: string[];
  languages: string[];
  className?: string; // Add className prop, defaulting to ""
  isAbsolute?: boolean;
  _id: string;
  showCTA?:boolean;
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  name,
  country,
  hobbies,
  languages,
  _id,
  className = '', // Default to an empty string
  isAbsolute=true,
  showCTA=false,
}) => {

  const {t} = useTranslation();

  const navigate = useNavigate();
  // Determine flag size based on className
  const flagSizeClass = className.includes('card1') || className.includes('card5') 
    ? 'h-6 w-6' 
    : className.includes('card2') || className.includes('card4') 
    ? 'h-8 w-8' 
    : 'h-12 w-12'; // Default size

  const handleTeacherClick = () => {
    navigate(`/teacher/${_id}`)
  }
  const formattedName = name.replace(/ /g, "-") as keyof typeof teacherImages;
  const imagePath = teacherImages[formattedName] || ''; // Fallback if not found

  return (
    <div className={`flex flex-col p-5 pb-0 rounded-lg ${isAbsolute ? "card" : "hover:scale-105"} transition-all duration-300 teacherCard shadow-lg ${className}`}>
      {/* Image */}
      <div className="relative flex items-center justify-center w-full mb-5">
        <img loading="lazy" onClick={handleTeacherClick} src={imagePath} alt={`${name} profile image`} className="object-cover rounded-full hover:cursor-pointer cardImage" />
        <div onClick={handleTeacherClick} className="absolute bottom-[-20px]  flex flex-col items-center justify-center px-3 py-1 text-white rounded-md bg-gradient-to-r from-main to-secondary font-gilroy">
          <div className="font-semibold hover:cursor-pointer hover:underline">{name}</div>
          <div className="font-medium">{t(`allCountries.${country.replace(" ", "")}`)}</div>
        </div>
      </div>

      {/* Hobbies */}
      <div className="flex flex-col mt-4 text-center font-gilroy">
        <div className="font-semibold text-custom_blue">{t("teacherCards.hobbies")}</div>
        <div className="font-medium">{hobbies.slice(0, 2).join(', ')}</div>
      </div>

      {/* Languages */}
      {!showCTA ? <div className="flex flex-col mt-4 text-center font-gilroy">
        <div className="font-semibold text-custom_blue">{t("teacherCards.languages")}</div>
        <div className="flex justify-center gap-3 px-[10%]">
        {languages.map((language, index) => {
          // Extract the language part before any parentheses (if any)
          const splitLanguage = language.split(' (');
          const languageName = splitLanguage[0];
          const languageLevel = " (" + splitLanguage[1] || ""

          // Check for specific exceptions (Korean, Arabic)
          const countryCode = languageToCountryCode[languageName];

          // Render flag and language if countryCode is found
          return countryCode ? (
            <div key={index} className="flex flex-col items-center justify-center">
              <Flag
                code={countryCode} // Use country code
                alt={`${languageName} flag`}
                className={`rounded-3xl ${flagSizeClass}`}
              />
              <span className="mt-1 font-semibold text-md text-nowrap text-custom_blue">{t(`allLanguages.${languageName}`)}<span className='text-sm font-normal'>&nbsp;({t(`allLanguageLevels.${languageLevel.replace(/[()]/g, '').trim().toLowerCase()}`)})</span></span>
            </div>
          ) : null; // If no mapping, return null
        })}
        </div>
      </div>: null}
      {showCTA ?
            <div className="flex flex-col items-center gap-3 mt-2 max-800:mt-5">
              <Button text={t("teacherCards.scheduleClass")} onClick={() => {navigate(`/teacher/${_id}?schedule=true`)}} variant="inline" buttonClasses="!w-full !text-base" wrapperClasses="!text-base !w-full"/>
              <Button text={t("teacherCards.sendMessage")} onClick={() => {navigate(`/teacher/${_id}?message=true`)}} variant="border" wrapperClasses="!w-full" buttonClasses="!text-base !w-full"/>
            </div>
          : null}
    </div>
  );
};

export default TeacherCard;
