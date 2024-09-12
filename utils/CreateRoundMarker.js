export class createRoundMarker {
  constructor(value, rectWidth, targetNumber) {
    this.value = value;
    this.rectWidth = rectWidth;
    this.targetNumber = targetNumber;
    this.init();
  }
  init() {
    const round = document.createElement("div");
    round.className = "round";

    round.style.position = "absolute";
    round.style.width = "15px";
    round.style.height = "15px";
    round.style.borderRadius = "100px";
    round.style.top = "11px";

    // Calculate the position based on the input value
    let position = (this.value / 500) * (this.rectWidth - 7);

    if (this.value < 10) {
      position = "10px";
    }

    round.style.left = `${position - 10}px`;

    const rectangle = document.querySelector("#rectangle");
    rectangle.appendChild(round);

    if (this.value > this.targetNumber) {
      round.style.backgroundColor = "red";
    }

    if (this.value < this.targetNumber) {
      round.style.backgroundColor = "blue";
    }

    if (this.value === this.targetNumber) {
      round.style.backgroundColor = "green";
    }
  }
}
