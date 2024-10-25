import React, { useEffect, useState } from "react"; // Import useEffect and useState
import { useParams } from "react-router-dom"; // Import useParams
import teacherProfileBg from "../assets/teacherprofile/teacher_Profile_Bg.png";
import Flag from 'react-world-flags';
import Button from "../components/Button/Button";
import { languageToCountryCode } from "../utility/languages";
import { Teacher } from "../utility/types";

import teacher1 from "../assets/hero_page/teacherImage1.webp";
import teacher2 from "../assets/hero_page/teacherImage2.webp";
import teacher3 from "../assets/hero_page/teacherImage3.webp";
import teacher4 from "../assets/hero_page/teacherImage4.webp";
import teacher5 from "../assets/hero_page/teacherImage5.webp";

const TeacherProfile: React.FC = () => {
    const { teacherId } = useParams<{ teacherId: string }>(); // Get teacherId from URL params

    // Initialize state for teacher
    const [teacher, setTeacher] = useState<Teacher | null>(null); // State for teacher

    const teachers: Teacher[] = [
        {
            image: teacher1,
            name: "Eva Michael",
            country: "Germany",
            hobbies: ["Cooking", "Hiking", "Dancing", "Painting"],
            languages: ["German", "Spanish", "Dutch", "Czech"],
        },
        {
            image: teacher2,
            name: "John Doe",
            country: "USA",
            hobbies: ["Reading", "Cycling", "Traveling"],
            languages: ["English", "French"],
        },
        {
            image: teacher3,
            name: "Maria Silva",
            country: "Brazil",
            hobbies: ["Dancing", "Singing", "Surfing"],
            languages: ["Portuguese", "Spanish"],
        },
        {
            image: teacher4,
            name: "Hiroshi Tanaka",
            country: "Japan",
            hobbies: ["Calligraphy", "Martial Arts"],
            languages: ["Japanese", "English"],
        },
        {
            image: teacher5,
            name: "Anya Ivanova",
            country: "Russia",
            hobbies: ["Chess", "Ballet"],
            languages: ["Russian", "English"],
        },
        {
            image: teacher1,
            name: "Liam O'Connor",
            country: "Ireland",
            hobbies: ["Football", "Cooking"],
            languages: ["English", "Irish"],
        },
        {
            image: teacher2,
            name: "Sofia Rossi",
            country: "Italy",
            hobbies: ["Photography", "Cooking"],
            languages: ["Italian", "English"],
        },
        {
            image: teacher4,
            name: "Ahmed Khan",
            country: "Pakistan",
            hobbies: ["Cricket", "Writing"],
            languages: ["English", "French"],
        },
    ];

    // Effect to find and set the teacher based on the ID from the URL
    useEffect(() => {
        const foundTeacher = teachers.find(t => t.name === teacherId) || null; // or use any other unique property
        console.log("FOUND", foundTeacher)
        setTeacher(foundTeacher); // Update the state
    }, [teacherId]);

    if (!teacher) {
        return <div>Teacher not found</div>; // Handle the case where the teacher is not found
    }

    return (
        <main className="relative flex flex-col items-center justify-center gap-5 px-24 pt-32 pb-24 max-1300:px-12 max-900:px-6">
            {/* Teacher Image */}
            <div className="flex justify-start w-full">
                <div className="p-2 border rounded-full border-main">
                    <img className="w-72" src={teacher.image} alt="Teacher profile picture" />
                </div>
            </div>

            {/* Teacher Top Bio */}
            <div className="flex justify-between w-full ml-4 max-800:flex-col max-800:justify-center">
                <div>
                    <div className="text-5xl font-bold font-gilroy">
                        {teacher.name}
                    </div>
                    <div className="text-2xl font-gilroy font-medium opacity-50 text-[#222222]">
                        {teacher.country}
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
                    Lorem ipsum dolor sit amet, cons adipiscing elit...
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
                            console.log('LANG', language)
                            const countryCode = languageToCountryCode[language];
                            return (
                                <div key={index} className="flex flex-col items-center">
                                    <Flag
                                        code={countryCode}
                                        alt={`${language} flag`}
                                        className="w-12 h-12 transition-transform duration-200 rounded-2xl hover:scale-125"
                                    />
                                    <span className="mt-1 font-semibold font-gilroy text-md">{language}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Teacher profile top bg image */}
            <div className="absolute top-0 left-0 w-full h-64 rounded-xl -z-10 bg-gradient-to-r from-main to-secondary">
                <img src={teacherProfileBg} alt="Purple design" className="absolute top-0 left-0 w-full h-64" />
            </div>
        </main>
    );
};

export default TeacherProfile;
