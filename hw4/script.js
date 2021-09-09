'use strict';

let money = +prompt('Ваш месячный доход?'),
  income = 'фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  arrayOfaddExpenses = addExpenses.split(", "),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  expenses1 = prompt('Введите обязательную статью расходов?'),
  amount1 = +prompt('Во сколько это обойдется?'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount2 = +prompt('Во сколько это обойдется?'),
  mission = 10000,
  period = 10;

const getExpensesMonth = function () {
  return amount1 + amount2;
};

const getAccumulatedMonth = function () {
  return money - getExpensesMonth();
};

let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function () {
  return mission / accumulatedMonth;
};

let budgetDay = accumulatedMonth / 30;

console.log('money:', typeof money);
console.log('income:', typeof income);
console.log('deposit:', typeof deposit);
console.log('addExpenses length:', addExpenses.length);
console.log('Период равен', period, 'месяцев', 'Цель заработать', mission, 'долларов');
console.log('Расходы за месяц: ', getExpensesMonth());
console.log(addExpenses.toLowerCase());
console.log('arrayOfaddExpenses:', arrayOfaddExpenses);
console.log('budgetMonth: ', accumulatedMonth);
console.log('Cрок достижения цели в месяцах: ', Math.ceil(getTargetMonth()));
console.log('budgetDay: ', Math.floor(budgetDay));

let getStatusIncome = function () {
  if (budgetDay >= 16) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay >= 8 && budgetDay < 16) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay < 8 && budgetDay > 0) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay == 0) {
    return ('У вас нет дохода');
  } else if (budgetDay < 0) {
    return ('Что то пошло не так');
  }
};

console.log(getStatusIncome());