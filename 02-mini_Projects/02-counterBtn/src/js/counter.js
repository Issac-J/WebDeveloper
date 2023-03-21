export class Counter {
  // Variables
  #count;
  #value;
  #btns;

  constructor() {
    this.#count = 0;

    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#value = document.getElementById("value");
    this.#btns = document.querySelectorAll(".btn");
  }

  #addEvent() {
    this.#btns.forEach((btn) => {
      btn.addEventListener("click", (el) => {
        const styles = el.currentTarget.classList;

        // Case: decrease
        if (styles.contains("decrease")) {
          this.#count--;
          console.log(this.#count);
        }
        // Case: increase
        else if (styles.contains("increase")) {
          this.#count++;
          console.log(this.#count);
        }
        // Case: reset
        else {
          this.#count = 0;
          console.log(this.#count);
        }

        if (this.#count > 0) this.#value.style.color = "Green";
        else if (this.#count < 0) this.#value.style.color = "Red";
        else this.#value.style.color = "#222";

        this.#value.textContent = this.#count;
      });
    });
  }
}
