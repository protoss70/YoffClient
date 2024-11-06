import React from "react";

const Scheduled_Class: React.FC = () => {

  return (
    <div className="relative flex flex-col justify-start gap-3 p-6 bg-white rounded-lg shadow-lg font-gilroy w-max">
        <h1 className="text-3xl font-bold">Spanish Class</h1>
        <div className="flex justify-between gap-10">
            <div>
                <div className="flex gap-2"><span className="font-bold">Teacher:</span><span className="font-semibold text-blue-600 underline hover:cursor-pointer">Robb Stark</span></div>
                <div className="flex gap-2"><span className="font-bold">Duration:</span><span>30 minutes</span></div>
            </div>
            <div>
                <div className="flex gap-2"><span className="font-bold">Date:</span><span>15/11/2024</span></div>
                <div className="flex gap-2"><span className="font-bold">Time:</span><span>15:30 GMT+1</span></div>
            </div>
        </div>
        <div className="flex justify-end">
            <button className="p-2 text-white transition-all duration-200 rounded-lg bg-danger hover:bg-danger-dark">Cancel Class</button>
        </div>
    </div>
  );
};

export default Scheduled_Class;