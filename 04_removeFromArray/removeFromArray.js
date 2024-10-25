const removeFromArray = function(list, ...Args) {
    let newList = [];
    const sortedArgs = Args.sort();
    for (i = 0; i < list.length; i++) {
        if (sortedArgs.includes(list[i]) == false) {
            newList.push(list[i]);
        }
    }
    return newList;
}

// Do not edit below this line
module.exports = removeFromArray;
