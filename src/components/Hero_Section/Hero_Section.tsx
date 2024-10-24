import heroImage from "../../assets/hero_page/Hero Image.webp";
import heroArrow from "../../assets/hero_page/Hero_Arrow.webp";
import Button from "../Button/Button";


function HeroSeciton() {
  return (
    <section className="relative opacity-100">
      {/* Hero Content */}
      <div className="z-10 flex items-center justify-between px-24 max-1300:px-12 max-900:px-6 max-800:flex-col-reverse max-800:justify-center max-800:pt-3 max-600:px-1 max-800:pb-24">
        <div className="pb-32 basis-1/2 max-1100:pb-20 max-900:pb-10 max-800:pb-0 max-800:pt-0">
          <h1 className="relative mb-2 font-bold leading-[80px] text-black text-6xl font-gilroy max-1380:text-5xl max-1100:text-4xl max-800:text-center">
            Anytime, Anywhere <br /> 
            with Expert 
            <span className="font-extrabold font-gilroy underline--double text-main">
              &nbsp;Teachers
            </span>
            <img src={heroArrow} className="max-800:hidden absolute right-0 max-1100:right-14 max-900:right-1 max-900:w-36 max-900:bottom-[-175px] max-1100:bottom-[-200px] max-1100:w-44 bottom-[-224px] w-56" alt="Arrow image" />
          </h1>
          <div className="font-normal font-gilroy max-800:text-center max-800:px-24 max-600:px-0">
            Unlock your language potential with expert teachers from around the globe. Whether you're a beginner or advanced learner.
          </div>
          <br />
          <div className="max-800:mx-24 max-600:mx-0">
            <Button text='Get Started' variant='inline' wrapperClasses="max-800:!w-full" buttonClasses='!px-7 max-800:!w-full max-800:!text-lg !py-3 font-poppins !shadow-inner  max-1100:!py-3 max-1100:!px-6 max-1100:!text-base'/>
          </div>
        </div>
        
        <div className="p-10 basis-1/2 max-800:justify-between max-800:flex max-800:p-0">
          <img loading="eager" src={heroImage} className="h-[600px] max-1300:h-[550px] max-1100:h-[475px] max-900:h-[400px] max-800:h-[400px]" alt="Hero seciton image" />
        </div>
      </div>
      
      {/* BG Image */}
      <div className="z-[-1] absolute top-0 left-0 w-full h-full min-h-[110vh] max-1300:min-h-[100vh] hero-bg max-800:min-h-[180vh] max-800:hero-bg-shapes-only"></div>
      <div className="z-[-2] absolute top-0 left-0 w-full bg-[#F4EFF6] hero-bg-shapes-only h-[80%]"></div>
     </section>
  );
}

export default HeroSeciton;
