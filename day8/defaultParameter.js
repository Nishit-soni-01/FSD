const add = (a, b, c= 0) => {
  return a + b + c;
};
console.log(add(2, 3));      // Output: 5
console.log(add(2, 3, 4));   // Output: 9
const greet = (First, last, middle = '') => {
  return `Hello, ${First} ${middle} ${last}`;
};
};
console.log(greet('John', 'Doe'));               // Output: Hello, John  Doe
console.log(greet('John', 'Doe', 'Michael'));    // Output: Hello, John Michael Doe