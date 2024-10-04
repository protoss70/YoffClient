import image1 from "../../assets/hero_page/HowImage1.png";
import image2 from "../../assets/hero_page/HowImage2.png";
import image3 from "../../assets/hero_page/HowImage3.png";
import image4 from "../../assets/hero_page/HowImage4.png";
import lines1 from "../../assets/hero_page/lines1.png";
import lines2 from "../../assets/hero_page/lines2.png";
import lines3 from "../../assets/hero_page/lines3.png";

function HowSection() {
  return (
    <section className="px-24 mt-40 min-w-96">
        {/* Title */}
        <div className="flex justify-center w-full">
            <h1 className="text-6xl">How It&nbsp;<span className="text-6xl underline--double text-main">Works</span></h1>
        </div>

        {/* How it works cards */}
        <div className="flex justify-between my-40">

            {/* Card 1 */}
            <div className="relative flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg w-72">
              {/* Image */}
              <div className="bg-[#b671ff33] p-1 w-[72px] h-[72px] rounded-full">
                <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                  <img src={image1} alt="Person with chat bubbles" className="w-16" />
                </div>
              </div>

              <h2 className="mt-2 text-xl font-bold font-gilroy">
                Choose Your Language
              </h2>

              <div className="mt-3 text-sm font-normal leading-6 font-poppins">
                Select from a wide range of languages, from popular choices like Spanish and French to niche languages like Japanese or Arabic.
              </div>

              {/* Lines */}
              <div className="absolute top-[-50px] right-[-100px] z-[-1]">
                <img src={lines1} alt="dotted lines" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex relative text-white flex-col justify-between p-6 rounded-lg shadow-lg bg-gradient-to-r from-main to-[#CC5FB8] w-72">
              {/* Image */}
              <div className="bg-[#ffffff33] p-1 w-[72px] h-[72px] rounded-full">
                <div className="w-16 p-4 bg-white rounded-full">
                  <img src={image2} alt="Person with chat bubbles" className="w-16" />
                </div>
              </div>

              <h2 className="mt-2 text-xl font-bold font-gilroy">
                Book Your Classes
              </h2>

              <div className="mt-3 text-sm font-normal leading-6 font-poppins">
                Schedule lessons at times that work for you. Learn one-on-one with native speakers or join group classes for a more interactive.              
              </div>

              {/* Lines */}
              <div className="absolute bottom-[-50px] right-[-100px] z-[-1]">
                <img src={lines2} alt="dotted lines" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg w-72">
              {/* Image */}
              <div className="bg-[#b671ff33] p-1 w-[72px] h-[72px] rounded-full">
                <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                  <img src={image3} alt="Person with chat bubbles" className="w-16" />
                </div>
              </div>

              <h2 className="mt-2 text-xl font-bold font-gilroy">
                Learn & Practice
              </h2>

              <div className="mt-3 text-sm font-normal leading-6 font-poppins">
                Join live sessions with experienced teachers, access interactive learning materials, and practice with fellow students.              
              </div>
              {/* Lines */}
              <div className="absolute top-[-55px] right-[-100px] z-[-1]">
                <img src={lines3} alt="dotted lines" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col justify-between p-6 bg-white rounded-lg shadow-lg w-72">
              {/* Image */}
              <div className="bg-[#b671ff33] p-1 w-[72px] h-[72px] rounded-full">
                <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                  <img src={image4} alt="Person with chat bubbles" className="w-16" />
                </div>
              </div>

              <h2 className="mt-2 text-xl font-bold font-gilroy">
                Track Your Progress              
              </h2>

              <div className="mt-3 text-sm font-normal leading-6 font-poppins">
                Receive feedback after every session and track your learning journey with our progress dashboard.              
              </div>
            </div>
        </div>
     </section>
  );
}

export default HowSection;
