const hexNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

export class HexFlipper {
  #btnEl;
  #colorEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#btnEl = document.getElementById("btn");
    this.#colorEl = document.querySelector(".color");
  }

  #addEvent() {
    this.#btnEl.addEventListener("click", () => {
      let hexColor = "#";
      let getRandomNumber = Math.floor(Math.random() * hex.length);

      for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber];
      }

      this.#colorEl.textContent = hexColor;
      document.body.style.backgroundColor = hexColor;
    });
  }
}
