import React from "react";
import teacherProfileBg from "../assets/teacherprofile/teacher_Profile_Bg.png";
import teacher1 from "../assets/hero_page/teacherImage1.png";
import netherlandsFlag from "../assets/flags/Netherlands.png"
import germanFlag from "../assets/flags/German.png"
import czechFlag from "../assets/flags/Czech.png"
import spanishFlag from "../assets/flags/Spanish.png"
import Tooltip from '@mui/material/Tooltip';

const TeacherProfile: React.FC = () => {

  return (
    <main className="relative flex flex-col items-center justify-center gap-5 px-24 pt-32 pb-24 max-1300:px-12 max-900:px-6">
      		{/* Teacher Image */}
			<div className="flex justify-start w-full">
				<div className="p-2 border rounded-full border-main">
					<img className="w-72" src={teacher1} alt="Teacher profile picture" />
				</div>
			</div>

				{/* Teacher Top Bio */}
			<div className="flex justify-between w-full ml-4 max-800:flex-col max-800:justify-center">
				<div>
					<div className="text-5xl font-bold font-gilroy">
						Sara grey
					</div>
					<div className=" text-2xl font-gilroy font-medium opacity-50 text-[#222222]">
						Germany
					</div>
				</div>

				{/* CTA */}
				<div className="flex items-center max-800:mt-5">
					<button className='px-5 py-3 text-lg font-medium text-center text-white transition-all duration-1000 shadow-inner max-800:basis-1/2 bg-gradient-to-r from-main to-secondary rounded-xl'>
						Schedule Class
					</button>
					<button className='px-5 py-3 ml-3 text-lg font-medium text-center transition-all duration-1000 bg-white border max-800:basis-1/2 border-main text-main rounded-xl'>
						Send Message
					</button>
				</div>
			</div>

			{/* BIO */}
			<div className="ml-3">
				<h3 className="w-full text-2xl font-semibold text-start font-gilroy text-main">BIO</h3>
				<div className="leading-7 font-montserrat">
					Lorem ipsum dolor sit amet, cons adipiscing elit. Maecenas ut tu volutpat commodo port ut ligula. ipsum vel mollis vulputate, mi lorem eleife, venenatis sagittis nisl ipsu Lorem ipsum dolor sit amet, cons adipiscing elit. Maecenas ut tu volutpat commodo port ut ligula. ipsum vel mollis vulputate, mi lorem eleife, venenatis sagittis nisl ipsu Lorem ipsum dolor sit amet, cons adipiscing elit. Maecenas ut tu volutpat commodo port ut ligula. ipsum vel mollis vulputate, mi lorem eleife, venenatis sagittis nisl ipsu Lorem ipsum dolor sit amet, cons adipiscing elit. Maecenas ut tu volutpat commodo port ut ligula. ipsum vel mollis vulputate, mi lorem eleife, venenatis sagittis nisl ipsu 
				</div>
			</div>

			{/* Bottom Info */}
			<div className="flex justify-between w-full ml-6 gap-7 max-1000:flex-wrap max-1000:flex-row max-800:flex-col-reverse">
				<div className="basis-1/3 max-1000:basis-1/2">
					<h3 className="w-full text-2xl font-semibold text-start font-gilroy text-main">Education</h3>
					<div className="font-gilroy font-semibold text-[#222222] text-lg">
					Master's Degree in Linguistics from the University of Milan teaching certifications
					</div>
				</div>

				<div className="basis-1/3">
					<h3 className="w-full text-2xl font-semibold text-start font-gilroy text-main">Hobbies</h3>
					<div className="font-gilroy font-semibold text-[#222222] text-lg">
						Cooking, Hiking,  Dancing, Painting
					</div>
				</div>

				<div className="basis-1/3">
					<h3 className="w-full text-2xl font-semibold text-start font-gilroy text-main">Languages</h3>
					<div className="flex justify-start gap-5">
						<div className="flex gap-5 pt-1">
							<Tooltip title="German">
								<img src={germanFlag} alt="german flag" className="w-10" />
							</Tooltip>
							<Tooltip title="Spanish">
								<img src={spanishFlag} alt="spanish flag" className="w-10" />
							</Tooltip>
							<Tooltip title="Dutch">
								<img src={netherlandsFlag} alt="netherlands flag" className="w-10" />
							</Tooltip>
							<Tooltip title="Czech">
								<img src={czechFlag} alt="czech flag" className="w-10" />
							</Tooltip>
						</div>
					</div>
				</div>
			</div>

      {/* Teacher profile top bg image */}
			<div className="absolute top-0 left-0 w-full h-64 rounded-xl -z-10 bg-gradient-to-r from-main to-secondary">
      	<img src={teacherProfileBg} alt="Purple design" className="absolute top-0 left-0 w-full h-64" />
			</div>
    </main>
  );
};

export default TeacherProfile;
