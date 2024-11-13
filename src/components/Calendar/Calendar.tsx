import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

interface CalendarProps {
  initialSchedule: string[];
}

const Calendar: React.FC<CalendarProps> = ({initialSchedule}) => {
  // Get today's date
  const today = new Date();
  const todayString = `${today.getDate()} ${today.toLocaleString('en-US', { weekday: 'short' }).toUpperCase()}`;

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

  useEffect(() => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setSelectedTimezone(userTimeZone); // Set the user's timezone as the selected timezone
  
    // Convert all ISO strings in the schedule to the user's local timezone with the correct GMT offset
    const adjustedSchedule = initialSchedule.map((isoString) => {
      const momentTime = moment(isoString).tz(userTimeZone);
      return momentTime.format('YYYY-MM-DDTHH:mm:ssZ'); // Save as date string with GMT offset
    });
  
    setSchedule(adjustedSchedule); // Set the adjusted schedule with the full date string
    console.log(adjustedSchedule);
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
            {displayedDates[0] ? displayedDates[0].dateString : ""} - {displayedDates[6] ? displayedDates[6].dateString : ""}, {new Date(today).getFullYear()}
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
            <span className={`text-lg ${todayString === dateString ? 'text-main' : ''}`}>{dayName}</span>
            <span className={`text-lg ${todayString === dateString ? 'text-main' : ''}`}>{dayNumber}</span>
            <div className="flex flex-col w-full gap-2 mt-1">
              {schedule
                .filter(item => item.split('T')[0] === fullDate)
                .map((time, index) => {
                  const momentTime = moment(time).tz(selectedTimezone);
                  return (
                    <span key={index} className="text-sm font-semibold hover:cursor-pointer font-poppins p-0 h-4 border-b-[1px] w-9 text-center border-custom_gray">
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
