const PubSub = require("../helpers/pub_sub.js")

const PrimeChecker = function() {

};

PrimeChecker.prototype.bindEvents = function () {
  PubSub.subscribe("FormView:number-submitted", (event) => {
    const inputtedNumber = event.detail;
    const result = this.isPrime(inputtedNumber);
    PubSub.publish('PrimeChecker:result-calculated', result);
  });
};


PrimeChecker.prototype.isPrime = function (number) {
  let numberIsPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      numberIsPrime = false;
    };
  };

  return numberIsPrime;

};

module.exports = PrimeChecker;
//
// qwerty = new PrimeChecker;
//
// const test1 = qwerty.isPrime(7);
// const test2 = qwerty.isPrime(9);
// const test3 = qwerty.isPrime(11);
//
// console.log(test1);
// console.log(test2);
// console.log(test3);
