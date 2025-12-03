const display = document.getElementById("display");
let memory = 0;


function appendToDisplay(value) {
display.value += value;
}


function calculate() {
try {
display.value = eval(display.value);
} catch {
display.value = "Error";
}
}


function clearDisplay() {
display.value = "";
}


function scientific(func) {
try {
const val = parseFloat(display.value);
if (func === "sin") display.value = Math.sin(val);
if (func === "cos") display.value = Math.cos(val);
if (func === "log") display.value = Math.log10(val);
} catch {
display.value = "Error";
}
}


document.querySelectorAll(".btn").forEach(btn => {
btn.addEventListener("click", () => {
const value = btn.getAttribute("data-value");
const action = btn.getAttribute("data-action");
const func = btn.getAttribute("data-func");


if (value) appendToDisplay(value);
if (action === "equals") calculate();
if (action === "clear") clearDisplay();


if (action === "memory-add") memory += Number(display.value) || 0;
if (action === "memory-sub") memory -= Number(display.value) || 0;


if (func) scientific(func);
});
});


// Keyboard support
window.addEventListener("keydown", e => {
if (!isNaN(e.key) || ["+","-","*","/","."].includes(e.key)) {
appendToDisplay(e.key);
}
if (e.key === "Enter") calculate();
if (e.key === "Backspace") display.value = display.value.slice(0, -1);
});


// Theme switcher
const themeBtn = document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-theme");("dark-theme");
document.body.classList.toggle("light-theme");
});