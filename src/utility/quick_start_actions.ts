import { createNotificationEvent } from "./modal_utils";
import { TFunction } from "i18next";


const homePageAction = (t: TFunction) => {
  const calendarElement = document.getElementById("LanguageSelection");
    if (calendarElement) {
    const yOffset = -100; // Adjust the offset
    const yPosition = calendarElement.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({
        top: yPosition,
        behavior: "smooth", // Smooth scrolling
    });
    }

    createNotificationEvent(
      t("notifications.quickStart.selectLanguage.title"),
      t("notifications.quickStart.selectLanguage.description"),
        "info",
        3000
    )
}

export const teacherProfileAction = (t: TFunction) => {
  const calendarElement = document.getElementById("teacher-calendar");
  if (calendarElement) {
  const yOffset = -200; // Adjust the offset
  const yPosition = calendarElement.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({
      top: yPosition,
      behavior: "smooth", // Smooth scrolling
  });
  }

  createNotificationEvent(
      t("notifications.quickStart.selectDate.title"),
      t("notifications.quickStart.selectDate.description"),
      "info",
      3000
  )
}

const teacherSelectAction = (navigate: (pathname: string) => void, t: TFunction) => {
  const params = new URLSearchParams(location.search); // Parse the query string

  if (params.has("langFilter") && params.get("langFilter")?.trim() !== "") {
    createNotificationEvent(
      t("notifications.quickStart.selectTeacher.title"),
      t("notifications.quickStart.selectTeacher.description"),
      "info",
      3000
  )
  } else {
    navigate("/#LanguageSelection");
    setTimeout(() => {
        homePageAction(t);
    }, 250)
  }
}

export const getStartedClick = (location: string, navigate: (pathname: string) => void, t: TFunction) => {
  if (location === "/") {
    homePageAction(t);
  }else if (location === "/teachers") {
    teacherSelectAction(navigate, t);
  }else if (location.startsWith("/teacher/")){
    teacherProfileAction(t);
  }else{
    navigate("/");
    homePageAction(t);
  }
}