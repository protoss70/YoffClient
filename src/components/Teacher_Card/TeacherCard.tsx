import React from 'react';

// Define the props type if needed
interface TeacherCardProps {
  image: string;
  name: string;
  country: string;
  hobbies: string[];
  languages: string[];
  flags: string[];
  className?: string; // Add className prop, defaulting to ""
}

const TeacherCard: React.FC<TeacherCardProps> = ({
  image,
  name,
  country,
  hobbies,
  languages,
  flags,
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
        <div className="flex justify-center gap-3 px-[10%]">
          {flags.map((flag, index) => (
            <img key={index} loading="lazy" src={flag} alt={`${languages[index]} flag`} className="cardFlag" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
