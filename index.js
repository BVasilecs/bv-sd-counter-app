let counterUp = document.querySelector(".counterUp");
let counterText = document.querySelector(".counter");
let reset = document.querySelector(".reset");
let counter = 0;

counterUp.addEventListener("click", function() {
    counter ++;
    counterText.innerText = counter;
});

reset.addEventListener("click", function() {
    counter = 0;
    counterText.innerText = counter;
});



