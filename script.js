//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.

//challenge 1
const user = {
  firstName: 'Rahul',
  lastName: 'Kumar',
  age: 19,
  country: 'India',
  state: 'Karnataka'
};

// Store the user data in localStorage
localStorage.setItem('userData', JSON.stringify(user));

// Print localStorage in the console
console.log(localStorage);

// Challenge 2: Get user data from localStorage
// Get user data from localStorage
const userData = JSON.parse(localStorage.getItem('userData'));

// Print the user data in the console
console.log(userData);

// Challenge 3: Remove "state" data from localStorage
// Remove the "state" data from localStorage
localStorage.removeItem('userData.state');

// Print localStorage in the console
console.log(localStorage);

// Challenge 4: Clear all data from localStorage
// Clear all data from localStorage
localStorage.clear();

// Print localStorage in the console
console.log(localStorage);

// Challenge 5: Convert an object to a string using JSON.stringify
const user1 = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};


// Convert the object to a JSON string
const jsonString = JSON.stringify(user1);

// Print the JSON string in the console
console.log(jsonString);
