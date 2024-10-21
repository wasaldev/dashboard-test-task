import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to conditionally merge class names.
 *
 * This function combines class names using `clsx` to handle conditional logic
 * and merges Tailwind CSS classes using `twMerge` to avoid conflicts with
 * Tailwind's utility classes.
 *
 * @param {...ClassValue[]} inputs - A list of class names or conditional class objects.
 * @returns {string} The merged and resolved class names as a single string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
