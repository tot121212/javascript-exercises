const sumAll = function(...args) {
    if (args.length !== 2){
        console.log("sumAll function only takes two args");
        return "ERROR";
    }

    let largestArg
    let smallestArg

    for (let arg of args){
        if (!Number.isInteger(arg)){
            console.log("arg is not integer");
            return "ERROR";
        }
        else if (arg < 0){
            console.log("arg is less than zero");
            return "ERROR";
        }
        // after error checking we can do proper operations

        if (largestArg === undefined || arg > largestArg){
            largestArg = arg;
        }
        if (smallestArg === undefined || arg < smallestArg){
            smallestArg = arg;
        }
    }

    if (smallestArg > largestArg){
        console.log("smallestArg is greater than largestArg");
        return "ERROR";
    }

    let sum = 0;
    for (i=smallestArg; i<=largestArg; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
