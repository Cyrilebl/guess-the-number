import "./style.css";

import { backToMainPage, startButton } from "./features/pageChanges.js";
import { initializeTheme } from "./features/theme.js";
import { startGame } from "./game/startGame.js";

// Light and Dark mode
initializeTheme();

startButton();
backToMainPage();

document.getElementById("guessForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const input = formData.get("guess");
  startGame(input);
});
