import React from 'react';
import { createNotificationEvent } from '../../utility/modal_utils';
const TestElement: React.FC = () => {

  function callCreateNotif(n: number){
    if (n === 1){
      createNotificationEvent(
        "Payment System is Down",
        "Oh, it seems our payment system is currently down. Our support team will get in touch with you soon for further information.",
        "info",
        15000
      )
    }else if(n === 2){
      createNotificationEvent(
        "Class Cancelled Successfully",
        "Your class has been cancelled and your credits refunded.",
        "success",
        15000
      );
    }else if(n === 3){
      createNotificationEvent(
        "Failed to cancel class",
        "Oh, something went wrong. Please try again later. If the issue persists please contact support.",
        "danger",
        15000
      );
    }else if(n === 4){
      createNotificationEvent(
        "Login Successful",
        `Succesfully logged into anasiken@gmail.com`,
        "success",
        15000
      );
    }else if(n === 5){
      createNotificationEvent(
        "Login Failed",
        `Something went wrong while logging in`,
        "danger", 
        15000
      );
    }else if(n === 6){
      createNotificationEvent(
        "Insufficent Credits",
        "It looks like you don't have enough credits to schedule this class. Please add more credits to continue 😊",
        "info",
        15000
    )
    }else if(n === 7){
      createNotificationEvent(
        "Something Went Wrong",
        "Oops! Something went wrong while scheduling your class. Please try again or contact support if the issue persists 🙁",
        "danger",
        15000
    )
    }else if(n === 8){
      createNotificationEvent(
        "Given Date is Not Available", 
        "It looks like the date you have picked is already booked. Please try booking another date 😊", 
        "info", 
        15000)
    }else if(n === 9){
      createNotificationEvent(
        "Class Scheduled", 
        "Your class has been successfully scheduled! We're thrilled to have you as part of our community 🌟", 
        "success", 
        15000)
    }
  }

  
  return (
    <div className='p-40'>
      <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => {callCreateNotif(1)}}>button 1</button>
      <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => {callCreateNotif(2)}}>button 2</button>
      <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => {callCreateNotif(3)}}>button 3</button>
      <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => {callCreateNotif(4)}}>button 4</button>
      <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => {callCreateNotif(5)}}>button 5</button>
      <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => {callCreateNotif(6)}}>button 6</button>
      <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => {callCreateNotif(7)}}>button 7</button>
      <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => {callCreateNotif(8)}}>button 8</button>
      <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => {callCreateNotif(9)}}>button 9</button>
    </div>
  );
};

export default TestElement;
