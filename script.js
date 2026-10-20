const container = document.querySelector("#container");

for(i = 0; i < 256; i++){
    const square = document.createElement("div");
    
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black"
    })
    container.appendChild(square);
}

