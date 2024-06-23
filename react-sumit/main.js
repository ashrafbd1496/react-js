// import React from "react";
// import ReactDOM from "react-dom/client";
let number = 0;
let number2 = 0;
const incrementBtn = document.getElementById("button");
const incrementBtn2 = document.getElementById("button2");
const display = document.getElementById("display");
const display2 = document.getElementById("display2");

incrementBtn.addEventListener("click", () => {
  number++;
  display.textContent = number;
});
incrementBtn2.addEventListener("click", () => {
  number2++;
  display2.textContent = number2;
});
