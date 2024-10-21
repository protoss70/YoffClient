import "./teacherCards.css"

import arrowLeft from "../../assets/hero_page/arrowLeft.png"
import teacher1 from "../../assets/hero_page/teacherImage1.webp"
import teacher2 from "../../assets/hero_page/teacherImage2.webp"
import teacher3 from "../../assets/hero_page/teacherImage3.webp"
import teacher4 from "../../assets/hero_page/teacherImage4.webp"
import teacher5 from "../../assets/hero_page/teacherImage5.webp"

import netherlandsFlag from "../../assets/flags/Netherlands.png"
import germanFlag from "../../assets/flags/German.png"
import czechFlag from "../../assets/flags/Czech.png"
import spanishFlag from "../../assets/flags/Spanish.png"

function TeachersSection() {
  return (
    <section className="px-24 mt-40 min-w-96 max-1300:px-12 max-900:px-6">
        {/* Title */}
        <div className="flex items-center justify-center text-6xl font-bold font-gilroy">
            <h1>
                <span className="text-main">
                    Expert&nbsp;
                    <span className="underline--double">
                    Teachers&nbsp;
                    </span>
                </span>
                from <br />Around the World
            </h1>
        </div>

        {/* Teachers Slider */}
        <div className="flex relative justify-center mt-16 mb-10 h-[500px] items-center">
            
            {/* Card 1 */}
            <div className="flex flex-col p-5 pb-0 rounded-lg shadow-lg card card1 max-1100:hidden">
                {/* Image */}
                <div className="relative flex items-center justify-center w-full mb-5">
                    <img src={teacher1} alt="teacher profile image" className="rounded-full cardImage" />
                    
                    <div className="absolute bottom-[-20px] flex flex-col items-center justify-center px-3 py-1 text-white rounded-md bg-gradient-to-r from-main to-secondary font-gilroy">
                        <div className="font-semibold">Eva Michael</div>
                        <div className="font-medium">Germany</div>
                    </div>
                </div>

                {/* Hobbies */}
                <div className="flex flex-col mt-4 text-center font-gilroy">
                    <div className="font-semibold text-custom_blue">Hobbies</div>
                    <div className="font-medium">Cooking, Hiking,  Dancing, Painting</div>
                </div>

                {/* Languages */}
                <div className="flex flex-col mt-4 text-center font-gilroy">
                    <div className="font-semibold text-custom_blue">Languages</div>
                    <div className="flex justify-center gap-3 px-[10%]">
                        <img src={germanFlag} alt="german flag" className="cardFlag"/>
                        <img src={spanishFlag} alt="spanish flag" className="cardFlag"/>
                        <img src={netherlandsFlag} alt="netherlands flag" className="cardFlag"/>
                        <img src={czechFlag} alt="czech flag" className="cardFlag"/>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col p-5 rounded-lg shadow-lg card2 card max-800:hidden">
                {/* Image */}
                <div className="relative flex items-center justify-center w-full mb-5">
                    <img src={teacher2} alt="teacher profile image" className="rounded-full cardImage" />
                    
                    <div className="absolute bottom-[-20px] flex flex-col items-center justify-center px-3 py-1 text-white rounded-md bg-gradient-to-r from-main to-secondary font-gilroy">
                        <div className="font-semibold">Eva Michael</div>
                        <div className="font-medium">Germany</div>
                    </div>
                </div>

                {/* Hobbies */}
                <div className="flex flex-col mt-4 text-center font-gilroy">
                    <div className="font-semibold text-custom_blue">Hobbies</div>
                    <div className="font-medium">Cooking, Hiking,  Dancing, Painting</div>
                </div>

                {/* Languages */}
                <div className="flex flex-col mt-4 text-center font-gilroy">
                    <div className="font-semibold text-custom_blue">Languages</div>
                    <div className="flex justify-center gap-3 px-[10%]">
                        <img src={germanFlag} alt="german flag" className="cardFlag"/>
                        <img src={spanishFlag} alt="spanish flag" className="cardFlag"/>
                        <img src={netherlandsFlag} alt="netherlands flag" className="cardFlag"/>
                        <img src={czechFlag} alt="czech flag" className="cardFlag"/>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col p-5 rounded-lg shadow-lg card3 card">
                {/* Image */}
                <div className="relative flex items-center justify-center w-full mb-5">
                    <img src={teacher3} alt="teacher profile image" className="rounded-full cardImage" />
                    
                    <div className="absolute bottom-[-20px] flex flex-col items-center justify-center px-3 py-1 text-white rounded-md bg-gradient-to-r from-main to-secondary font-gilroy">
                        <div className="font-semibold">Eva Michael</div>
                        <div className="font-medium">Germany</div>
                    </div>
                </div>

                {/* Hobbies */}
                <div className="flex flex-col mt-4 text-center font-gilroy">
                    <div className="font-semibold text-custom_blue">Hobbies</div>
                    <div className="font-medium">Cooking, Hiking,  Dancing, Painting</div>
                </div>

                {/* Languages */}
                <div className="flex flex-col mt-4 text-center font-gilroy">
                    <div className="font-semibold text-custom_blue">Languages</div>
                    <div className="flex justify-center gap-3 px-[10%]">
                        <img src={germanFlag} alt="german flag" className="cardFlag"/>
                        <img src={spanishFlag} alt="spanish flag" className="cardFlag"/>
                        <img src={netherlandsFlag} alt="netherlands flag" className="cardFlag"/>
                        <img src={czechFlag} alt="czech flag" className="cardFlag"/>
                    </div>
                </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col p-5 rounded-lg shadow-lg card4 card max-800:hidden">
                {/* Image */}
                <div className="relative flex items-center justify-center w-full mb-5">
                    <img src={teacher4} alt="teacher profile image" className="rounded-full cardImage" />
                    
                    <div className="absolute bottom-[-20px] flex flex-col items-center justify-center px-3 py-1 text-white rounded-md bg-gradient-to-r from-main to-secondary font-gilroy">
                        <div className="font-semibold">Eva Michael</div>
                        <div className="font-medium">Germany</div>
                    </div>
                </div>

                {/* Hobbies */}
                <div className="flex flex-col mt-4 text-center font-gilroy">
                    <div className="font-semibold text-custom_blue">Hobbies</div>
                    <div className="font-medium">Cooking, Hiking,  Dancing, Painting</div>
                </div>

                {/* Languages */}
                <div className="flex flex-col mt-4 text-center font-gilroy">
                    <div className="font-semibold text-custom_blue">Languages</div>
                    <div className="flex justify-center gap-3 px-[10%]">
                        <img src={germanFlag} alt="german flag" className="cardFlag"/>
                        <img src={spanishFlag} alt="spanish flag" className="cardFlag"/>
                        <img src={netherlandsFlag} alt="netherlands flag" className="cardFlag"/>
                        <img src={czechFlag} alt="czech flag" className="cardFlag"/>
                    </div>
                </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col p-5 rounded-lg shadow-lg card5 card max-1100:hidden">
                {/* Image */}
                <div className="relative flex items-center justify-center w-full mb-5">
                    <img src={teacher5} alt="teacher profile image" className="rounded-full cardImage" />
                    
                    <div className="absolute bottom-[-20px] flex flex-col items-center justify-center px-3 py-1 text-white rounded-md bg-gradient-to-r from-main to-secondary font-gilroy">
                        <div className="font-semibold">Eva Michael</div>
                        <div className="font-medium">Germany</div>
                    </div>
                </div>

                {/* Hobbies */}
                <div className="flex flex-col mt-4 text-center font-gilroy">
                    <div className="font-semibold text-custom_blue">Hobbies</div>
                    <div className="font-medium">Cooking, Hiking,  Dancing, Painting</div>
                </div>

                {/* Languages */}
                <div className="flex flex-col mt-4 text-center font-gilroy">
                    <div className="font-semibold text-custom_blue">Languages</div>
                    <div className="flex justify-center gap-3 px-[10%]">
                        <img src={germanFlag} alt="german flag" className="cardFlag"/>
                        <img src={spanishFlag} alt="spanish flag" className="cardFlag"/>
                        <img src={netherlandsFlag} alt="netherlands flag" className="cardFlag"/>
                        <img src={czechFlag} alt="czech flag" className="cardFlag"/>
                    </div>
                </div>
            </div>
        </div>
        {/* Left and Right Arrows */}
        <div className="flex justify-center gap-6 max-1100:gap-10 max-800:gap-16">
            <div className="p-4 flex justify-center items-center hover:cursor-pointer w-[45px] h-[45px] rounded-full bg-gradient-to-r from-main to-secondary">
                <img src={arrowLeft} alt="left arrow" className="mr-1"/>
            </div>
            <div className="p-4 rotate-180 flex justify-center items-center hover:cursor-pointer w-[45px] h-[45px] rounded-full bg-gradient-to-r from-main to-secondary">
                <img src={arrowLeft} alt="right arrow" className="mr-1"/>
            </div>
        </div>
     </section>
  );
}

export default TeachersSection;
