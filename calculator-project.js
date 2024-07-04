let result = localStorage.getItem('result') || '';
showCalculation();

function calc(calculation) {
  result += calculation;
  showCalculation();
}

function showCalculation() {
  document.querySelector('.js-display-calculation')
    .innerHTML = result || 0;
}