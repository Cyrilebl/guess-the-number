const applyTheme = (theme) => {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);

  localStorage.setItem("theme", theme);
};

const toggleTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
};

export const initializeTheme = () => {
  const theme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  applyTheme(theme);

  document
    .getElementById("theme-toggle-btn")
    .addEventListener("click", toggleTheme);
};

initializeTheme();
