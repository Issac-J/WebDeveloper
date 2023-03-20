const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

export class ColorFlipper {
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
      const randomNumber = Math.floor(Math.random() * colors.length);
      //   console.log(randomNumber);

      document.body.style.backgroundColor = colors[randomNumber];
      this.#colorEl.innerHTML = colors[randomNumber];
    });
  }
}
