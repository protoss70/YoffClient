import { createNotificationEvent } from "./modal_utils";


export function handleScheduleNotification(code: number){
    console.log(code);
    if (code === 402){
        createNotificationEvent(
            "Insufficent Credits",
            "It looks like you don't have enough credits to schedule this class. Please add more credits to continue 😊",
            "info",
            8000
        )
    }else if (code === 400){
        createNotificationEvent(
            "Something Went Wrong",
            "Oops! Something went wrong while scheduling your class. Please try again or contact support if the issue persists 🙁",
            "danger",
            8000
        )
    }else if(code === 409){
        createNotificationEvent(
            "Given Date is Not Available", 
            "It looks like the date you have picked is already booked. Please try booking another date 😊", 
            "info", 
            8000)
    }
    else if(code === 201){
        createNotificationEvent(
            "Class Scheduled", 
            "Your class has been successfully scheduled! We're thrilled to have you as part of our community 🌟", 
            "success", 
            6000)
    }
}