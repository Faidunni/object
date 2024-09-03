const sayHi = () => console.log("hello");
sayHi();

const double = (value) => value * 2;
const num = double(4);
console.log(8);

// two parameters and more than one line
const multiply = (num1, num2) => {
  const result = num1 * num2;
  //   more code here
  return result;
};

const sum = multiply(2, 6);
console.log(sum);

// return object
const object = () => ({
  name: "john",
  age: 25,
});
const person = object();
console.log(person);

// arrow function as callback function
const numbers = [1, 2, 3, 4, 5, 6];
const big = numbers.filter((number) => number > 2);
console.log(big);

// btn.addEventListener("click", () => console.log(`you ckicked be`));

// arrow object and this keyword
// const bob = {
//   firstName: "bob",
//   lastName: "smith",
//   sayName: function () {
//     console.log(this);
//     const self = this;
//     setTimeout(function () {
//       console.log(`Hello, my name is ${self.firstName} ${self.lastName}`);
//     }, 2000);
//   },
// };

// // using arrow function
// const peter = {
//   firstName: "peter",
//   lastName: "paul",
//   sayName: function () {
//     console.log(this);
//     // const self = this;
//     setTimeout(() => {
//       console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//     }, 2000);
//   },
// };

// const anna = {
//   firstName: "anna",
//   lastName: "sanders",
//   sayName: () => {
//     console.log(this);
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   },
// };

// bob.sayName();
// peter.sayName();
// anna.sayName();

// arrow selecting
// regular function
const btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   console.log(this);
//   this.style.color = "black";
// });

// arrow function, this will not work
// btn.addEventListener("click", () => {
//   this.style.color = "black";
// });

btn.addEventListener("click", function () {
  setTimeout(() => {
    this.style.color = "purple";
  }, 2000);
});

// Array Destruction
const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const orange = fruits[0];
const banana = fruits[1];
const lemon = fruits[2];
console.log(orange, banana, lemon);

const [john, samuel, king] = friends;
console.log(john, samuel, king);

let first1 = "bob";
let second = "john";

[second, first1] = [first1, second];

// let temp = second;
// second = first;
// first = temp;

console.log(first1, second);

// Object destructuring
const doe = {
  first: "john",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

// const { first, last, city, zip } = doe;
const {
  first: firstName,
  last,
  city,
  siblings: { sister: favoriteSibling },
} = doe;
console.log(firstName, last, city, favoriteSibling);

// const firstName = doe.first;
// const lastName = doe.last;
// const sister = doe.siblings.sister;

// console.log(firstName, lastName, sister);

// desturcturing as function argument
const paul = {
  first: "paul",
  last: "sanders",
  city: "maryland",
  siblings: {
    sister: "juliet",
  },
};

// function printPerson(person) {
//   console.log(person.first);
// }

// function printPerson(person) {
//   const { first, last, city } = person;
//   console.log(first, last, city);
// }
function printPerson({ first, last, city }) {
  //   const { first, last, city } = person;
  console.log(first, last, city);
}

printPerson(paul);

// new string methods
const someone = "Peter Smith";
const employee = "23456-EMP-PETER-SMITH";
const manager = "23456-MAN-JOHN-DOE";

// StartsWith
console.log(someone.startsWith("Pet"));
console.log(employee.startsWith("EMP", 6));

// EndsWith
console.log(manager.endsWith("DOE"));
console.log(manager.endsWith("MAN", 9));

// includes
console.log(manager.includes("MAN"));

// repeat
const mutiplyPeople = (someone, amount) => someone.repeat(amount);

const people = mutiplyPeople(someone, 10);
console.log(people);

//
