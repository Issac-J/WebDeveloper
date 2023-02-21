const h1 = document.querySelector("h1");
const input = document.querySelector("input");

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

input.addEventListener("input", function (e) {
  h1.innerText = input.value;
});
