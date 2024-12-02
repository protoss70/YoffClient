import { useNavigate } from "react-router-dom";
import LanguageCard from "../LanguageCard/LanguageCard"; // Adjust the import path as necessary
import { languageToCountryCode, allLanguages, languageTeacherCounts } from "../../utility/languages"; // Adjust path

function LanguageSection() {
  const navigate = useNavigate();

  // Build `languageData` dynamically
  const languageData = allLanguages.map((language: string) => ({
    language,
    teachersCount: languageTeacherCounts[language] || 0, // Default to 0 if no count is found
    flagCode: languageToCountryCode[language] || "UN", // Use "UN" as fallback flag
  }));

  return (
    <section
      id="LanguageSelection"
      className="px-24 mt-40 max-1300:px-12 max-900:px-6 max-600:px-3 min-w-96 max-600:min-w-0 languages-bg py-14"
    >
      {/* Title */}
      <h1 className="text-6xl font-bold text-center text-white my-14 font-gilroy max-800:text-5xl max-600:text-4xl">
        Languages <span className="underline--double underline--white">We Offer</span>
      </h1>

      {/* Language Cards Wrapper */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-1000:grid-cols-2 max-600:grid-cols-1 max-1380:grid-cols-3">
        {languageData.map((language, index) => (
          <div key={index} onClick={() => navigate(`/teachers?langFilter=${language.language}`)}>
            <LanguageCard
              languageCard={{
                language: language.language,
                teachersCount: language.teachersCount,
                flagCode: language.flagCode,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguageSection;
