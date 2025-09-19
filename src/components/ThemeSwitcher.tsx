import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Helper to update the browser toolbar color
  const updateMetaThemeColor = (dark: boolean) => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', dark ? '#1B1C1E' : '#907E5A'); // dark/light colors from your theme
    }
  };

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

    // Update toolbar color
    updateMetaThemeColor(initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";

    // Apply theme
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);

    // Update toolbar color dynamically
    updateMetaThemeColor(!isDarkMode);
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