import { getRandomInt } from "../utils/getRandomInt";

let targetNumber;
let counter = 0;

export const startNewGame = () => {
  const replayBtn = document.querySelector("#replay");
  replayBtn.classList.add("hidden");

  const resultDiv = document.querySelector("#result");
  resultDiv.textContent = "";

  // Remise à zéro du compteur
  document.querySelector("#attempts").textContent = "0";
  counter = 0;

  // Suppression de tous les ronds
  document.querySelectorAll(".round").forEach((round) => round.remove());

  targetNumber = getRandomInt(500);
};

export const getTargetNumber = () => targetNumber;
export const getCounter = () => counter;
export const incrementCounter = () => {
  counter += 1;
  document.querySelector("#attempts").textContent = counter;
};
