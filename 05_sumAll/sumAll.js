const sumAll = function(valueOne, valueTwo) {
    if (!Number.isInteger(valueOne) || !Number.isInteger(valueTwo)) {
        return "ERROR";
    } else if (valueOne < 0 || valueTwo < 0) {
        return "ERROR";
    } else {
        let numbers = [valueOne, valueTwo];
        numbers.sort(function(a, b){return a - b});
        let sum = 0;
        
        for (i = numbers[0]; i <= numbers[1]; i++) {
            sum += i;
        }
        return sum;
    }
}

// Do not edit below this line
module.exports = sumAll;
