export interface Teacher {
    image: string;              // Assuming 'image' is a string (e.g., a URL or path to the image)
    name: string;               // Name of the teacher
    country: string;            // Country of the teacher
    hobbies: string[];          // Array of hobbies
    languages: string[];        // Array of languages
}

export interface LanguageCard {
    language: string;         // The name of the language
    teachersCount: number;    // The number of teachers for that language
    flagSrc: string;          // The source of the flag image
  }