const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("mylabel");
const min = 1;
const max = 10;
let randomNum;


myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}