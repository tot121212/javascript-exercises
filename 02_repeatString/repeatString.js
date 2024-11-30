const repeatString = function(repeatString, repeatAmount) {
    if (repeatAmount >= 0){
        repeatedString = "";
        for (i=0;i<repeatAmount;i++){
            repeatedString += repeatString;
        }
        return repeatedString;
    }
    else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
