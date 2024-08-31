// const person = {
//   name: "John",
//   age: 25,
//   married: true,
//   siblings: ["anna", "peter"],
//   greet: function (name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   sayHello(name) {
//     console.log(`Hello, my name is ${name}`);
//   },
// };

// console.log(person);
// console.log(person.name);

// person.age = 60;
// console.log(person);

// // delete property
// const siblings = delete person.siblings;
// console.log(person);

// // NESTED OBJECT
// const man = {
//   name: "John",
//   age: 25,
//   married: true,
//   siblings: ["anna", "peter"],
//   greet: function (name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   sayHello(name) {
//     console.log(`Hello, my name is ${name}`);
//   },
//   job: {
//     title: "developer",
//     company: {
//       name: "coding addict",
//       address: "123 main street",
//     },
//   },
// };

// // console.log(person.job.company.name);

// // set variable as property value
// // const age = 50;
// // let random = "random-value";
// // const woman = {
// //   name: "John",
// //   age: age,
// //   married: true,
// //   siblings: ["anna", "peter"],
// //   greet: function (name) {
// //     console.log(`Hello, my name is ${name}`);
// //   },
// //   sayHello(name) {
// //     console.log(`Hello, my name is ${name}`);
// //   },
// //   job: {
// //     title: "developer",
// //     company: {
// //       name: "coding addict",
// //       address: "123 main street",
// //     },
// //   },
// //   "random-value": "random",
// // };
// // console.log(woman[random]);

// // this-keyword
// const john = {
//   firstName: "john",
//   lastName: "anderson",
//   fullName: function () {
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },
// };

// const bob = {
//   firstName: "anna",
//   lastName: "sanders",
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// john.fullName("John Anderson");
// bob.fullName();

// // this-keyword Advanced
// function showThis() {
//   console.log(this);
// }

// const sarah = {
//   name: "sarah",
//   showThis: showThis,
// };

// const jane = {
//   name: "jane",
//   showThis: showThis,
// };

// sarah.showThis();
// jane.showThis();

// const btn1 = document.querySelector(".btn-1");
// const btn2 = document.querySelector(".btn-2");

// btn1.addEventListener("click", showThis);
// btn2.addEventListener("click", showThis);
// btn1.addEventListener("click", function () {
//   showThis();
// });

// // factory function
// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     fullName: function () {
//       console.log(
//         `My full name is ${this.firstName}${this.lastName} and I love JS`
//       );
//     },
//   };
// }

// const ridwan = createPerson("john", "anderson");
// ridwan.fullName();
// const lanre = createPerson("susy", "apple");
// lanre.fullName();
// const susy = createPerson("bob", "jordan");
// susy.fullName();

// // constructor functions
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love React`
//     );
//   };
// }

// const joe = new Person("john", "joe");
// joe.fullName();

// const paul = new Person("paul", "song");
// console.log(paul.constructor);

// const peter = {};
// console.log(peter.constructor);

// const list = [];
// console.log(list.constructor);
// const sayHi = function () {
//   console.log(sayHi.constructor);
// };

// const susan = new paul.constructor("susan", "carpenter");
// susy.fullName;

// function Account(name, initialBalance) {
//   this.name = name;
//   this.balance = initialBalance;
// }

// const ola = new Account("ola", 200);
// const olam = new Account("olam", 0);

// Account.prototype.bank = "CHASE";
// Account.prototype.deposit = function (amount) {
//   this.balance += amount;
//   console.log(`Hello ${this.name}, your balance is ${this.balance}`);
// };

// olam.deposit(300);
// console.log([]);

// // ES6 - Synthetic Sugar
// // ES6
// // class Account {
// //   constructor(name, initialBalance) {
// //     this.name = name;
// //     this.balance = initialBalance;
// //   }
// //   bank = "CHASE";
// //   deposit(amount) {
// //     this.balance += amount;
// //     console.log(`Hello ${this.name}, your balance is ${this.balance}`);
// //   }
// // }

// // const john = new Account("john", 0);
// // console.log(john);
// // console.log(john.name);
// // john.deposit(500);
// // console.log(john.bank);

// // const bob = new Account("bob", 700);
// // console.log(bob);
// // console.log(bob.name);
// // bob.deposit(1000);
// // console.log(bob.bank);

// // call -runs instantly, argumemts - list of items
// const john = {
//   name: "john",
//   age: 24,
// };

// const susan = {
//   name: "susan",
//   age: 21,
// };

// // this will fail
// // susan.greet();

// function greet(city, country) {
//   console.log(this);
//   console.log(
//     `Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
//   );
// }

// // const secondGreet = john.greet();
// // secondGreet();

// // what will work
// greet.call(john, "san diego", "us");
// greet.call(susan, "san diego", "us");
// greet.call({ name: "peter", age: 30 }, "san diego", "us");

// // apply
// const paul = {
//   name: "paul",
//   age: 35,
// };

// const peter = {
//   name: "peter",
//   age: 10,
// };

// function greet(city, country) {
//   console.log(this);
//   console.log(
//     `Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
//   );
// }

// greet.apply(paul, ["san diego", "us"]);
// greet.apply(peter, ["san diego", "us"]);

// // bind - assign call it later
// const susanGreet = greet.bind(susan, "toronto", "ca");
// susanGreet();
