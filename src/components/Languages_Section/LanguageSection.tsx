import { useNavigate } from "react-router-dom";
import dutchFlag from "../../assets/flags/dutch.png";
import germanFlag from "../../assets/flags/german.png";
import spanishFlag from "../../assets/flags/spanish.png";
import czechFlag from "../../assets/flags/czech.png";
import arabicFlag from "../../assets/flags/arabic.png";
import chineseFlag from "../../assets/flags/chinese.png";
import frenchFlag from "../../assets/flags/french.png";
import italianFlag from "../../assets/flags/italian.png";
import LanguageCard from "../LanguageCard/LanguageCard"; // Adjust the import path as necessary

const languageData = [
  { language: "Spanish", teachersCount: 7, flagSrc: spanishFlag },
  { language: "Czech", teachersCount: 1, flagSrc: czechFlag },
  { language: "Arabic", teachersCount: 12, flagSrc: arabicFlag },
  { language: "Italian", teachersCount: 3, flagSrc: italianFlag },
  { language: "French", teachersCount: 26, flagSrc: frenchFlag },
  { language: "German", teachersCount: 2, flagSrc: germanFlag },
  { language: "Chinese", teachersCount: 17, flagSrc: chineseFlag },
  { language: "Dutch", teachersCount: 4, flagSrc: dutchFlag },
];

function LanguageSection() {
  const navigate = useNavigate();
  
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
                flagSrc: language.flagSrc,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LanguageSection;
