// Utility function to format an ISO date string to dd/mm/yyyy
export const formatIsoDate = (isoDateString: string): string => {
    const date = new Date(isoDateString);
  
    // Extract day, month, and year, and pad with zero if needed
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
  
    // Return formatted date as dd/mm/yyyy
    return `${day}/${month}/${year}`;
  };

// Utility function to adjust date for user's local timezone
export function adjustForUserTimeZone(date: Date) {
  // Ensure the input is a valid Date object
  if (isNaN(date.getTime())) {
    console.error("Invalid date input");
    return { date: "Invalid Date", time: "Invalid Time" };
  }

  // Convert date to the user's local timezone and format
  const localDateString = date.toLocaleDateString(); // User's locale for date
  const localTimeString = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  }); // User's locale for time
  
  return {
    date: localDateString,
    time: localTimeString
  };
}