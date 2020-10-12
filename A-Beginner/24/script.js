console.log(isAllCaps("TEST")); //returns true
console.log(isAllCaps("test")); //returns false

function isAllCaps(text) {
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) != text.charAt(i).toUpperCase()) {
            return false;
        }
    }
    return true;
}