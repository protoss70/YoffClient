import React from 'react';
import Flag from 'react-world-flags';

const languageToCountryCode: Record<string, string> = {
    English: 'GB', // Using the UK flag for English
    German: 'DE',
    Dutch: 'NL',
    Czech: 'CZ',
    Spanish: 'ES',
    Portuguese: 'PT',
    French: 'FR',
    Japanese: 'JP',
    Russian: 'RU',
    Italian: 'IT',
    Urdu: 'PK',
    Irish: 'IE',
    // Add more mappings as needed
};

interface TeacherCardProps {
  image: string;
  name: string;
  country: string;
  hobbies: string[];
  languages: string[];
  className?: string; // Add className prop, defaulting to ""
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  image,
  name,
  country,
  hobbies,
  languages,
  className = '', // Default to an empty string
}) => {
  return (
    <div className={`flex flex-col p-5 pb-0 rounded-lg card shadow-lg ${className}`}>
      {/* Image */}
      <div className="relative flex items-center justify-center w-full mb-5">
        <img loading="lazy" src={image} alt={`${name} profile image`} className="rounded-full cardImage" />
        <div className="absolute bottom-[-20px] flex flex-col items-center justify-center px-3 py-1 text-white rounded-md bg-gradient-to-r from-main to-secondary font-gilroy">
          <div className="font-semibold">{name}</div>
          <div className="font-medium">{country}</div>
        </div>
      </div>

      {/* Hobbies */}
      <div className="flex flex-col mt-4 text-center font-gilroy">
        <div className="font-semibold text-custom_blue">Hobbies</div>
        <div className="font-medium">{hobbies.join(', ')}</div>
      </div>

      {/* Languages */}
      <div className="flex flex-col mt-4 text-center font-gilroy">
        <div className="font-semibold text-custom_blue">Languages</div>
        <div className="flex justify-center gap-5 px-[10%]">
          {languages.map((language, index) => {
            const countryCode = languageToCountryCode[language]; // Get country code for the language
            return countryCode ? (
              <div className='flex flex-col items-center justify-center'>
                <Flag
                  key={index}
                  code={countryCode} // Use country code
                  alt={`${language} flag`}
                  className="w-8 h-8 transition-transform duration-200 rounded-2xl hover:scale-125"
                />
                <span className="mt-1 font-semibold text-md text-custom_blue">{language}</span>
              </div>
            ) : null; // If no mapping, return null
          })}
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
