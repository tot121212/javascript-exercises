const palindromes = function(str) {
    console.log(`str = ${str}`)
   
    const regex = /[^a-zA-Z0-9]/g;
    const filteredStr = str.toLowerCase().replace(regex, ''); // take out all punctuation and word breaks
    console.log(`filteredString = ${filteredStr}`);
    
    let left = 0;
    let right = filteredStr.length - 1;

    while (left < right){ // iterate over until no chars left to compare
        if (filteredStr[left] !== filteredStr[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
