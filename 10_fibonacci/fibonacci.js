const fibonacci = function(num) {
  if (num < 0) {
    return "OOPS"
  }

    let current = 0;
    let previous = 1;
    let result = 0
    
    for (let i = 0; i < num; i++) {
     
      result = previous + current;
      previous = current;
      current = result;
    }
    return result
};

// Do not edit below this line
module.exports = fibonacci;
