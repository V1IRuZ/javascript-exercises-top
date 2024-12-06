const findTheOldest = function(array) {
    const oldest = array.map((person) => {
         if (!person.yearOfDeath) {
           person.yearOfDeath = (new Date()).getFullYear();
           return person
         } else {
           return person
         }
      }).sort((a, b) => {
           const lastPerson = a.yearOfDeath - a.yearOfBirth;
           const nextPerson = b.yearOfDeath - b.yearOfBirth;
           return lastPerson > nextPerson ? -1 : 1;
       })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
