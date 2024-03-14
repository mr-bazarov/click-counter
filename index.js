const add = document.getElementsByClassName("add")[0];
const subtract = document.getElementsByClassName("subtract")[0];
const reset = document.getElementsByClassName("reset")[0];
const number = document.getElementsByClassName("number")[0];
let numberDisplay = 0

add.onclick = function() {
    numberDisplay++;
    number.textContent = numberDisplay;
}

subtract.onclick = function() {
    numberDisplay--;
    number.textContent = numberDisplay
}

reset.onclick = function() {
    numberDisplay = 0
    number.textContent = numberDisplay
}