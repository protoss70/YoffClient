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