const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
    const isPrime = event.detail;
    this.displayResult(isPrime);
  });
};




ResultView.prototype.displayResult = function (result) {
  const resultsElement = document.querySelector("#result");
  resultsElement.textContent = `Prime: ${result}`;
  // if (result === true) {
  //   resultsElement.textContent = "This is a prime number!"
  // } else {
  //   resultsElement.textContent = "This isn't a prime number!"
  // };
};

module.exports = ResultView;
