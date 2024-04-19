"use strict";

// All the elements used
const container = document.querySelector(".container");
const containerSize = container.getBoundingClientRect();
const sizeSlider = document.getElementById("size");
const text = document.querySelector(".text");
const colorButton = document.querySelector(".paint");
const rainbow = document.querySelector(".rainbow");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const darker = document.querySelector(".darker");
const colorPicker = document.getElementById("inputColor");
const btnActive = [...document.getElementsByTagName("button")];
document.querySelector("body").onload = grid(size.value);

// Showing us which coloring button is active
btnActive.forEach((btnEl) => {
  btnEl.addEventListener("click", () => {
    document.querySelector(".color")?.classList.remove("color");
    btnEl.classList.add("color");
  });
});

// Functions for coloring the screen
function colorMe(e) {
  if (colorButton.classList.contains("color")) {
    e.target.style.background = colorPicker.value;
  } else if (rainbow.classList.contains("color")) {
    e.target.style.background = `rgb(${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  } else if (eraser.classList.contains("color")) {
    e.target.style.background = "white";
  }
}

// Function for creating a grid based on the users input using flex-box
function grid(size) {
  for (let i = 1; i <= size * size; i++) {
    let gridItem = document.createElement("div");
    gridItem.setAttribute("class", "gridItem");
    gridItem.style.flexBasis = (containerSize.width - 6) / size + "px";
    gridItem.addEventListener("mouseenter", colorMe);
    container.appendChild(gridItem);
  }
}

// Slider functionality
sizeSlider.onmousemove = (e) =>
  (text.textContent = `Grid size: ${e.target.value}x${e.target.value}`);
sizeSlider.onchange = (e) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  grid(e.target.value);
};

// Clear function
clear.onclick = (e) => {
  [...container.children].forEach(function (child) {
    child.style.background = "white";
  });
};