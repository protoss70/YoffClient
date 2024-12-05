import { TFunction } from "i18next";
import { createNotificationEvent } from "./modal_utils";


export function handleScheduleNotification(code: number, t: TFunction){
    console.log(code);
    if (code === 402){
        createNotificationEvent(
            t("notifications.schedulingSystem.creditsError.title"),
            t("notifications.schedulingSystem.creditsError.description"),
            "info",
            8000
        )
    }else if (code === 400){
        createNotificationEvent(
            t("notifications.schedulingSystem.genericError.title"),
            t("notifications.schedulingSystem.genericError.description"),
            "danger",
            8000
        )
    }else if(code === 409){
        createNotificationEvent(
            t("notifications.schedulingSystem.dateError.title"), 
            t("notifications.schedulingSystem.dateError.description"), 
            "info", 
            8000)
    }
    else if(code === 201){
        createNotificationEvent(
            t("notifications.schedulingSystem.scheduleSuccess.title"), 
            t("notifications.schedulingSystem.scheduleSuccess.description"), 
            "success", 
            6000)
    }
}