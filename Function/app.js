// IIFE
const num1 = 30;
const num2 = 50;

function add() {
  console.log(`the result is: ${num1 + num2}`);
}

add();
// IIFE
(function () {
  const num3 = 30;
  const num4 = 50;
  console.log(`the result is: ${num3 + num4}`);
})();

// passing an argument
(function (num3, num4) {
  console.log(`the result is: ${num3 + num4}`);
})(300, 400);

// return/assigning to variable
const result = (function (num3, num4) {
  console.log(`the result is: ${num3 + num4}`);
  return num3 + num4;
})(500, 400);

console.log(result);

// avoid polluting the global scope
(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// the first and secondvariable will be discarded after the function is executed.

// HOISTING
const firstName = "john";
let lastName = "jordan";
var random = "random";

function display() {
  console.log("hello world");
}

function moreComplex() {
  console.log(`${firstName} ${lastName} ${random}`);
}

// closure gives you an access to an outer function's scope form an inner function
// make private variable with closure

function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`hello there secret is: ${privateVar} `);
  }
  return inner;
  inner();
}

outer();

const value = outer();
console.log(value);
value();

function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  function deposit(amount) {
    balance += amount;
    showBalance();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey, ${name}, sorry not enough funds`);
      return;
    }
    balance -= amount;
    showBalance();
  }
  //   return showBalance;
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

// newAccount("susan", 500)();

const john = newAccount("john", 300);
const bob = newAccount("Bob", 800);

john.showBalance();
john.deposit(400);
john.withdraw(1000);
bob.showBalance();
