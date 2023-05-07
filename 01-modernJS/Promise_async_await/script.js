// function go() {
//   div.classList;
// }

// function showCircle(cx, cy, radius) {
//   let div = document.createElement("div");
//   document.body.append(div);

//   // 사이즈(가로, 세로) 값 초기화
//   div.style.width = 0;
//   div.style.height = 0;

//   // 도형의 위치를 설정
//   div.style.left = cx + "px";
//   div.style.top = cy + "px";

//   // class 이름 추가
//   div.className = "circle";

//   // 함수가 실행되고 1초 후 원이 그려짐.
//   setTimeout(() => {
//     div.style.width = radius * 2 + "px";
//     div.style.height = radius * 2 + "px";
//   }, 1000);
// }

// // showCircle(150, 150, 100, div => {
// //     div.classList.add('message-ball');
// //     div.append("안녕하세요!");
// //   });

function loadScript(src) {
  let script = document.createElement("div");
  script.src = src;
  document.head.append(script);
  console.log("fucntion: loadScript");

  function newFunction() {
    console.log("fucntion: newFunction");
  }
  newFunction();
}

loadScript("./script.js");
