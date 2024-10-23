const reverseString = function(string) {
    let wordReversed = ""
    let lastChar = -1
    for (;wordReversed.length < string.length;) {
        wordReversed += string.at(lastChar);
        lastChar--
    }
    return wordReversed;
};


// Do not edit below this line
module.exports = reverseString;
