const fibonacci = function(arrLength){
    // instead of creating a hashmap with a cache of solutions im just gonna do it the simple way for the sake of the exercise
    arrLength = Number(arrLength);
    if (arrLength === 0){
        return 0;
    }
    
    if (arrLength < 0 || typeof(arrLength) !== "number"){
        return "OOPS";
    }
    const arr = new Array(); // create array of size arrLength
    arr.unshift(1, 1); // prepend 1, 1 for fib sequence
    for(i=2; i < arrLength; i++){ // iterate through up to length, skipping 2 first fib numbers
        arr[i] = arr[i-2] + arr[i-1];
    }
    return Number(arr[arrLength - 1]);
};

// Do not edit below this line
module.exports = fibonacci;
