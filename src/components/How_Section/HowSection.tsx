import image1 from "../../assets/hero_page/HowImage1.webp";
import image2 from "../../assets/hero_page/HowImage2.webp";
import image3 from "../../assets/hero_page/HowImage3.webp";
import image4 from "../../assets/hero_page/HowImage4.webp";
import lines1 from "../../assets/hero_page/lines1.png";
import lines2 from "../../assets/hero_page/lines2.png";
import lines3 from "../../assets/hero_page/lines3.png";

function HowSection() {
  return (
    <section id="HowItWorks" className="px-24 mt-40 min-w-96 max-1300:px-12 max-900:px-6 max-900:mt-28 max-800:mt-12 max-600:px-1 max-600:min-w-0">
        {/* Title */}
        <div className="flex justify-center w-full">
            <h1 className="text-6xl max-600:text-4xl">How It&nbsp;<span className="text-6xl max-600:text-4xl underline--double text-main">Works</span></h1>
        </div>

        {/* How it works cards */}
        <div className="flex justify-between my-40 max-800:my-10 max-1100:flex-wrap max-1100:gap-4 max-1100:justify-center max-800:justify-between">
            <div className="flex justify-around h-72 basis-1/2 max-1100:w-full max-800:h-auto max-1100:basis-auto max-1100:justify-center max-1100:gap-5 max-800:flex-col max-800:items-center">
              {/* Card 1 */}
              <div className="relative flex flex-col justify-start p-6 bg-white rounded-lg shadow-lg max-900:w-80 max-1300:w-64 max-1100:basis-1/3 w-72 max-600:w-2/3">
                {/* Image */}
                <div className="bg-[#b671ff33] p-1 w-[72px] h-[72px] rounded-full">
                  <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                    <img src={image1} alt="Person with chat bubbles" className="w-16" />
                  </div>
                </div>

                <h2 className="mt-2 text-xl font-bold font-gilroy max-1300:mt-1">
                  Select a Language
                </h2>

                <div className="mt-3 text-sm font-normal leading-6 max-1300:mt-2 font-poppins">
                Select from a wide range of languages, from popular choices like English and Spanish to unique options like Arabic, Korean, Turkish, and Russian.
                </div>

                {/* Lines */}
                <div className="absolute top-[-50px] right-[-100px] z-[-1] max-800:hidden">
                  <img src={lines1} alt="dotted lines" />
                </div>
                {/* Lines */}
                <div className="absolute bottom-[-50px] right-[-110px] rotate-90 z-[-1] hidden max-800:block max-600:right-[-90px]">
                  <img src={lines1} alt="dotted lines" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex relative text-white flex-col justify-start p-6 rounded-lg shadow-lg max-900:w-80 bg-gradient-to-r max-1100:basis-1/3 max-1300:w-64 from-main to-[#CC5FB8] w-72 max-600:w-2/3">
                {/* Image */}
                <div className="bg-[#ffffff33] p-1 w-[72px] h-[72px] rounded-full">
                  <div className="w-16 p-4 bg-white rounded-full">
                    <img src={image2} alt="Person with chat bubbles" className="w-16" />
                  </div>
                </div>

                <h2 className="mt-2 text-xl font-bold font-gilroy max-1300:mt-1">
                  Book Your Classes
                </h2>

                <div className="mt-3 text-sm font-normal leading-6 max-1300:mt-2 font-poppins">
                  Schedule lessons at times that work for you. Learn one-on-one with experienced teachers.           
                </div>

                {/* Lines */}
                <div className="absolute bottom-[-50px] right-[-100px] z-[-1] max-1100:rotate-[-90deg] max-800:hidden">
                  <img src={lines2} alt="dotted lines" />
                </div>

                {/* Lines */}
                <div className="absolute bottom-[-50px] left-[-90px] rotate-[-90deg] z-[-1] hidden max-800:block">
                  <img src={lines1} alt="dotted lines" />
                </div>
              </div>
            </div>

            <div className="flex justify-around h-72 basis-1/2 max-800:h-auto max-800:flex-col max-800:items-center max-1100:w-full max-1100:basis-auto max-1100:justify-center max-1100:gap-5 max-1100:flex-row-reverse">
              {/* Card 3 */}
              <div className="relative flex flex-col justify-start p-6 bg-white rounded-lg shadow-lg max-1300:w-64 max-900:w-80 max-1100:basis-1/3 w-72 max-600:w-2/3">
                {/* Image */}
                <div className="bg-[#b671ff33] p-1 w-[72px] h-[72px] rounded-full">
                  <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full ">
                    <img src={image3} alt="Person with chat bubbles" className="w-16" />
                  </div>
                </div>

                <h2 className="mt-2 text-xl font-bold font-gilroy max-1300:mt-1">
                  Learn & Practice
                </h2>

                <div className="mt-3 text-sm font-normal leading-6 max-1300:mt-2 font-poppins">
                  Join live sessions with expert teachers, access interactive learning materials.             
                </div>
                {/* Lines */}
                <div className="absolute top-[-55px] right-[-100px] z-[-1] max-1100:hidden">
                  <img src={lines3} alt="dotted lines" />
                </div>

                {/* Responsive Lines */}
                <div className="absolute bottom-[-50px] max-1100:block hidden left-[-100px] z-[-1] rotate-180 max-800:hidden">
                  <img src={lines3} alt="dotted lines" />
                </div>

                {/* Lines */}
                <div className="absolute bottom-[-50px] right-[-100px] rotate-90 z-[-1] hidden max-800:block">
                  <img src={lines3} alt="dotted lines" />
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col justify-start p-6 bg-white rounded-lg shadow-lg max-1300:w-64 max-900:w-80 max-1100:basis-1/3 w-72 max-600:w-2/3">
                {/* Image */}
                <div className="bg-[#b671ff33] p-1 w-[72px] h-[72px] rounded-full">
                  <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                    <img src={image4} alt="Person with chat bubbles" className="w-16" />
                  </div>
                </div>

                <h2 className="mt-2 text-xl font-bold font-gilroy max-1300:mt-1">
                  Track Your Progress              
                </h2>

                <div className="mt-3 text-sm font-normal leading-6 max-1300:mt-2 font-poppins">
                Enjoy personalized feedback after every session, track your progress, and stay on course to achieve your language goals.          
                </div>
              </div>
            </div>
        </div>
     </section>
  );
}

export default HowSection;
