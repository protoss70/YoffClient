import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { useParams } from "react-router-dom"; // Import useParams
import teacherProfileBg from "../assets/teacherprofile/teacher_Profile_Bg.png";
import Flag from 'react-world-flags';
import Button from "../components/Button/Button";
import { languageToCountryCode } from "../utility/languages";
import { Teacher } from "../utility/types";
import teacherImages from "../utility/teacherImages";

import Calendar from "../components/Calendar/Calendar";
import { getTeacher } from "../api/teacher/getTeacher";

const TeacherProfile: React.FC = () => {
    const { teacherId } = useParams<{ teacherId: string }>(); // Get teacherId from URL params


    // Initialize state for teacher
    const [teacher, setTeacher] = useState<Teacher | null>(null); // State for teacher
    const [imagePath, setImagePath] = useState<string>(''); // State for teacher image path

    // Effect to find and set the teacher based on the ID from the URL
    useEffect(() => {
      async function getTeacherData() {
        if (!teacherId) return;
        const teacherData: Teacher = await getTeacher(teacherId);
        setTeacher(teacherData);
  
        const formattedName = teacherData.name + "-" + teacherData.surname as keyof typeof teacherImages;
        const image = teacherImages[formattedName] || ''; // Default to empty string if not found
        setImagePath(image); // Update the imagePath state
      }
  
      getTeacherData();
    }, [teacherId]);

    return (
        <main className="relative flex flex-col items-center justify-center gap-5 px-24 pt-32 pb-24 max-1300:px-12 max-900:px-6">
            {/* Teacher Image */}
            {teacher ? 
            <>
                <div className="flex justify-start w-full">
                    <div className="p-2 border rounded-full border-main">
                        <img className="object-cover rounded-full w-72 h-72" src={imagePath} alt="Teacher profile picture" />
                    </div>
                </div>

                {/* Teacher Top Bio */}
                <div className="flex justify-between w-full ml-4 max-800:flex-col max-800:justify-center">
                    <div>
                        <div className="text-5xl font-bold font-gilroy">
                            {teacher.name} {" "} {teacher.surname}
                        </div>
                        <div className="text-2xl font-gilroy font-medium opacity-50 text-[#222222]">
                            {teacher.origin}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-3 max-800:mt-5 max-600:flex-col">
                        <Button text="Schedule Class" variant="inline" buttonClasses="max-800:w-full" wrapperClasses="max-800:w-full"/>
                        <Button text="Send Message" variant="border" wrapperClasses="max-800:w-full" buttonClasses="max-800:w-full"/>
                    </div>
                </div>

                {/* BIO */}
                <div className="w-full ml-3">
                    <h3 className="w-full text-2xl font-semibold text-start font-gilroy text-main">BIO</h3>
                    <div className="leading-7 font-montserrat">
                        {/* Add the teacher's bio here if you have it */}
                        {teacher.bio}
                    </div>
                </div>

                {/* Bottom Info */}
                <div className="flex justify-between w-full ml-6 gap-7 max-1000:flex-wrap max-1000:flex-row max-800:flex-col-reverse">
                    <div className="basis-1/3 max-1000:basis-1/2">
                        <h3 className="w-full text-2xl font-semibold text-start font-gilroy text-main">Education</h3>
                        <div className="font-gilroy font-semibold text-[#222222] text-lg">
                            Master's Degree in Linguistics from the University of Milan teaching certifications
                        </div>
                    </div>

                    <div className="basis-1/3">
                        <h3 className="w-full text-2xl font-semibold text-start font-gilroy text-main">Hobbies</h3>
                        <div className="font-gilroy font-semibold text-[#222222] text-lg">
                            {teacher.hobbies.join(", ")}
                        </div>
                    </div>

                    <div className="basis-1/3">
                        <h3 className="w-full text-2xl font-semibold text-start font-gilroy text-main">Languages</h3>
                        <div className="flex justify-start gap-5 pt-1">
                        {teacher.languages.map((language, index) => {
                            console.log('LANG', language);

                            // Extract the language part before any parentheses (if any)
                            const languageName = language.split(' (')[0];

                            // Check for specific exceptions (Korean, Arabic)
                            let countryCode = languageToCountryCode[languageName];

                            // Fallback for specific exceptions
                            if (!countryCode) {
                                if (languageName === 'Korean') {
                                countryCode = 'KR'; // Fallback to South Korea for Korean
                                } else if (languageName === 'Arabic') {
                                countryCode = 'SA'; // Fallback to Saudi Arabia for Arabic
                                }
                            }

                            console.log(languageName, countryCode); // Debugging output

                            // Render flag and language if countryCode is found
                            return countryCode ? (
                                <div key={index} className="flex flex-col items-center">
                                <Flag
                                    code={countryCode} // Use country code
                                    alt={`${languageName} flag`}
                                    className="w-12 h-12 duration-200 rounded-2xl"
                                />
                                <span className="mt-1 font-semibold font-gilroy text-md">{language}</span> {/* Display the full language with additional info */}
                                </div>
                            ) : null; // If no mapping, return null
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex justify-start w-full">
                    <Calendar initialSchedule={teacher.scheduleDates} />
                </div>

                {/* Teacher profile top bg image */}
                <div className="absolute top-0 left-0 w-full h-64 rounded-xl -z-10 bg-gradient-to-r from-main to-secondary">
                    <img src={teacherProfileBg} alt="Purple design" className="absolute top-0 left-0 w-full h-64" />
                </div>
            </>
        : <div>Loading...</div>}
        </main>
    );
};

export default TeacherProfile;
