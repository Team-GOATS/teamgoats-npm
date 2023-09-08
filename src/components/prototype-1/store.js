// Import library that allows us to Create Writable "Stores"
import { writable } from "svelte/store";

// Store the theme in a variable
const storedTheme = localStorage.getItem("theme")

// Create the Writable Store using storedTheme
// Set Key of "theme" and Values of "dark" &/OR "light" 
export const theme = writable(storedTheme);
theme.subscribe(value => {
    localStorage.setItem("theme", value === 'dark' ? 'dark' : 'light');
});

export const storeMode = writable("light");

export default {
	subscribe: storeMode.subscribe,
	toggleThemeLight: () => storeMode.update((themeColor) => "light"),
	toggleThemeDark: () => storeMode.update((themeColor) => "dark"),
};