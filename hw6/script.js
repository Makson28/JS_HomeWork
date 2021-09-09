'use strict';

let answer;
let userNumber = NaN;

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let whatNumber = function () {
  answer = 10;
  userNumber = prompt('Угадай число от 1 до 100');
  if (!isNumber(userNumber) || userNumber.trim() === '') {
    alert('Введи число!');
    whatNumber();
  } else if (userNumber < answer) {
    alert('Загаданное число больше');
    whatNumber();
  } else if (userNumber > answer) {
    alert('Загаданное число меньше');
    whatNumber();
  }
}

whatNumber();