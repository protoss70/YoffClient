import dutchFlag from "../../assets/flags/wavy flags/dutch.png";
import germanFlag from "../../assets/flags/wavy flags/german.png";
import spanishFlag from "../../assets/flags/wavy flags/spanish.png";
import czechFlag from "../../assets/flags/wavy flags/czech.png";
import arabicFlag from "../../assets/flags/wavy flags/arabic.png";
import chineseFlag from "../../assets/flags/wavy flags/chinese.png";
import frenchFlag from "../../assets/flags/wavy flags/french.png";
import italianFlag from "../../assets/flags/wavy flags/italian.png";
import arrowLeft from "../../assets/hero_page/arrowMain.png";

function LanguageSection() {
  return (
    <section id="LanguageSelection" className="px-24 mt-40 max-1300:px-12 max-900:px-6 max-600:px-3 min-w-96 max-600:min-w-0 languages-bg py-14">
      {/* Title */}
      <h1 className="text-6xl font-bold text-center text-white my-14 font-gilroy max-800:text-5xl max-600:text-4xl">
        Languages <span className="underline--double underline--white">We Offer</span>
      </h1>

      {/* Language Cards Wrapper */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-1000:grid-cols-2 max-600:grid-cols-1 max-1380:grid-cols-3">
        {/* Language Card 1 */}
        <div className="flex items-center justify-between w-full gap-2 p-3 bg-white rounded-lg">
          {/* Flag Image and Text */}
          <div className="flex gap-3">
            <div className="bg-[#b671ff33] p-1 rounded-full">
              <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                <img src={spanishFlag} alt="Spanish flag" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1 mt-1 font-gilroy">
              <div className="text-xl font-semibold text-dark max-1300:text-lg">Spanish Tutors</div>
              <div className="font-medium text-custom_gray">7 Teachers</div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex items-center justify-center w-[8px] h-full">
            <img src={arrowLeft} alt="left arrow" className="mr-1" />
          </div>
        </div>

        {/* Language Card 2 */}
        <div className="flex items-center justify-between w-full gap-2 p-3 bg-white rounded-lg">
          {/* Flag Image and Text */}
          <div className="flex gap-3">
            <div className="bg-[#b671ff33] p-1 rounded-full">
              <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                <img src={czechFlag} alt="Czech flag" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1 mt-1 font-gilroy">
              <div className="text-xl font-semibold text-dark max-1300:text-lg">Czech Tutors</div>
              <div className="font-medium text-custom_gray">1 Teacher</div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex items-center justify-center w-[8px] h-full">
            <img src={arrowLeft} alt="left arrow" className="mr-1" />
          </div>
        </div>

        {/* Language Card 3 */}
        <div className="flex items-center justify-between w-full gap-2 p-3 bg-white rounded-lg">
          {/* Flag Image and Text */}
          <div className="flex gap-3">
            <div className="bg-[#b671ff33] p-1 rounded-full">
              <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                <img src={arabicFlag} alt="Arabic flag" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1 mt-1 font-gilroy">
              <div className="text-xl font-semibold text-dark max-1300:text-lg">Arabic Tutors</div>
              <div className="font-medium text-custom_gray">12 Teachers</div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex items-center justify-center w-[8px] h-full">
            <img src={arrowLeft} alt="left arrow" className="mr-1" />
          </div>
        </div>

        {/* Language Card 4 */}
        <div className="flex items-center justify-between w-full gap-2 p-3 bg-white rounded-lg">
          {/* Flag Image and Text */}
          <div className="flex gap-3">
            <div className="bg-[#b671ff33] p-1 rounded-full">
              <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                <img src={italianFlag} alt="Italian flag" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1 mt-1 font-gilroy">
              <div className="text-xl font-semibold text-dark max-1300:text-lg">Italian Tutors</div>
              <div className="font-medium text-custom_gray">3 Teachers</div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex items-center justify-center w-[8px] h-full">
            <img src={arrowLeft} alt="left arrow" className="mr-1" />
          </div>
        </div>

        {/* Language Card 5 */}
        <div className="flex items-center justify-between w-full gap-2 p-3 bg-white rounded-lg">
          {/* Flag Image and Text */}
          <div className="flex gap-3">
            <div className="bg-[#b671ff33] p-1 rounded-full">
              <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                <img src={frenchFlag} alt="French flag" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1 mt-1 font-gilroy">
              <div className="text-xl font-semibold text-dark max-1300:text-lg">French Tutors</div>
              <div className="font-medium text-custom_gray">26 Teachers</div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex items-center justify-center w-[8px] h-full">
            <img src={arrowLeft} alt="left arrow" className="mr-1" />
          </div>
        </div>

        {/* Language Card 6 */}
        <div className="flex items-center justify-between w-full gap-2 p-3 bg-white rounded-lg">
          {/* Flag Image and Text */}
          <div className="flex gap-3">
            <div className="bg-[#b671ff33] p-1 rounded-full">
              <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                <img src={germanFlag} alt="German flag" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1 mt-1 font-gilroy">
              <div className="text-xl font-semibold text-dark max-1300:text-lg">German Tutors</div>
              <div className="font-medium text-custom_gray">2 Teachers</div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex items-center justify-center w-[8px] h-full">
            <img src={arrowLeft} alt="left arrow" className="mr-1" />
          </div>
        </div>

        {/* Language Card 7 */}
        <div className="flex items-center justify-between w-full gap-2 p-3 bg-white rounded-lg">
          {/* Flag Image and Text */}
          <div className="flex gap-3">
            <div className="bg-[#b671ff33] p-1 rounded-full">
              <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                <img src={chineseFlag} alt="Chinese flag" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1 mt-1 font-gilroy">
              <div className="text-xl font-semibold text-dark max-1300:text-lg">Chinese Tutors</div>
              <div className="font-medium text-custom_gray">17 Teachers</div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex items-center justify-center w-[8px] h-full">
            <img src={arrowLeft} alt="left arrow" className="mr-1" />
          </div>
        </div>

        {/* Language Card 8 */}
        <div className="flex items-center justify-between w-full gap-2 p-3 bg-white rounded-lg">
          {/* Flag Image and Text */}
          <div className="flex gap-3">
            <div className="bg-[#b671ff33] p-1 rounded-full">
              <div className="bg-gradient-to-r from-main to-[#CC5FB8] w-16 p-4 rounded-full">
                <img src={dutchFlag} alt="Dutch flag" className="w-16" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-1 mt-1 font-gilroy">
              <div className="text-xl font-semibold text-dark max-1300:text-lg">Dutch Tutors</div>
              <div className="font-medium text-custom_gray">4 Teachers</div>
            </div>
          </div>
          {/* Arrow */}
          <div className="flex items-center justify-center w-[8px] h-full">
            <img src={arrowLeft} alt="left arrow" className="mr-1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LanguageSection;
