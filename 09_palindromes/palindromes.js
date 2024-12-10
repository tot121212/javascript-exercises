const palindromes = function(word) {
    let cleanedWord = word.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    return cleanedWord === cleanedWord.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
