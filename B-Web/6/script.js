const myBody = document.getElementsByTagName("body")[0];
let i = 0;
const colors = ["green", "blue", "yellow", "orange", "black"];
setInterval(function() {
    myBody.style.backgroundColor = colors[i];
    i++;
    if (i >= 5) i = 0;
}, 5000);