const findTheOldest = function(people){
    let oldest = people[0];
    let currentAge; 
    let oldestAge;

    if (oldest.yearOfDeath == undefined) {
        oldestAge = new Date().getFullYear() - oldest.yearOfBirth;
    } else {
        oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    }

    for (person of people){

        if (person.yearOfDeath == undefined) {
            currentAge = new Date().getFullYear() - person.yearOfBirth;
        } else {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        }

        if(currentAge > oldestAge){
            oldest = person;
            oldestAge = currentAge;
         }
         currentAge = 0;
    }
    
    return oldest;
}
    


// Do not edit below this line
module.exports = findTheOldest;
