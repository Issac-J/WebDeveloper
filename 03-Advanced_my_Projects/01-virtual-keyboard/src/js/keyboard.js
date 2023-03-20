export class Keyboard {
  #switchEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.getElementById("switch");
  }

  #addEvent() {
    this.#switchEl.addEventListenr("change", () => {
      console.log(123);
    });
  }
}
