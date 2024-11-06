import React, { useState } from "react";
import { ScheduledClassType } from "../../utility/types";
import { formatIsoDate } from "../../utility/dates";
import { deleteScheduledClass } from "../../api/schedule/deleteSchedule";

interface ScheduledClassProps {
    data: ScheduledClassType,
    token: string,
    userId: string
  }

const Scheduled_Class: React.FC<ScheduledClassProps> = ({data, token, userId}) => {
    const teacherData = data.teacherDetails;
    const [isDeleted, setIsDeleted] = useState(false);

    async function handleDelete(){
        const result = await deleteScheduledClass(data._id, token, userId, teacherData._id);
        setIsDeleted(result);
    } 
  return (
    <div className={`relative flex flex-col justify-start gap-3 p-6 bg-white rounded-lg shadow-lg h-min font-gilroy w-max ${isDeleted ? "hidden" : ""}`}>
        <h1 className="text-3xl font-bold">{data.language} Class</h1>
        <div className="flex justify-between gap-10">
            <div>
                <div className="flex gap-2"><span className="font-bold">Teacher:</span><span className="font-semibold text-blue-600 underline hover:cursor-pointer">{teacherData.name} {teacherData.surname}</span></div>
                <div className="flex gap-2"><span className="font-bold">Duration:</span><span>{data.isDemoClass ? "30 minutes" : "45 minutes"}</span></div>
            </div>
            <div>
                <div className="flex gap-2"><span className="font-bold">Date:</span><span>{formatIsoDate(data.date.date)}</span></div>
                <div className="flex gap-2"><span className="font-bold">Time:</span><span>{data.date.hour}</span></div>
            </div>
        </div>
        <div className="flex justify-end">
            <button onClick={handleDelete} className="p-2 text-white transition-all duration-200 rounded-lg bg-danger hover:bg-danger-dark">Cancel Class</button>
        </div>
    </div>
  );
};

export default Scheduled_Class;