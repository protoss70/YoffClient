import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import teacher1 from "../assets/hero_page/teacherImage1.webp";
import teacher2 from "../assets/hero_page/teacherImage2.webp";
import teacher3 from "../assets/hero_page/teacherImage3.webp";
import teacher4 from "../assets/hero_page/teacherImage4.webp";
import teacher5 from "../assets/hero_page/teacherImage5.webp";

import { languageToCountryCode, allLanguages } from "../utility/languages";
import Flag from "react-world-flags";

import { Teacher } from "../utility/types";
import TeacherCard from "../components/Teacher_Card/TeacherCard";

const Teacher_Select: React.FC = () => {
  const location = useLocation(); // Get the location object to access the search params
  const queryParams = new URLSearchParams(location.search); // Parse the query parameters
  const langFilter = queryParams.get("langFilter"); // Get langFilter from query parameters
  const [selectedLanguage, setSelectedLanguage] = useState<string>(langFilter || "");
  const navigate = useNavigate();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    setSelectedLanguage(selectedLang);
    navigate(`?langFilter=${selectedLang}`); // Update the URL with the selected language
  };

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

  // Default CSS variable values
  const defaultCSSVariables: Record<string, string> = {
    "--card-width-difference": "50px",
    "--card-width": "350px",
    "--card-height-difference": "50px",
    "--card-height": "500px",
    "--card-image-size": "250px",
    "--card-image-size-difference": "40px",
    "--card-language-size": "45px",
    "--card-language-size-difference": "7px",
    "--left-difference": "18%",
  };

  useEffect(() => {
    // Update CSS variables from :root
    document.documentElement.style.setProperty("--card-width", "300px");
    document.documentElement.style.setProperty("--card-height", "500px");

    // Cleanup function to reset CSS variables to default on unmount
    return () => {
      Object.keys(defaultCSSVariables).forEach((key) => {
        document.documentElement.style.setProperty(key, defaultCSSVariables[key]);
      });
    };
  }, []);

  const languageSection = (teachers: Teacher[], language: string) => {
    return (
      <section key={language} className="px-24 my-10 max-1300:px-12 max-900:px-6 max-600:px-1">
        {/* Language Card */}
        <div className="flex items-center gap-3 my-5">
          <Flag
            code={languageToCountryCode[language]} // Use country code
            alt={`${language} flag`}
            className={`transition-transform duration-200 hover:scale-125 h-16 w-16 rounded-full p-2 bg-main`}
          />
          <h2 className="text-4xl font-bold font-gilroy">{language}</h2>
        </div>
        <div className="flex flex-wrap justify-start gap-10 max-1000:justify-center">
          {teachers.map((teacher, index) => {
            return (
              <TeacherCard
                key={index}
                image={teacher.image}
                name={teacher.name}
                country={teacher.country}
                hobbies={teacher.hobbies}
                languages={teacher.languages}
                className="card3"
                isAbsolute={false}
                showCTA={true}
              />
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <main className="pt-6">
      {/* Language Filter Dropdown */}
      <div className="px-24 mb-6 max-1300:px-12 max-900:px-6 max-600:px-1">
        <label htmlFor="language-select" className="text-xl font-semibold">Select Language: </label>
        <select
          id="language-select"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="p-2 ml-2 border border-gray-300 rounded"
        >
          <option value="">All Languages</option>
          {allLanguages.map((language) => (
            <option key={language} value={language}>
              <div className="flex items-center">
                <Flag code={languageToCountryCode[language]} alt={`${language} flag`} className="mr-2" />
                {language}
              </div>
            </option>
          ))}
        </select>
      </div>

      {selectedLanguage
        ? languageSection(
            teachers.filter((teacher) => teacher.languages.includes(selectedLanguage)),
            selectedLanguage
          )
        : allLanguages.map((language) => {
            const filteredTeachers = teachers.filter((teacher) =>
              teacher.languages.includes(language)
            );

            return filteredTeachers.length > 0
              ? languageSection(filteredTeachers, language)
              : null;
          })}
    </main>
  );
};

export default Teacher_Select;
