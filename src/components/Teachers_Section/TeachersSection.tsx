import { useState } from "react";
import arrowLeft from "../../assets/hero_page/arrowLeft.png";
import teacher1 from "../../assets/hero_page/teacherImage1.webp";
import teacher2 from "../../assets/hero_page/teacherImage2.webp";
import teacher3 from "../../assets/hero_page/teacherImage3.webp";
import teacher4 from "../../assets/hero_page/teacherImage4.webp";
import teacher5 from "../../assets/hero_page/teacherImage5.webp";
import TeacherCard from '../Teacher_Card/TeacherCard'; // Ensure the path is correct

function TeachersSection() {
    const teachers = [
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
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teachers.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + teachers.length) % teachers.length);
    };

    return (
        <section className="px-24 mt-40 min-w-96 max-1300:px-12 max-900:px-6 max-600:px-1 max-600:min-w-0">
            {/* Title */}
            <div className="flex items-center justify-center text-6xl font-bold font-gilroy">
                <h1>
                    <span className="text-main">
                        Expert&nbsp;
                        <span className="underline--double">Teachers&nbsp;</span>
                    </span>
                    from <br />Around the World
                </h1>
            </div>

            {/* Teachers Slider */}
            <div className="flex relative justify-center mt-16 mb-10 h-[500px] items-center">
                {Array.from({ length: 5 }).map((_, index) => {
                    const indexToDisplay = (currentIndex + index) % teachers.length;
                    const teacher = teachers[indexToDisplay];

                    // Determine the card class based on index
                    let cardClass = `card${index + 1}`;

                    // Add conditional classes based on card position
                    if (index + 1 === 1 || index + 1 === 5) {
                        cardClass += " max-1100:hidden"; // Hide card1 and card5 on screens <= 1100px
                    } else if (index + 1 === 2 || index + 1 === 4) {
                        cardClass += " max-800:hidden"; // Hide card2 and card4 on screens <= 800px
                    }

                    return (
                        <TeacherCard
                            key={index}
                            image={teacher.image}
                            name={teacher.name}
                            country={teacher.country}
                            hobbies={teacher.hobbies}
                            languages={teacher.languages}
                            className={cardClass} // Pass the dynamically assigned class name
                        />
                    );
                })}
            </div>

            {/* Left and Right Arrows */}
            <div className="flex justify-center gap-6 max-1100:gap-10 max-800:gap-16">
                <div
                    className="p-4 flex justify-center items-center hover:cursor-pointer w-[45px] h-[45px] rounded-full bg-gradient-to-r from-main to-secondary"
                    onClick={handlePrev}
                >
                    <img src={arrowLeft} alt="left arrow" className="mr-1" />
                </div>
                {/* Current Index Display */}
                <div className="flex h-[45px] items-center justify-center text-xl font-bold text-main">
                    <div>
                        {`${currentIndex + 1} of ${teachers.length}`}
                    </div>
                </div>
                <div
                    className="p-4 rotate-180 flex justify-center items-center hover:cursor-pointer w-[45px] h-[45px] rounded-full bg-gradient-to-r from-main to-secondary"
                    onClick={handleNext}
                >
                    <img src={arrowLeft} alt="right arrow" className="mr-1" />
                </div>
            </div>
        </section>
    );
}

export default TeachersSection;
