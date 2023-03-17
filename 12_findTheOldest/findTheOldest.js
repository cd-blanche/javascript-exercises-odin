const findTheOldest = function(people) {
  return people.reduce((obj, person) => {
    const oldestYear = (obj.yearOfDeath || new Date().getFullYear()) - obj.yearOfBirth;
    const currentYear = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
    return oldestYear > currentYear ? obj : person;
  })
};

// Do not edit below this line
module.exports = findTheOldest;