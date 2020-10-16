const myInput = document.getElementsByTagName("input")[0];
const myBtn = document.getElementsByTagName("button")[0];

myBtn.addEventListener("click", function() {
    if (myInput.value != null && myInput.value.length > 0) {
        console.log(myInput.value.toUpperCase());
    }
});