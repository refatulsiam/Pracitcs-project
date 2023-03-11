/*Clear Your Local storage */
// localStorage.clear();
/*Set a local item. key: name, value: Shakib Khan */
localStorage.setItem('name', 'Shakib Khan');
// Set a local storage item. key: age, value: 40
localStorage.setItem('age','40');

// Get the local storage item you have set
localStorage.getItem('name','age');
// console.log(localStorage);
// const person = {name: 'Shakib Khan', age: 40};
// JSON.stringify(person);
// localStorage.setItem(person);


// Remove the local storage key ‘name’ & key ‘age’

// localStorage.removeItem('name');
// localStorage.removeItem('age');


// Set a object as local storage item. Then object is{ firstName: ‘Abraham’, lastName: ‘Linkon’ }

let person = {firstName: 'Abraham', lastName: 'Linkon'};
let personStringify = JSON.stringify(person);
localStorage.setItem('person', personStringify);
let personObject = JSON.parse(localStorage.getItem('person'));
console.log(personObject.firstName);

