import React from 'react';
import logo from "../../assets/logo.svg";
import call from "../../assets/call.svg";
import location from "../../assets/location.svg";
import email from "../../assets/mail.svg";
import footerBottomBg from "../../assets/Footer_bottom_bg.png";
import linkedIn from "../../assets/linkedinLink.svg";
import instagram from "../../assets/instagramLink.svg";
import twitter from "../../assets/twitterLink.svg";

const Footer: React.FC = () => {

  return (
    <footer className='relative flex flex-col justify-between w-full pb-16 text-white max-1300:px-14 max-900:px-8 bg-footer px-28 pt-9'>
        {/* Footer Links section */}
        <div className='flex justify-between gap-3 max-900:flex-wrap'>

            {/* Logo section*/}
            <div className='flex flex-col gap-5 max-900:basis-1/3'>
                <img src={logo} alt="Yoff logo" className='w-24'/>
                <div className=' font-poppins'>© 2024 . All rights reserved.</div>
            </div>

            {/* Quick links */} 
            <div className='flex flex-col gap-5 max-900:basis-1/3'>
                <h3 className='text-xl font-semibold max-900:font-bold font-gilroy'>Quick Links</h3>
                <a className='font-poppins hover:underline hover:cursor-pointer' href="/#HeroSection">Home</a>
                <a className='font-poppins hover:underline hover:cursor-pointer' href="/#HowItWorks">How It Works</a>
                <a className='font-poppins hover:underline hover:cursor-pointer' href="/#LanguageSelection">Languages</a>
                <a className='font-poppins hover:underline hover:cursor-pointer' href="/teachers">Teachers</a>
                <a className='font-poppins hover:underline hover:cursor-pointer' href="/#PricingSection">Pricing</a>
            </div>

            {/* Contact Info */}
            <div className='flex flex-col gap-5 max-900:basis-1/3 max-900:mt-6'>
                <h3 className='text-xl font-semibold font-gilroy max-900:font-extrabold'>Contact Information</h3>
                <div className='flex gap-3 ml-1'>
                    <img className='w-4' src={call} alt="phone icon" />
                    845-123-4567
                </div>
                <div className='flex gap-3 ml-1'>
                    <img className='w-4' src={email} alt="phone icon" />
                    www.info@yoffacademy.com
                </div>
                <div className='flex gap-3 ml-1'>
                    <img className='w-4' src={location} alt="phone icon" />
                    Address: 13951 Jefferson Davis Hwy <br /> Woodbridge, VA 22191
                </div>
            </div>

            {/* Help */}
            <div className='flex flex-col gap-5 max-900:basis-1/3 max-900:mt-6'>
            <h3 className='text-xl font-semibold font-gilroy max-900:font-extrabold'>Help</h3>
                <a className='font-poppins hover:underline hover:cursor-pointer' href="/">Help Center</a>
                <a className='font-poppins hover:underline hover:cursor-pointer' href="/">Trust and Safety</a>
                <a className='font-poppins hover:underline hover:cursor-pointer' href="/">Privacy Settings</a>
            </div>
        </div>

        {/* Footer Bottom section */}
        <div className='absolute z-50 flex justify-end gap-5 bottom-3 right-28 max-1100:right-4 max-1300:right-14 max-800:right-5'>
            <div>
                <img className='w-12 max-900:w-10 hover:cursor-pointer max-800:w-11' src={instagram} alt="Instagram icon" />
            </div>
            <div>
                <img className='w-12 max-900:w-10 hover:cursor-pointer max-800:w-11' src={twitter} alt="Twitter icon" />
            </div>
            <div>
                <img className='w-12 max-900:w-10 hover:cursor-pointer max-800:w-11' src={linkedIn} alt="Linkedin icon" />
            </div>
        </div>

        {/* Footer bottom image */}
        <div className='absolute bottom-0 right-0 w-full max-800:right-[83%]'>
            <img className='w-full h-20 max-800:w-[175vw] max-w-none' loading='lazy' src={footerBottomBg} alt="Footer image" />
        </div>
    </footer>
  );
};

export default Footer;
