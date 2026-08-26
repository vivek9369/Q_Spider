let count = 0 ;

let countDisplay = document.getElementById("count");

let increment = document.getElementById("incre");
let decrement = document.getElementById("decre");
let reset = document.getElementById("reset");

increment.addEventListener("click", function () {
    count ++;
    countDisplay.innerText = count
});

decrement.addEventListener("click", function() {
    count --;
    countDisplay.innerText = count
});

reset.addEventListener("click", function() {
    count = 0;

     countDisplay.innerText = count
})