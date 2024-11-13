import React, { useState } from "react";
import { ScheduledClassType } from "../../utility/types";
import { adjustForUserTimeZone, formatIsoDate } from "../../utility/dates";
import { deleteScheduledClass } from "../../api/schedule/deleteSchedule";
import { createNotificationEvent, createPopupEvent } from "../../utility/modal_utils";

interface ScheduledClassProps {
  data: ScheduledClassType;
  token: string;
  userId: string;
}

const Scheduled_Class: React.FC<ScheduledClassProps> = ({ data, token, userId }) => {
  const teacherData = data.teacherDetails;
  const [isDeleted, setIsDeleted] = useState(false);

  const date = new Date(data.date);
  const _date = adjustForUserTimeZone(date);

  async function handleDelete() {
    const result = await deleteScheduledClass(data._id, token, userId, teacherData._id);
    setIsDeleted(result);
    if (result) {
      createNotificationEvent(
        "Class Cancelled Successfully",
        "Your class has been cancelled and your credits refunded.",
        "success"
      );
    }else{
      createNotificationEvent(
        "Failed to cancel class",
        "Oh, something went wrong. PLease try again later. If the issue persists please contact support.",
        "danger",
        6000
      );
    }
  }

  function calculateEndTime(startTime: Date, durationMinutes: number): string {
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + durationMinutes);
    return endTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
  }

  function handleCancelClick() {
    createPopupEvent(
      "Cancel Class",
      `Are you sure you want to cancel your ${data.language} class with ${teacherData.name}?`,
      {
        success: { text: "Cancel Class", type: "danger" },
        cancel: { text: "Return", type: "secondary" },
      },
      (response: boolean) => {
        if (response) {
          handleDelete();
        }
      }
    );
  }

  const durationMinutes = data.isDemoClass ? 30 : 45;
  const endTime = calculateEndTime(date, durationMinutes);

  return (
    <div
      className={`relative flex flex-col justify-start gap-3 p-6 bg-white rounded-lg shadow-lg h-min font-gilroy w-max ${
        isDeleted ? "hidden" : ""
      }`}
    >
      <h1 className="text-3xl font-bold">{data.language} Class</h1>
      <div className="flex justify-between gap-10">
        <div>
          <div className="flex gap-2">
            <span className="font-bold">Teacher:</span>
            <span className="font-semibold text-blue-600 underline hover:cursor-pointer">
              {teacherData.name} {teacherData.surname}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Duration:</span>
            <span>{data.isDemoClass ? "30 minutes" : "45 minutes"}</span>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <span className="font-bold">Date:</span>
            <span>{formatIsoDate(_date.date)}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Time:</span>
            <span>{`${_date.time} - ${endTime}`}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleCancelClick}
          className="p-2 text-white transition-all duration-200 rounded-lg bg-danger hover:bg-danger-dark"
        >
          Cancel Class
        </button>
      </div>
    </div>
  );
};

export default Scheduled_Class;
