const currentYear = new Date().getFullYear();
function reduceToOldestComparator(oldest, current) {
    const oldestAge = oldest.yearOfDeath ? oldest.yearOfDeath - oldest.yearOfBirth : currentYear - oldest.yearOfBirth;
    const currentAge = current.yearOfDeath ? current.yearOfDeath - current.yearOfBirth : currentYear - current.yearOfBirth;
    return currentAge > oldestAge ? current : oldest;
}

const findTheOldest = function(people) {
    return people.reduce(reduceToOldestComparator, people[0]); 
}

// Do not edit below this line
module.exports = findTheOldest;