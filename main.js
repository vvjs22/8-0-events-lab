// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const currentColor = document.getElementById('current-color');
const colors = document.getElementsByClassName('color');
const cells = document.getElementsByClassName('cell');

for (let color of colors) {
  color.addEventListener('click', (event) => {
    currentColor.style.background = event.target.style.background;
  });
}

for (let cell of cells) {
  cell.addEventListener('click', (event) => {
    event.target.style.background = currentColor.style.background;
  });
}


let button = document.createElement("button");
button.textContent = "Reset";
document.querySelector("#palette").append(button);

button.addEventListener("click", () => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
    
  });
});