import pricingImage from "../../assets/hero_page/Pricing_Image.webp";
import pricingTick from "../../assets/hero_page/Pricing_Tick.png";
import premiumTick from "../../assets/hero_page/Premium_tick.png"
import Button from "../Button/Button";
import { createNotificationEvent } from "../../utility/modal_utils";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { sendPaymentProcessingRequest } from "../../api/payment/getPayment";

function PricingSection() {
  const { currentUser, userData } = useAuth();
  const navigate = useNavigate();
  async function handlePricingClick(e: React.MouseEvent<HTMLButtonElement>, plan: string){
    if (!currentUser || !userData?._id){
      navigate("login");
      return;
    }
    e.currentTarget.classList.add(
        "opacity-60", // Reduces opacity to indicate a disabled state
        "cursor-wait" // Shows a "not-allowed" cursor when hovered
    );
    e.currentTarget.disabled = true;
    e.currentTarget.classList.remove("hover:scale-110");
    function sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    const token = await currentUser.getIdToken();
    await sendPaymentProcessingRequest(userData._id, token, plan)
    // Usage: Sleep for 1.5 seconds (1500 ms)
    await sleep(1500);

    createNotificationEvent(
      "Payment System is Down",
      "Oh, it seems our payment system is currently down. Our support team will get in touch with you soon for further information.",
      "info",
      12000
    )
  }
  

  return (
    <section id="PricingSection" className="mt-24 mb-28 px-36 max-1300:px-24 max-900:px-18 max-600:px-14 min-w-96-bg max-1200:px-14">
      {/* Title */}
      <h1 className="text-6xl font-bold text-center my-14 font-gilroy">
        Our <span className="mb-2 underline--double underline--margined text-main">Pricing</span>
      </h1>

      {/* Pricing Cards */}
      <div className="flex justify-around gap-3 max-1200:justify-between max-900:flex-col max-900:gap-10 max-900:items-center max-600:px-3">

        {/* Card 1 */}
        <div className="flex flex-col justify-between shadow-md font-gilroy w-[350px] h-[540px] p-9 max-1200:px-5 rounded-3xl">  
          <div className="flex flex-col justify-start gap-6">
            {/* Plan Title */}
            <div className="flex items-center justify-start gap-3">
              <img className="w-16 h-16 max-1200:w-12 max-1200:h-12" src={pricingImage} alt="Pricing image" />
              <h3 className="text-3xl font-semibold text-main max-1200:text-2xl">Basic Plan</h3>
            </div>

            <div>
              <span className="text-2xl font-bold">$45</span><span className="font-medium text-[#494949]">/ 4 classes</span>
            </div>

            <hr className=" border-t-2 border-[#C3C3C3]" />

            <div className="font-semibold text-main">What's Included</div>
            <div className="flex flex-col gap-4">
              {/* Included Items in Plan */}
              <div className="flex gap-3 font-poppins">
                <img className="w-5 h-5" src={pricingTick} alt="Tick icon" />
                <span className="text-sm font-normal">$11.25 per class</span>
              </div>
              <div className="flex gap-3 font-poppins">
                <img className="w-5 h-5" src={pricingTick} alt="Tick icon" />
                <span className="text-sm font-normal">24/7 Support</span>
              </div>
              <div className="flex gap-3">
                <img className="w-5 h-5" src={pricingTick} alt="Tick icon" />
                <span className="text-sm font-normal">Lorem Ipsum is simply dummy text</span>
              </div>
            </div>
          </div>
          {/* Get Started Button */}
          <div className="w-full font-poppins">
            <Button text="Get Started!" variant="inline" onClick={(e) => {handlePricingClick(e, "Basic")}} buttonClasses="!w-full !px-8 font-medium !rounded-md !text-base" wrapperClasses="!rounded-md !w-full"/>          </div>
        </div>
        
        {/* Card 2 */}
        <div className="flex flex-col relative text-white justify-between shadow-md font-gilroy w-[350px] h-[540px] bg-[#B772FF] pricing-bg p-9 rounded-3xl">  
          <div className="flex flex-col justify-start gap-6">
            {/* Plan Title */}
            <div className="flex items-center justify-start h-16 gap-3 max-1200:h-12">
              <h3 className="text-4xl font-semibold text-white max-1200:text-3xl">Premium Plan</h3>
            </div>

            <div>
              <span className="text-3xl font-bold">$90</span><span className="font-medium text-white">/ 10 classes</span>
            </div>

            <hr className=" border-t-2 border-[#C3C3C3]" />

            <div className="font-semibold">What's Included</div>
            <div className="flex flex-col gap-4">
              {/* Included Items in Plan */}
              <div className="flex gap-3">
                <img className="w-5 h-5" src={premiumTick} alt="Tick icon" />
                <span className="text-sm font-normal font-poppins">$9 per class</span>
              </div>
              <div className="flex gap-3 font-poppins">
                <img className="w-5 h-5" src={premiumTick} alt="Tick icon" />
                <span className="text-sm font-normal">24/7 Support</span>
              </div>
              <div className="flex gap-3">
                <img className="w-5 h-5" src={premiumTick} alt="Tick icon" />
                <span className="text-sm font-normal">Lorem Ipsum is simply dummy text</span>
              </div>
              <div className="flex gap-3">
                <img className="w-5 h-5" src={premiumTick} alt="Tick icon" />
                <span className="text-sm font-normal">Lorem Ipsum is simply dummy text</span>
              </div>
            </div>
          </div>
          {/* Get Started Button */}
          <div className="w-full font-poppins">
            <Button text="Get Started!" variant="border" onClick={(e) => {handlePricingClick(e, "Premium")}} buttonClasses="!w-full !bg-white !px-8 font-semibold !rounded-md !text-base" wrapperClasses="!bg-white !rounded-md !w-full"/>
          </div>

          {/* Most Popular tag */}
          <div className="absolute top-3 right-3 py-[2px] text-sm font-bold text-black bg-white px-7 font-gilroy rounded-3xl">
              Most Popular
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between shadow-md font-gilroy w-[350px] h-[540px] p-9 rounded-3xl">  
          <div className="flex flex-col justify-start gap-6">
            {/* Plan Title */}
            <div className="flex items-center justify-start gap-3">
              <img className="w-16 h-16 max-1200:w-12 max-1200:h-12" src={pricingImage} alt="Pricing image" />
              <h3 className="text-3xl font-semibold text-main max-1200:text-2xl">Ultimate Plan</h3>
            </div>

            <div>
              <span className="text-3xl font-bold">$170</span><span className="font-medium text-[#494949]">/ 24 classes</span>
            </div>

            <hr className=" border-t-2 border-[#C3C3C3]" />

            <div className="font-semibold text-main">What's Included</div>
            <div className="flex flex-col gap-4">
              {/* Included Items in Plan */}
              <div className="flex gap-3 font-poppins">
                <img className="w-5 h-5" src={pricingTick} alt="Tick icon" />
                <span className="text-sm font-normal">$7 per class</span>
              </div>
              <div className="flex gap-3 font-poppins">
                <img className="w-5 h-5" src={pricingTick} alt="Tick icon" />
                <span className="text-sm font-normal">24/7 Support</span>
              </div>
              <div className="flex gap-3">
                <img className="w-5 h-5" src={pricingTick} alt="Tick icon" />
                <span className="text-sm font-normal">Lorem Ipsum is simply dummy text</span>
              </div>
              <div className="flex gap-3">
                <img className="w-5 h-5" src={pricingTick} alt="Tick icon" />
                <span className="text-sm font-normal">Lorem Ipsum is simply dummy text</span>
              </div>
            </div>
          </div>
          {/* Get Started Button */}
          <div className="w-full font-poppins">
            <Button text="Get Started!" variant="inline" onClick={(e) => {handlePricingClick(e, "Ultimate")}} buttonClasses="!w-full !px-8 font-medium !rounded-md !text-base" wrapperClasses="!rounded-md !w-full" />
          </div>
        </div>
      
      </div>
      


    </section>
  );
}

export default PricingSection;
