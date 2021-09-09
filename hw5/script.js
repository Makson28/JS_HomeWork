'use strict';

let money,
  expenses1,
  expenses2,
  amount1,
  amount2,
  income = 'фриланс',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "Бензин, Поход, Подписки"),
  deposit = confirm('Есть ли у вас депозит в банке?'),
  mission = 10000,
  period = 10;

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


do {
  money = +prompt('Ваш месячный доход?', 500);
}
while (!isNumber(money));

expenses1 = prompt('Введите обязательную статью расходов?', "Комуналка");
do {
  amount1 = +prompt('Во сколько это обойдется?', 100);
}
while (!isNumber(amount1));

expenses2 = prompt('Введите обязательную статью расходов?', "Еда");
do {
  amount2 = +prompt('Во сколько это обойдется?', 100);
}
while (!isNumber(amount2));

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

console.log('money:', typeof money);
console.log('income:', typeof income);
console.log('deposit:', typeof deposit);
console.log('addExpenses length:', addExpenses.length);
console.log('Период равен', period, 'месяцев', 'Цель заработать', mission, 'долларов');
console.log('Расходы за месяц: ', getExpensesMonth());
console.log(addExpenses.toLowerCase().split(", "));
console.log('budgetMonth: ', accumulatedMonth);

if (getTargetMonth() < 0) {
  console.log('Цель не будет достигнута');
} else {
  let budgetDay = accumulatedMonth / 30;

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
}