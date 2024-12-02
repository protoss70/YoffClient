export const languageToCountryCode: Record<string, string> = {
    English: 'GB', // Using the UK flag for English
    German: 'DE',
    Dutch: 'NL',
    Czech: 'CZ',
    Spanish: 'ES',
    Portuguese: 'PT',
    French: 'FR',
    Japanese: 'JP',
    Russian: 'RU',
    Italian: 'IT',
    Urdu: 'PK',
    Irish: 'IE',
    Korean: 'KR', // South Korea for Korean
    Arabic: 'AE', // Saudi Arabia for Arabic
    Turkish: 'TR', // Turkey for Turkish
};

export const allLanguages: string[] = [
    "English",
    "Arabic",
    "Korean",
    "Russian",
    "Spanish",
    "Turkish"
]

export type Language = (typeof allLanguages)[number]; // Infer a union type from the array

// Define a mapped type for teacher counts
export const languageTeacherCounts: Record<Language, number> = {
    English: 4,
    Arabic: 3,
    Korean: 2,
    Russian: 2,
    Spanish: 1,
    Turkish: 1,
  };
