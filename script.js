const container = document.querySelector("#container");

function createGrid() {
  const input = prompt("How many squares per side?");
  const gridSize = Number(input);

  if (
    input === null ||
    input.trim() === "" ||
    !Number.isInteger(gridSize) ||
    gridSize < 1 ||
    gridSize > 100
  ) {
    alert("Please enter a whole number between 1 and 100.");
    return;
  }

  const totalSquares = gridSize * gridSize;
  const squareSize = 500 / gridSize;

  container.innerHTML = "";

  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

const resizeBtn = document.querySelector("#resizebtn");
resizeBtn.addEventListener("click", createGrid);
