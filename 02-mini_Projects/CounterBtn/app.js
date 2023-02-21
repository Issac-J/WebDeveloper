let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // console.log(event.currentTarget.classList);

    const btnClasses = event.currentTarget.classList;
    if (btnClasses.contains("decrease")) {
      count--;
    } else if (btnClasses.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#102a42";
    }

    value.textContent = count;
  });
});
