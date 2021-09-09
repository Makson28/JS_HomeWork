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
  mission = 1000,
  period = 10,
  budgetMonth = money - (amount1 + amount2),
  mounthsToMission = mission / (money - budgetMonth),
  budgetDay = budgetMonth / 30;

console.log('money:', typeof money);
console.log('income:', typeof income);
console.log('deposit:', typeof deposit);
console.log('addExpenses length:', addExpenses.length);
console.log('Период равен', period, 'месяцев', 'Цель заработать', mission, 'долларов');
console.log(addExpenses.toLowerCase());
console.log('arrayOfaddExpenses:', arrayOfaddExpenses);
console.log('budgetMonth: ', budgetMonth);
console.log('mounthsToMission: ', Math.ceil(mounthsToMission));
console.log('budgetDay: ', Math.floor(budgetDay));

if (budgetDay >= 16) {
  console.log('У вас высокий уровень дохода');
}else if (budgetDay >= 8 && budgetDay < 16) {
  console.log('У вас средний уровень дохода');
}else if (budgetDay < 8 && budgetDay > 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
}else if (budgetDay == 0) {
  console.log('У вас нет дохода');
}else if (budgetDay < 0) {
  console.log('Что то пошло не так');
}