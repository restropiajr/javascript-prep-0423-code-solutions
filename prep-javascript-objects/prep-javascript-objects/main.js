// Question 2
const person = {
  firstName: 'Roland',
  lastName: 'Estropia Jr.',
  hobby: 'playing videogames',
};

console.log(person);

// Question 3
const fullName = `${person.firstName} ${person.lastName}`;
console.log("The person's name is: ", fullName);

person.job = 'Software Engineering';
console.log("The person's current job is: ", person.job);

person['previousJob'] = 'Mechanical Engineering';
console.log("The person's previous job is: ", person['previousJob']);

console.log('The complete person object: ', person);
