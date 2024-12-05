import React, { useState } from "react";
import { ScheduledClassType } from "../../utility/types";
import { adjustForUserTimeZone, formatIsoDate } from "../../utility/dates";
import { deleteScheduledClass } from "../../api/schedule/deleteSchedule";
import { createNotificationEvent, createPopupEvent } from "../../utility/modal_utils";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

interface ScheduledClassProps {
  data: ScheduledClassType;
  token: string;
  userId: string;
}

const Scheduled_Class: React.FC<ScheduledClassProps> = ({ data, token, userId }) => {
  const teacherData = data.teacherDetails;
  const [isDeleted, setIsDeleted] = useState(false);

  const { t } = useTranslation();

  const date = new Date(data.date);
  const _date = adjustForUserTimeZone(date);

  // Check if the class is in the past
  const classIsInPast = new Date() > date;

  async function handleDelete() {
    const result = await deleteScheduledClass(data._id, token, userId, teacherData._id);
    setIsDeleted(result);
    if (result) {
      createNotificationEvent(
        t("notifications.scheduledClass.classCanceled.title"),
        t("notifications.scheduledClass.classCanceled.description"),
        "success"
      );
    } else {
      createNotificationEvent(
        t("notifications.scheduledClass.classCanceledError.title"),
        t("notifications.scheduledClass.classCanceledError.description"),
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

  function translateLanguageAndLevel(lang: string){
    const langSplit = lang.split(" ");
    const langNameTranslation = t(`allLanguages.${langSplit[0]}`);
    const langLevel = langSplit[1];
    const langLevelTranslation = t(`allLanguageLevels.${langLevel.replace(/[()]/g, '').trim().toLowerCase()}`)

    return `${langNameTranslation} (${langLevelTranslation})`;
  }

  function handleCancelClick() {
    createPopupEvent(
      t("popup.cancelClass.title"),
      t("popup.cancelClass.description", {language: translateLanguageAndLevel(data.language), name: teacherData.name}),
      {
        success: { text: t("popup.cancelClass.success"), type: "danger" },
        cancel: { text: t("popup.cancelClass.cancel"), type: "secondary" },
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
      <h1 className="text-3xl font-bold">{t(`allLanguages.${data.language.split(" ")[0]}`)} {t("classDetails.title")}</h1>
      <div className="flex justify-between gap-10">
        <div>
          <div className="flex gap-2">
            <span className="font-bold">{t("classDetails.teacher")}</span>
            <Link className='font-semibold text-blue-600 underline hover:cursor-pointer' to={`/teacher/${teacherData._id}`}>{teacherData.name} {teacherData.surname}</Link>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">{t("classDetails.duration")}</span>
            <span>{data.isDemoClass ? t("classDetails.demoDurationValue") : t("classDetails.durationValue")}</span>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <span className="font-bold">{t("classDetails.date")}</span>
            <span>{formatIsoDate(_date.date)}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold">{t("classDetails.time")}</span>
            <span>{`${_date.time} - ${endTime}`}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
      <button
        onClick={handleCancelClick}
        className={`p-2 text-white transition-all duration-200 rounded-lg ${
          classIsInPast ? "bg-gray-400" : "bg-danger hover:bg-danger-dark"
        }`}
        disabled={classIsInPast}  // Disable button if the class is in the past
      >
        {t("classDetails.cancelClass")}
      </button>
      </div>
    </div>
  );
};

export default Scheduled_Class;
