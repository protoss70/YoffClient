import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { Teacher } from '../../utility/types';
import { useAuth } from '../../context/authContext';
import { createScheduleModalEvent } from '../../utility/modal_utils';
import { useNavigate } from 'react-router-dom';
import { postScheduledClasses } from '../../api/schedule/postSchedule';
import { handleScheduleNotification } from '../../utility/SchedulingErrorMessages';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

interface CalendarProps {
  initialSchedule: string[];
  teacher: Teacher,
  teacherImage: string
}

const Calendar: React.FC<CalendarProps> = ({initialSchedule, teacher, teacherImage}) => {
  // Get today's date
  const today = new Date();
  const todayString = `${today.getDate()} ${today.toLocaleString('en-US', { weekday: 'short' }).toUpperCase()}`;

  const { t } = useTranslation();

  const { userData, currentUser } = useAuth();

  // Create an array for the next 14 days
  const dateRange = Array.from({ length: 14 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Get the day name in uppercase
    const dayName = date.toLocaleString('en-US', { weekday: 'short' }).toUpperCase();
    // Get the full date string in 'YYYY-MM-DD' format
    const fullDate = date.toISOString().split('T')[0];
    // Get the date number
    const dayNumber = date.getDate();

    return { dayName, dayNumber, dateString: `${dayNumber} ${dayName}`, fullDate };
  });

  // State to manage the current index of the displayed dates
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to manage the selected time zone
  const [selectedTimezone, setSelectedTimezone] = useState<string>('Africa/Abidjan');
  // State to manage the schedule with converted times
  const [schedule, setSchedule] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setSelectedTimezone(userTimeZone); // Set the user's timezone as the selected timezone
  
    // Convert all ISO strings in the schedule to the user's local timezone with the correct GMT offset
    const adjustedSchedule = initialSchedule.map((isoString) => {
      const momentTime = moment(isoString).tz(userTimeZone);
      return momentTime.format('YYYY-MM-DDTHH:mm:ssZ'); // Save as date string with GMT offset
    });
  
    setSchedule(adjustedSchedule); // Set the adjusted schedule with the full date string
  }, []);

  // Function to go to the next set of dates
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 7, dateRange.length - 7));
  };

  // Function to go to the previous set of dates
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 7, 0));
  };

  // Get the current set of dates to display
  const displayedDates = dateRange.slice(currentIndex, currentIndex + 7);

  // Time zone options with GMT offsets
  const timeZoneOptions = moment.tz.names().map(zone => {
    const offset = moment.tz(zone).utcOffset();
    const sign = offset >= 0 ? '+' : '-';
    const absOffset = Math.abs(offset);
    const hours = String(Math.floor(absOffset / 60)).padStart(2, '0');
    const minutes = String(absOffset % 60).padStart(2, '0');
    return {
      value: zone,
      label: `${zone} GMT ${sign}${hours}:${minutes}`
    };
  });

  async function handlePostScheduleClass(date: string, language: string, isDemoClass: boolean, t: TFunction){
    if (!userData || !currentUser) return false;
    
    const token = await currentUser.getIdToken();
    if (!token) return false;
    try{
      const response = await postScheduledClasses(date, teacher._id, userData._id, language, token, isDemoClass);
      if (!response){
        return false
      }

      handleScheduleNotification(response.code, t);
      return response.success;
    }catch{
      return false;
    }
  }

  function onDateClick(date: string, isOccupied: boolean){
    if (isOccupied) return;
    if (!userData) {
      navigate("/login");
      return;
    };
    createScheduleModalEvent(
      async (language: string, isDemoClass: boolean) => { return await handlePostScheduleClass(date, language, isDemoClass, t)}, 
      teacher.name,  // name
      teacher.surname, // surname
      teacher.languages, // languages
      date, // date
      teacherImage, // teacherImage
      !userData.demoClass // isDemoCredit
    );
  }

  useEffect(() => {
    const adjustedSchedule = initialSchedule.map((isoString) => {
      const momentTime = moment(isoString).tz(selectedTimezone);
      return momentTime.format('YYYY-MM-DDTHH:mm:ssZ'); // Convert to string with timezone offset
    });
    setSchedule(adjustedSchedule);
  }, [selectedTimezone]);

  return (
    <div className='flex flex-col items-center gap-4 w-max'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center justify-start w-full'>
          <button
            className={`w-10 h-8 border rounded-s-lg bg-white border-custom_gray ${currentIndex === 0 ? "!bg-gray-400" : ""}`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &lt;
          </button>

          <button
            onClick={handleNext}
            className={`w-10 h-8 border rounded-e-lg bg-white border-custom_gray ${currentIndex >= dateRange.length - 7 ? "!bg-gray-400" : ""}`}
            disabled={currentIndex >= dateRange.length - 7}
          >
            &gt;
          </button>

          <div className='ml-5'>
          <div className='ml-5'>
          {displayedDates[0] ? `${t(`calendar.${displayedDates[0].dayName}`)} ${displayedDates[0].dayNumber}` : ""} - 
          {displayedDates[6] ? ` ${t(`calendar.${displayedDates[6].dayName}`)} ${displayedDates[6].dayNumber}` : ""}, 
          {new Date(today).getFullYear()}
        </div>
          </div>
        </div>

        <select
          value={selectedTimezone}
          onChange={(e) => {
            setSelectedTimezone(e.target.value);
          }}
          className="p-2 ml-4 border rounded-md"
        >
          {timeZoneOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className='flex gap-1'>
        {displayedDates.map(({ dayName, dayNumber, dateString, fullDate }) => (
          <div
            className={`flex flex-col items-center px-8 py-2 border-t-4 font-gilroy ${
              schedule.some(item => item.split('T')[0] === fullDate)
                ? "border-t-main"
                : "border-t-custom_gray"
            }`}
            key={dateString}
          >
            <span className={`text-lg ${todayString === dateString ? 'text-main' : ''}`}>{t(`calendar.${dayName}`)}</span>
            <span className={`text-lg ${todayString === dateString ? 'text-main' : ''}`}>{dayNumber}</span>
            <div className="flex flex-col w-full gap-2 mt-1">
            {schedule
  .filter(item => item.split('T')[0] === fullDate) // Filter schedule items matching the full date
  .map((time, index) => {
    const momentTime = moment(time).tz(selectedTimezone);

    // Normalize the comparison to ISO string format
    const isOccupied = Array.isArray(teacher.occupiedClassDates) && 
      teacher.occupiedClassDates.some(occupied => 
        new Date(occupied.date).toISOString() === new Date(time).toISOString()
      );

    return (
      <span
        key={index}
        onClick={() => onDateClick(time, isOccupied)}
        className={`text-sm font-semibold hover:cursor-pointer font-poppins p-0 h-4 border-b-[1px] w-9 text-center border-custom_gray ${
          isOccupied ? '!text-danger !border-b-danger hover:!cursor-default' : '' // Add 'red' class if the time is in the occupied dates
        }`}
      >
        {momentTime.format('HH:mm')}
      </span>
    );
  })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
