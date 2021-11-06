'use strict'

const num1 = document.getElementById('a'),
  num2 = document.getElementById('b'),
  sum = document.getElementById('sum'),
  mult = document.getElementById('mult'),
  res = document.getElementById('res');
let r = 0;

const calculator = {
  sum: function () {
    r = +num1.value + +num2.value;
    calculator.show();
  },
  mult: function () {
    r = +num1.value - +num2.value;
    calculator.show();
  },
  show: function () {
    res.value = r;
  }
}
sum.addEventListener('click', calculator.sum);
mult.addEventListener('click', calculator.mult);