let money = 200,
  income = 'фриланс',
  addExpenses = 'Интернет, Такси, Коммуналка',
  deposit = true,
  mission = 9500,
  period = 10;

console.log('money:', typeof money);
console.log('income:', typeof income);
console.log('deposit:', typeof deposit);
console.log('addExpenses length:', addExpenses.length);
console.log('Период равен', period, 'месяцев', 'Цель заработать', mission, 'долларов');
console.log(addExpenses.toLowerCase());
let arrayOfaddExpenses = addExpenses.split(", ");
console.log('arrayOfaddExpenses:', arrayOfaddExpenses);
let budgetDay = 10;
console.log('budgetDay:', budgetDay);