import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const Calendar: React.FC = () => {
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

  // Initial schedule state
  const initialSchedule = [
    { date: '2024-10-29', hours: ['08:15 GMT+1', '11:30 GMT+1', '14:45 GMT+1', '19:00 GMT+1'] },
    { date: '2024-10-30', hours: ['09:05 GMT+1', '12:50 GMT+1', '15:20 GMT+1'] },
    { date: '2024-10-31', hours: ['07:00 GMT+1', '10:15 GMT+1', '13:30 GMT+1', '18:25 GMT+1', '21:00 GMT+1'] },
    { date: '2024-11-01', hours: ['11:00 GMT+1'] },
    { date: '2024-11-02', hours: ['08:30 GMT+1', '11:10 GMT+1', '16:20 GMT+1', '17:45 GMT+1'] },
    { date: '2024-11-03', hours: ['09:15 GMT+1', '12:30 GMT+1', '19:50 GMT+1', '22:15 GMT+1', '23:30 GMT+1', '20:00 GMT+1'] },
    { date: '2024-11-04', hours: ['06:45 GMT+1', '11:00 GMT+1', '15:30 GMT+1', '22:00 GMT+1'] },
    { date: '2024-11-05', hours: ['10:00 GMT+1', '14:45 GMT+1', '16:15 GMT+1', '18:20 GMT+1'] },
    { date: '2024-11-06', hours: ['08:50 GMT+1', '13:00 GMT+1', '17:30 GMT+1'] },
    { date: '2024-11-07', hours: ['09:40 GMT+1', '11:20 GMT+1', '18:00 GMT+1', '21:45 GMT+1', '23:00 GMT+1'] },
    { date: '2024-11-08', hours: ['07:30 GMT+1', '12:40 GMT+1', '15:50 GMT+1', '21:15 GMT+1', '10:30 GMT+1'] },
    { date: '2024-11-09', hours: ['10:10 GMT+1', '13:15 GMT+1', '16:35 GMT+1', '19:45 GMT+1'] },
    { date: '2024-11-10', hours: ['08:20 GMT+1'] },
    { date: '2024-11-11', hours: [] },
    { date: '2024-11-12', hours: ['10:35 GMT+1', '12:55 GMT+1', '18:40 GMT+1', '08:00 GMT+1', '14:15 GMT+1'] },
    { date: '2024-11-13', hours: ['09:00 GMT+1', '11:30 GMT+1', '14:45 GMT+1', '16:00 GMT+1', '19:15 GMT+1', '20:00 GMT+1', '21:30 GMT+1', '22:50 GMT+1'] },
  ];

  // State to manage the current index of the displayed dates
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to manage the selected time zone
  const [selectedTimezone, setSelectedTimezone] = useState<string>('Europe/Budapest');
  // State to manage the schedule with converted times
  const [schedule, setSchedule] = useState(initialSchedule);

  useEffect(() => {
    // Update the schedule when the timezone changes
    const updatedSchedule = initialSchedule.map(({ date, hours }) => {
      const convertedHours = hours.map((hour) => {
        // Extract the time portion and convert it to moment
        const timeInGmtPlus1 = moment.tz(`${date} ${hour.split(" ")[0]}`, 'YYYY-MM-DD HH:mm', 'Europe/Budapest');

        // Convert to the selected timezone
        return timeInGmtPlus1.tz(selectedTimezone).format('HH:mm');
      });

      return { date, hours: convertedHours };
    });

    setSchedule(updatedSchedule);
  }, [selectedTimezone]);

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

  return (
    <div className='flex flex-col items-center gap-4 mt-60 w-max'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center justify-start w-full'>
          <button className={`w-10 h-8 border rounded-s-lg bg-white border-custom_gray ${currentIndex === 0 ? "!bg-custom_gray" : ""}`} onClick={handlePrev} disabled={currentIndex === 0}>
            &lt;
          </button>

          <button onClick={handleNext} className={`w-10 h-8 border rounded-e-lg bg-white border-custom_gray ${currentIndex >= dateRange.length - 7 ? "!bg-custom_gray" : ""}`} disabled={currentIndex >= dateRange.length - 7}>
            &gt;
          </button>

          <div className='ml-5'>
            {displayedDates[0] ? displayedDates[0].dateString : ""} - {displayedDates[6] ? displayedDates[6].dateString : ""}, {new Date(today).getFullYear()}
          </div>
        </div>

        <select 
          value={selectedTimezone} 
          onChange={(e) => setSelectedTimezone(e.target.value)} 
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
          <div className={`flex flex-col items-center px-8 py-2 border-t-4 border-t-main font-gilroy ${schedule.find(item => item.date === fullDate)?.hours.length === 0 ? "border-t-custom_gray" : "border-t-main"}`} key={dateString}>
            <span className={`text-lg ${todayString === dateString ? 'text-main' : ''}`}>{dayName}</span>
            <span className={`text-lg ${todayString === dateString ? 'text-main' : ''}`}>{dayNumber}</span>
            <div className="flex flex-col w-full gap-2 mt-1">
              {schedule.find(item => item.date === fullDate)?.hours.map((hour) => {
                // Extract the time portion and convert it to moment
                const timeInGmtPlus1 = moment.tz(`${fullDate} ${hour.split(" ")[0]}`, 'YYYY-MM-DD HH:mm', 'Europe/Budapest');

                // Convert to the selected timezone
                const convertedTime = timeInGmtPlus1.tz(selectedTimezone);
                const formattedTime = convertedTime.format('HH:mm');

                // Check if the converted time is on the next day
                const isNextDay = convertedTime.date() !== timeInGmtPlus1.date();

                return (
                  <span key={hour} className="text-sm hover:cursor-pointer font-poppins p-0 h-4 border-b-[1px] w-9 text-center border-custom_gray">
                    {isNextDay ? (
                      <span>
                        {formattedTime} (Next Day)
                      </span>
                    ) : (
                      formattedTime
                    )}
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
