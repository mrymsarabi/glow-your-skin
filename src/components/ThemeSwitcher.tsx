import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for a saved theme preference
    const storedTheme = localStorage.getItem("theme");

    // Check for user's system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Determine the initial theme
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    
    // Apply the initial theme
    document.body.setAttribute("data-theme", initialTheme);
    setIsDarkMode(initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className="btn btn-sm btn-outline-dark rounded-circle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeSwitcher;