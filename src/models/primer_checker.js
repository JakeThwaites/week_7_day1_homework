const PubSub = require("../helpers/pub_sub.js")

const PrimeChecker = function() {

};



PrimeChecker.prototype.isPrime = function (number) {
  let numberIsPrime = true;

  for (var i = 2; i < number; i++) {
    if (i * i === number) {
      numberIsPrime = false;
    };
  };

  return numberIsPrime;
};

qwerty = new PrimeChecker;

const test1 = qwerty.isPrime(7);
const test2 = qwerty.isPrime(9);

console.log(test1);
console.log(test2);
