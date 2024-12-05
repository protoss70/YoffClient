import { useEffect, useState } from "react";
import arrowLeft from "../../assets/hero_page/arrowLeft.png";
import TeacherCard from '../Teacher_Card/TeacherCard'; // Ensure the path is correct
import { TeacherCardDisplay } from "../../utility/types";
import { getTeacherCards } from "../../api/teacher/getTeacher";
import { useTranslation } from "react-i18next";

function TeachersSection() {
    const [teachers, setTeachers] = useState<TeacherCardDisplay[]>([]);

    const { t, i18n  } = useTranslation();

    const isTurkish = i18n.language === "tr";

    useEffect(() => {
        async function getCards(){
            const teacherCardValues = await getTeacherCards(8, true);
            setTeachers(teacherCardValues);
        }
        getCards();
    }, [])

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
                <h1 className={`flex ${isTurkish ? "flex-col-reverse" : "flex-col"}`}>
                    <span className="text-main">
                        {t("teacherSection.line1")}&nbsp;
                        <span className="underline--double">{t("teacherSection.highlight")}&nbsp;</span>
                    </span>
                    {t("teacherSection.line2")}&nbsp;{t("teacherSection.line3")}
                </h1>
            </div>

            {/* Teachers Slider */}
            <div className="flex relative justify-center mt-16 mb-10 h-[500px] items-center">
                {teachers.length > 0 ? Array.from({ length: 5 }).map((_, index) => {
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
                            _id={teacher._id}
                            name={`${teacher.name} ${teacher.surname}`}
                            country={teacher.origin}
                            hobbies={teacher.hobbies}
                            languages={teacher.languages}
                            className={cardClass}
                            />
                    );
                }): null}
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
