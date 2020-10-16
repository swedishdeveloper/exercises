const counterBtn = document.getElementsByTagName("button")[0];
counterBtn.addEventListener("click", function() {
    counterBtn.innerHTML = parseInt(counterBtn.innerHTML) + 1;
});