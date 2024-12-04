const palindromes = function (string) {

    const regExp = /[^a-zA-Z0-9]/g;

    const testString = string.split(regExp).join("").toLowerCase();
  
    const reversedString = testString
    .split("")
    .reverse()
    .join("");

    if (testString === reversedString) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
