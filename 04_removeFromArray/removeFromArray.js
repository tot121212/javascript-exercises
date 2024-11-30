const removeFromArray = function(inputArray, ...removalArguments) {
    return inputArray.filter((item) => !removalArguments.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
