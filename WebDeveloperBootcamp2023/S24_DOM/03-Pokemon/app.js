// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// const container = document.querySelector("#container");
// const baseURL =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

// for (let i = 1; i <= 151; i++) {
//   const pokemon = document.createElement("div");
//   pokemon.classList.add("pokemon");
//   const label = document.createElement("span");
//   label.innerText = `#${i}`;
//   const newImg = document.createElement("img");
//   newImg.src = `${baseURL}${i}.png`;

//   pokemon.appendChild(newImg);
//   pokemon.appendChild(label);
//   container.appendChild(pokemon);
// }

const containerEl = document.querySelector("#container");

for (let i = 1; i <= 160; i++) {
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");

  const imgEl = document.createElement("img");
  imgEl.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  imgEl.alt = `${i}`;

  const spanEl = document.createElement("span");
  spanEl.innerHTML = `#${i}`;

  containerEl.appendChild(pokemon);
  pokemon.appendChild(imgEl);
  pokemon.appendChild(spanEl);
}
