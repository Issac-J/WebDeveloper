export class Keyboard {
  #containerEl;
  #switchEl;
  #fontSelectEl;
  #keyboardEl;
  #inputGroupEl;
  #inputEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#containerEl = document.getElementById("container");
    this.#switchEl = this.#containerEl.querySelector("#switch");
    this.#fontSelectEl = this.#containerEl.querySelector("#font");
    this.#keyboardEl = this.#containerEl.querySelector("#keyboard");
    this.#inputGroupEl = this.#containerEl.querySelector("#input-group");
    this.#inputEl = this.#inputGroupEl.querySelector("#input");
  }

  #addEvent() {
    this.#switchEl.addEventListener("change", this.#onChangeTheme);
    this.#fontSelectEl.addEventListener("change", this.#onChangeFont);
    document.addEventListener("keydown", this.#onKeyDown.bind(this));
    document.addEventListener("keyup", this.#onKeyUp.bind(this));
    this.#inputEl.addEventListener("input", this.#onInput);
    this.#keyboardEl.addEventListener("mousedown", this.#onMouseDown);
    document.addEventListener("mouseup", this.#onMouseUp.bind(this));
  }

  #onMouseUp(event) {
    const keyEl = event.target.closest("div.key");
    const isActive = !!keyEl?.classList.contains("active");
    const value = keyEl?.dataset.val;

    if (isActive && value && value !== "Space" && value !== "Backspace") {
      this.#inputEl.value += value;
    }

    if (isActive && value === "Space") this.#inputEl.value += " ";

    if (isActive && value === "Backspace")
      this.#inputEl.value = this.#inputEl.value.slice(0, -1);

    if (this.#keyboardEl.querySelector(".active")) {
      this.#keyboardEl.querySelector(".active").classList.remove("active");
    }

    /*  Optional Chaining   */
    // this.#keyboardEl.querySelector(".active")?.classList.remove("active");
  }

  #onMouseDown(event) {
    if (event.target.closest("div.key")) {
      event.target.closest("div.key").classList.add("active");
    }

    /*  Optional Chaining   */
    // event.target.closest("div.key")?.classList.add("active");
  }

  #onInput(event) {
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, "");
  }

  #onKeyDown(event) {
    /*
          1. 누른 키를 찾아야 한다. 
          "a" 키를 눌렀을 때 콘솔 창 확인
              - keyboardEl 먼저 찾아라. (O)
              - keyboardEl 의 자식 El에서 A 키를 찾아라. (O)
              - A 키를 찾듯이 keyboardEl 의 자식 El에서 누른 Key를 찾아라. (O)
                  누른 키는?? event.code 를 사용한다. (O)
              - 누른 Key의 El를 찾았으면, 그 El 에 class="active" 를 추가해라. (O)
          
          2. keydown 한 key 의 class에서 active를 지워라.
              - classList.remove 를 사용한다. (O)
  
          ==> 누른 키에 대한 반응까지 완료
      */

    if (this.#keyboardEl.querySelector(`[data-code=${event.code}]`)) {
      this.#keyboardEl
        .querySelector(`[data-code=${event.code}]`)
        .classList.add("active");
    }
    this.#inputGroupEl.classList.toggle("error", event.key === "Process");

    /*  Optional Chaining */
    // this.#keyboardEl
    //   .querySelector(`[data-code=${event.code}]`)
    //   ?.classList.add("active");

    // console.log(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key));
  }

  #onKeyUp(event) {
    if (this.#keyboardEl.querySelector(`[data-code=${event.code}]`)) {
      this.#keyboardEl
        .querySelector(`[data-code=${event.code}]`)
        .classList.remove("active");
    }
  }

  #onChangeTheme(event) {
    document.documentElement.setAttribute(
      "theme",
      event.target.checked ? "dark-mode" : ""
    );
  }

  #onChangeFont(event) {
    document.body.style.fontFamily = event.target.value;
  }
}
