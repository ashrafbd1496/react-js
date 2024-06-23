// import React from "react";
// import ReactDOM from "react-dom/client";
let number = 0;
const incrementBtn = document.getElementById('button')
const display = document.getElementById('display')

incrementBtn.addEventListener('click', ()=>{
    number++;
    display.textContent = number;
})