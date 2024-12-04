import { createNotificationEvent } from "./modal_utils";


const homePageAction = () => {
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
        "Please Select a Language",
        "",
        "info",
        3000
    )
}

export const teacherProfileAction = () => {
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
      "Please Select a Date",
      "",
      "info",
      3000
  )
}

const teacherSelectAction = (navigate: (pathname: string) => void) => {
  const params = new URLSearchParams(location.search); // Parse the query string

  if (params.has("langFilter") && params.get("langFilter")?.trim() !== "") {
    createNotificationEvent(
      "Please Select a Teacher",
      "",
      "info",
      3000
  )
  } else {
    navigate("/#LanguageSelection");
    setTimeout(() => {
        homePageAction();
    }, 100)
  }
}

export const getStartedClick = (location: string, navigate: (pathname: string) => void) => {
  if (location === "/") {
    homePageAction();
  }else if (location === "/teachers") {
    teacherSelectAction(navigate);
  }else if (location.startsWith("/teacher/")){
    teacherProfileAction();
  }else{
    navigate("/");
    homePageAction();
  }
}