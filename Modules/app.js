// // var-define
// var number = 100;
// console.log(number);

// // update - var
// number = 200;
// console.log(number);

// // redefine
// var number = "orange";
// console.log(number);

// // LET-VARIABLE
// let amount = 10;
// console.log(amount);
// amount = 200;
// console.log(amount);
// let amount = "orange"; //you can't do this

// // CONST VARIABLE
// const person = { name: "bob" };
// person.name = "john";
// console.log(person.name);

// global scope
var amount = 100;

function greet() {
  // local scope
  var random = `some random value`;
  console.log(`hello there ${amount} ${random}`);
}
// console.log(random);
// greet();

var totals = 1000;
var test = true;

if (test) {
  var totals = `oranges and onions`;
  console.log(`Hello Fai`);
}

console.log(totals);

// global scope
let total = 1000;
let tests = true;

if (tests) {
  // local scope
  let total = `oranges and onions`;
  let value = `some random value`;
  console.log(`Hello Fai`);
}

console.log(total);

// console.log(value);

// Template Strings / Literals
const name = "susan";
const lastName = "sanders";
const age = 25;

const phrase =
  "My full name is " + name + " " + lastName + " and I'm " + age + " years old";

console.log(phrase);
const phrase2 = `My full name is ${name} ${lastName.toUpperCase()} and I'm ${
  age * 2
} years old`;
console.log(phrase2);

// Template HTML
const person = {
  name: "kyle",
  job: "developer",
  hobbies: ["surfing", "baking", "bowling"],
};

const result = document.querySelector(".result");
result.innerHTML = `
<h2>${person.name}</h2>
<p>${person.job}</p>
<ul>${person.hobbies
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join("")}</ul>
`;

// tagged template literals
const author = "some author";
const statement = "some statement";

const quote = `Here is the <strong class='blue'>${statement} </strong> by ${author} and it could not be more true`;

const quote2 = highlight`Here is the <strong class='blue'>${statement} </strong> by ${author} and it could not be more true`;

console.log(quote);

const taggedResult = document.querySelector(".result-tagged");
taggedResult.innerHTML = quote;
taggedResult.innerHTML = quote2;

function highlight(text, ...vars) {
  const awesomeText = text.map((item, index) => {
    return `${item} <strong class='blue'>${vars[index] || ""}</strong>`;
  });
  return awesomeText.join("");
}
