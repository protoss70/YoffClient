import heroImage from "../../assets/hero_page/Hero Image.png";
import heroArrow from "../../assets/hero_page/Hero_Arrow.png";
// import heroBgFull from "../../assets/hero_page/Hero_Background_Full.png";


function HeroSeciton() {
  return (
    <section className="relative opacity-100">
      {/* Hero Content */}
      <div className="z-10 flex items-center justify-between px-24 max-1300:px-12 max-900:px-6">
        <div className="pb-32 basis-1/2 max-1100:pb-20 max-900:pb-10">
          <h1 className="relative mb-2 font-bold leading-[80px] text-black text-6xl font-gilroy max-1380:text-5xl max-1100:text-4xl">
            Anytime, Anywhere <br /> 
            with Expert 
            <span className="font-extrabold font-gilroy underline--double text-main">
              &nbsp;Teachers
            </span>
            <img src={heroArrow} className="absolute right-0 max-1100:right-14 max-900:right-1 max-900:w-36 max-900:bottom-[-175px] max-1100:bottom-[-200px] max-1100:w-44 bottom-[-224px] w-56" alt="Arrow image" />
          </h1>
          <span className="font-normal font-gilroy">
            Unlock your language potential with expert teachers from around the globe. Whether you're a beginner or advanced learner.
          </span>
          <br />
          <button className="py-3 mt-4 text-lg font-medium text-center text-white transition-colors duration-1000 shadow-inner max-1100:py-3 max-1100:px-6 max-1100:text-base px-7 font-poppins bg-gradient-to-r from-main to-secondary rounded-xl hover:to-main hover:from-secondary">
            Get Started
        </button>
        </div>
        
        <div className="p-10 basis-1/2">
          <img src={heroImage} className="h-[600px] max-1300:h-[550px] max-1100:h-[475px] max-900:h-[400px]" alt="Hero seciton image" />
        </div>
      </div>
      
      {/* BG Image */}
      <div className="z-[-1] absolute top-0 left-0 w-full h-full min-h-[110vh] max-1300:min-h-[100vh] hero-bg"></div>
      <div className="z-[-2] absolute top-0 left-0 w-full bg-[#F4EFF6] h-[50%]"></div>
     </section>
  );
}

export default HeroSeciton;
