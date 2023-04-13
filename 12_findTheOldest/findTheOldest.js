const findTheOldest = function(array)
 {
  let currentYear = new Date().getFullYear();
  array.forEach(element => 
    {
      if(element.yearOfDeath != null)
      {
        element.Age = element.yearOfDeath - element.yearOfBirth;
      }
      else
      {
        element.Age = currentYear - element.yearOfBirth;
      }
    });
  array.sort((a,b) => b.Age - a.Age);
  return array[0];
}
/* this was for testing
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
console.log(findTheOldest(people));
console.table(people);
*/

// Do not edit below this line
module.exports = findTheOldest;
