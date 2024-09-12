import { createRoundMarker } from "../utils/CreateRoundMarker";
import {
  getCounter,
  getTargetNumber,
  incrementCounter,
  startNewGame,
} from "./newGame.js";

export const startGame = (input) => {
  const resultDiv = document.querySelector("#result");
  resultDiv.textContent = "";

  const result = document.createElement("p");
  resultDiv.appendChild(result);

  if (input === "") {
    result.textContent = `❌ Please enter a number.`;
    return;
  }

  document.querySelector("#guess").value = "";

  if (!Number.isInteger(Number(input)) || input > 500 || input < 0) {
    result.textContent = `❌ ${input} is not a valid answer`;
    return;
  }

  // Create a new round for each guess
  const rectWidth = document.querySelector("#rectangle").offsetWidth;
  new createRoundMarker(Number(input), rectWidth, getTargetNumber());

  incrementCounter();

  if (input < getTargetNumber()) {
    result.textContent = `📉 ${input} is too low`;
    return;
  }
  if (input > getTargetNumber()) {
    result.textContent = `📈 ${input} is too high`;
    return;
  }
  result.innerText = `🥳 Congratulations! The target number was ${input}.
📊 You succeeded in ${getCounter()} attempts.
`;

  const replayBtn = document.querySelector("#replay");
  replayBtn.classList.remove("hidden");

  // Empêcher les attachements multiples
  replayBtn.removeEventListener("click", startNewGame);
  replayBtn.addEventListener("click", startNewGame);
};
