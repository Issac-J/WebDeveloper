// function loadScript(src) {
//   let script = document.createElement("script");

//   script.src = src;
//   document.head.append(script);
// }

// function addition(a, b) {
//   return a + b;
// }

// function sayResult(value) {
//   console.log(value);
// }

// sayResult(addition(3, 5));

// Callback 으로 작성
function addition(a, b, callback) {
  callback(a + b);
}

function sayResult(value) {
  console.log(value);
}

addition(3, 10, sayResult);
