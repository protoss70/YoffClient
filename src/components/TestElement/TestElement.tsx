import React from 'react';
import { createNotificationEvent } from '../../utility/modal_utils';
import { useTranslation } from 'react-i18next';

const TestElement: React.FC = () => {
  const {t} = useTranslation();
  function callCreateNotif(n: number) {
    if (n === 1) {
      createNotificationEvent(
        t("notifications.contactSection.formValidation.title"),
        t("notifications.contactSection.formValidation.description"),
        "info",
        15000
      );
    } else if (n === 2) {
      createNotificationEvent(
        t("notifications.contactSection.messageConfirmation.title"),
        t("notifications.contactSection.messageConfirmation.description"),
        "success",
        15000
      );
    } else if (n === 3) {
      createNotificationEvent(
        t("notifications.contactSection.messageError.title"),
        t("notifications.contactSection.messageError.description"),
        "danger",
        15000
      );
    } else if (n === 4) {
      createNotificationEvent(
        t("notifications.pricingSection.paymentDown.title"),
        t("notifications.pricingSection.paymentDown.description"),
        "info",
        15000
      );
    } else if (n === 5) {
      createNotificationEvent(
        t("notifications.scheduledClass.classCanceled.title"),
        t("notifications.scheduledClass.classCanceled.description"),
        "success",
        15000
      );
    } else if (n === 6) {
      createNotificationEvent(
        t("notifications.scheduledClass.classCanceledError.title"),
        t("notifications.scheduledClass.classCanceledError.description"),
        "danger",
        15000
      );
    } else if (n === 7) {
      createNotificationEvent(
        t("notifications.sendMessage.messageError.title"),
        t("notifications.sendMessage.messageError.description"),
        "danger",
        15000
      );
    } else if (n === 8) {
      createNotificationEvent(
        t("notifications.sendMessage.recievedMessage.title", { teacherName: "Siker" }),
        t("notifications.sendMessage.recievedMessage.description", { teacherName: "Siker" }),
        "success",
        15000
      );
    } else if (n === 9) {
      createNotificationEvent(
        t("notifications.login.emailLogin.title"),
        t("notifications.login.emailLogin.description", { email: "x@gmail.com" }),
        "success",
        15000
      );
    } else if (n === 10) {
      createNotificationEvent(
        t("notifications.login.loginFailed.title"),
        t("notifications.login.loginFailed.description"),
        "danger",
        15000
      );
    } else if (n === 11) {
      createNotificationEvent(
        t("notifications.login.googleLogin.title"),
        t("notifications.login.googleLogin.description"),
        "success",
        15000
      );
    } else if (n === 12) {
      createNotificationEvent(
        t("notifications.login.loginFailed.title"),
        t("notifications.login.loginFailed.description"),
        "danger",
        15000
      );
    } else if (n === 13) {
      createNotificationEvent(
        t("notifications.register.passwordMatchError.title"),
        t("notifications.register.passwordMatchError.description"),
        "danger",
        15000
      );
    } else if (n === 14) {
      createNotificationEvent(
        t("notifications.register.registerSuccess.title"),
        t("notifications.register.registerSuccess.description"),
        "success",
        15000
      );
    } else if (n === 15) {
      createNotificationEvent(
        t("notifications.register.registerSuccess.title"),
        t("notifications.register.registerSuccess.description"),
        "success",
        15000
      );
    } else if (n === 16) {
      createNotificationEvent(
        t("notifications.register.loginFailed.title"),
        t("notifications.register.loginFailed.description"),
        "danger",
        15000
      );
    } else if (n === 17) {
      createNotificationEvent(
        t("notifications.teacherProfile.selectDate.title"),
        t("notifications.teacherProfile.selectDate.description"),
        "info",
        15000
      );
    } else if (n === 18) {
      createNotificationEvent(
        t("notifications.quickStart.selectLanguage.title"),
        t("notifications.quickStart.selectLanguage.description"),
        "info",
        15000
      );
    } else if (n === 19) {
      createNotificationEvent(
        t("notifications.quickStart.selectDate.title"),
        t("notifications.quickStart.selectDate.description"),
        "info",
        15000
      );
    } else if (n === 20) {
      createNotificationEvent(
        t("notifications.quickStart.selectTeacher.title"),
        t("notifications.quickStart.selectTeacher.description"),
        "info",
        15000
      );
    } else if (n === 21) {
      createNotificationEvent(
        t("notifications.schedulingSystem.creditsError.title"),
        t("notifications.schedulingSystem.creditsError.description"),
        "info",
        15000
      );
    } else if (n === 22) {
      createNotificationEvent(
        t("notifications.schedulingSystem.genericError.title"),
        t("notifications.schedulingSystem.genericError.description"),
        "danger",
        15000
      );
    } else if (n === 23) {
      createNotificationEvent(
        t("notifications.schedulingSystem.dateError.title"),
        t("notifications.schedulingSystem.dateError.description"),
        "info",
        15000
      );
    } else if (n === 24) {
      createNotificationEvent(
        t("notifications.schedulingSystem.scheduleSuccess.title"),
        t("notifications.schedulingSystem.scheduleSuccess.description"),
        "success",
        15000
      );
    }
  }

  
  return (
    <div className='p-40'>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(1) }}>Button 1</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(2) }}>Button 2</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(3) }}>Button 3</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(4) }}>Button 4</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(5) }}>Button 5</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(6) }}>Button 6</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(7) }}>Button 7</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(8) }}>Button 8</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(9) }}>Button 9</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(10) }}>Button 10</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(11) }}>Button 11</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(12) }}>Button 12</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(13) }}>Button 13</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(14) }}>Button 14</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(15) }}>Button 15</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(16) }}>Button 16</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(17) }}>Button 17</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(18) }}>Button 18</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(19) }}>Button 19</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(20) }}>Button 20</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(21) }}>Button 21</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(22) }}>Button 22</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(23) }}>Button 23</button>
    <button className='p-2 m-3 text-white rounded-md bg-slate-500' onClick={() => { callCreateNotif(24) }}>Button 24</button>
  </div>
  );
};

export default TestElement;
