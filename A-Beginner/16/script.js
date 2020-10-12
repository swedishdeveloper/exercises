//PRO CODING - Works better than if - else statements..

console.log(checkAge(100));

function checkAge(age) {
    return age > 65 ? (age > 90 ? "Very Old!" : "Old!") : (age < 10) ? "Very Young!" : "Young!";
}