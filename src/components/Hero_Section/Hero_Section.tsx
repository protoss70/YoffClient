import heroImage from "../../assets/hero_page/Hero Image.png";
import heroArrow from "../../assets/hero_page/Hero_Arrow.png";
// import heroBgFull from "../../assets/hero_page/Hero_Background_Full.png";


function HeroSeciton() {
  return (
    <section className="relative opacity-100">
      {/* Hero Content */}
      <div className="z-10 flex items-center justify-between px-24">
        <div className="pb-32 basis-1/2">
          <h1 className="relative mb-2 font-bold leading-[80px] text-black text-6xl font-gilroy">
            Anytime, Anywhere <br /> 
            with Expert 
            <span className="font-extrabold font-gilroy underline--double text-main">
              &nbsp;Teachers
            </span>
            <img src={heroArrow} className="absolute right-0 bottom-[-224px] w-56" alt="Arrow image" />
          </h1>
          <span className="font-normal font-gilroy">
            Unlock your language potential with expert teachers from around the globe. Whether you're a beginner or advanced learner.
          </span>
          <br />
          <button className="py-3 mt-4 text-lg font-medium text-center text-white transition-all duration-1000 shadow-inner px-7 font-poppins bg-gradient-to-r from-main to-secondary rounded-xl">
            Get Started
          </button>
        </div>
        
        <div className="p-10 basis-1/2">
          <img src={heroImage} className="h-[600px]" alt="Hero seciton image" />
        </div>
      </div>
      
      {/* BG Image */}
      <div className="z-[-1] absolute top-0 left-0 w-full h-full min-h-[110vh] hero-bg"></div>
      <div className="z-[-2] absolute top-0 left-0 w-full bg-[#F4EFF6] h-[50%]"></div>
     </section>
  );
}

export default HeroSeciton;
