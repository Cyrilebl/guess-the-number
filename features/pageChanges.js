import { startNewGame } from "../game/newGame.js";

// Changer de page
const startContainer = document.querySelector("#startContainer");
const gameContainer = document.querySelector("#gameContainer");

const toggleVisibility = (hideElement, showElement) => {
  hideElement.classList.add("hidden");
  showElement.classList.remove("hidden");
};

// Click on start button
export const startButton = () => {
  document.querySelector("#start").addEventListener("click", () => {
    toggleVisibility(startContainer, gameContainer);
    startNewGame();
  });
};

// Click on title
export const backToMainPage = () => {
  document.querySelector("#title").addEventListener("click", () => {
    toggleVisibility(gameContainer, startContainer);
    startNewGame();
  });
};
