import arrowLeft from "../../assets/hero_page/arrowLeft.png"

function TeachersSection() {
  return (
    <section className="px-24 mt-40 min-w-96">
        {/* Title */}
        <div className="flex items-center justify-between text-6xl font-bold font-gilroy">
            <h1>
                <span className="text-main">
                    Expert&nbsp;
                    <span className="underline--double">
                    Teachers&nbsp;
                    </span>
                </span>
                from <br />Around the World
            </h1>
            {/* Arrows */}
            <div className="flex justify-between gap-3">
                <div className="p-4 flex justify-center items-center hover:cursor-pointer w-[45px] h-[45px] rounded-full bg-gradient-to-r from-main to-secondary">
                    <img src={arrowLeft} alt="right arrow" className="mr-1"/>
                </div>
                <div className="p-4 rotate-180 flex justify-center items-center hover:cursor-pointer w-[45px] h-[45px] rounded-full bg-gradient-to-r from-main to-secondary">
                    <img src={arrowLeft} alt="right arrow" className="mr-1"/>
                </div>
            </div>
        </div>
     </section>
  );
}

export default TeachersSection;
