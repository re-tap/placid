
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to generate placeholder styles with better visibility
export function getPlaceholderStyle(isDarkMode: boolean = true) {
  return isDarkMode 
    ? "placeholder:text-gray-400 placeholder:opacity-70" 
    : "placeholder:text-gray-600 placeholder:opacity-80";
}
