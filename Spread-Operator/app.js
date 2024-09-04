// for of loop
const fruits = ["apple", "orange", "banana", "peach"];
const longName = "John Smith Pepper III";
let shortName = "";

for (const letter of longName) {
  console.log(letter);
  if (letter === " ") {
    continue;
  } else {
    shortName += letter;
  }
}

console.log(shortName);

for (const fruit of fruits) {
  if (fruit === "banana") {
    // break;
    continue;
  }
  console.log(fruit);
}

// SPREAD OPERATOR
const udemy = "udemy";
const letters = [...udemy];
console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];
const bestFriend = "arnold";

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

// reference
// const newFriends = friends;
// newFriends[0] = "Karina";
// console.log(newFriends);
// console.log(friends);

const newFriends = [...friends];
newFriends[0] = "Karina";
console.log(newFriends);
console.log(friends);

// ES8
const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "chicago", name: "peter" };
console.log(newPerson);

// spread and dom manipulation
const headings = document.querySelectorAll("h1");
const result = document.getElementById("result");

const text = [...headings]
  .map((item) => `<span>${item.textContent}</span>`)
  .join(" ");

result.innerHTML = text;

// spread operator- Function argument
console.log(Math.max(4, 5, 6, 7, 88));

const numbers = [23, 25, 66, 88, 2345];
console.log(Math.max(...numbers));

const john = ["john", "snaders"];

const sayHello = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
};

sayHello(...john);

// REST OPERATOR
const vegatables = ["apple", "orange", "lemon", "banana", "pear"];
const [First, second, ...fruts] = vegatables;
console.log(First, fruts);

// REST-OPERATOR OBJECTS
const testScore = [78, 90, 56, 43, 99, 65];

const personal = { name: "john", lastname: "smith", job: "developer" };
const { job, ...rest } = personal;
// const {...rest, job} = personal
console.log(job, rest);

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};
getAverage(personal.name, 78, 90, 56, 43);

getAverage(personal.name, ...testScore);

// ARRAY METHODS
const example = ["one", "two", "three"];
const enemy = Array.of("john", 2, true);
console.log(enemy);

// ARRAY.FROM
const coursera = "coursera";
console.log(Array.from(coursera));

function countTotal() {
  // console.log(arguments);
  let total = Array.from(arguments).reduce(
    (total, currName) => (total += currName)
  );
  console.log(total);
}

countTotal(67, 89, 54, 100);

// Array-DOM Element
const p = document.querySelectorAll("p");
const result = document.getElementById("results");
const seconds = document.getElementById("second");

let newText = Array.from(p);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(" ");

result.innerHTML = newText;

// shorter method
const texts = Array.from(document.querySelectorAll("p"), (item) => {
  console.log(item);
  return `<span>${item.textContent}</span>`;
});
