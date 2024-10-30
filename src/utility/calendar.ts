import moment from 'moment-timezone';

// Define the structure of the schedule entries
interface ScheduleEntry {
  date: string; // Format: 'YYYY-MM-DD'
  hours: string[]; // Format: ['HH:mm GMT+1', ...]
}

// Helper function to determine the day change after adding time difference
function checkDayChange(hour: string, diff: number): -1 | 0 | 1 {
    // Parse the hour string into a moment object
    const hourMoment = moment(hour, 'HH:mm');
  
    // Add the time difference (in hours) to the hour
    const newHourMoment = hourMoment.clone().add(diff, 'hours');
  
    // Compare the dates
    const originalDate = hourMoment.date();
    const newDate = newHourMoment.date();
  
    if (newDate > originalDate) {
      return 1; // New time is the next day
    } else if (newDate < originalDate) {
      return -1; // New time is the previous day
    } else {
      return 0; // New time is the same day
    }
  }

  function handleDateDiff(date: string, diff: -1 | 0 | 1) {
    // Adjust date based on dayDiff
    const adjustedDate = moment(date); // Create a moment object from the date string
    if (diff === 1) {
        // Next day
        adjustedDate.add(1, 'days');
    } else if (diff === -1) {
        // Previous day
        adjustedDate.subtract(1, 'days');
    }
    return adjustedDate.format('YYYY-MM-DD'); // Return the formatted date string
}

function adjustHourByDiff(hour: string, diff: number): string {
    // Parse the hour string into a moment object
    const hourMoment = moment(hour, 'HH:mm');

    // Add the diff (which can be negative or positive) to the hour
    hourMoment.add(diff, 'hours');

    // Return the adjusted hour as a formatted string
    return hourMoment.format('HH:mm');
}

// Function to adjust the schedule based on a time zone
export function adjustScheduleByTimeZone(oldTimeZone: string, newTimeZone: string, schedule: ScheduleEntry[]): ScheduleEntry[] {
    // Get the current date to calculate the time difference
    const now = moment.tz(oldTimeZone);
    
    // Populate newVals with dates from 2 days before today to 15 days in the future
    const startDate = now.clone().subtract(2, 'days'); // Start from 2 days before
    const endDate = now.clone().add(16, 'days'); // End at 15 days in the future
    const newVals: ScheduleEntry[] = [];
  
    // Create date entries
    for (let m = startDate; m.isBefore(endDate); m.add(1, 'days')) {
      newVals.push({ date: m.format('YYYY-MM-DD'), hours: [] }); // Keep hours empty
    }
  
    // Calculate the time difference in hours
    const oldOffset = now.utcOffset();
    now.tz(newTimeZone); // Change to the new time zone
    const newOffset = now.utcOffset();
    
    // Time difference in hours
    const timeDiff: number = (newOffset - oldOffset) / 60;

    // Map through the schedule to adjust hours and dates
    schedule.forEach((entry) => {
      entry.hours.forEach(hour => {
        const dayDiff = checkDayChange(hour, timeDiff); 
        const newHour = adjustHourByDiff(hour, timeDiff);

        // Get the new date after handling day difference
        const newDate = handleDateDiff(entry.date, dayDiff);

        // Find the corresponding date entry in newVals
        const existingEntry = newVals.find(val => val.date === newDate);

        if (existingEntry) {
          // If the date exists, add the adjusted hour to that entry
          existingEntry.hours.push(newHour);
        } else {
          // If the date doesn't exist, create a new entry with the hour
          newVals.push({ date: newDate, hours: [newHour] });
        }
      });
    });

    return newVals;
}


