'use strict';

let money,
  start = function () {
    do {
      money = prompt('Ваш месячный доход?', 500);
    }
    while (isNaN(money) || money === '' || money === null)
  };

start();

let appData = {
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  income: {},
  addincome: [],
  expenses: {},
  addExpenses: [],
  expensesMonth: 0,
  deposit: false,
  mission: 10000,
  period: 10,
  asking: function () {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "Бензин, Поход, Подписки");
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
      let inputExpenses = prompt('Введите обязательную статью расходов?', "Комуналка");
      let cash;

      do {
        cash = prompt('Во сколько это обойдется?', 100);
      }
      while (isNaN(cash) || cash === '' || cash === null);

      appData.expenses[inputExpenses] = +cash;
    }
  },

  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },

  getBudget: function () {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },

  getTargetMonth: function () {
    return appData.mission / appData.budgetMonth;
  },

  getStatusIncome: function () {
    if (appData.budgetDay >= 16) {
      return ('У вас высокий уровень дохода');

    } else if (appData.budgetDay >= 8 && appData.budgetDay < 16) {
      return ('У вас средний уровень дохода');

    } else if (appData.budgetDay < 8 && appData.budgetDay > 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');

    } else if (appData.budgetDay == 0) {
      return ('У вас нет дохода');
      
    } else if (appData.budgetDay < 0) {
      return ('Что то пошло не так');
    }
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log('Период равен', appData.period, 'месяцев', 'Цель заработать', appData.mission, 'долларов');

if (appData.getTargetMonth() > 0){
  console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцов');
} else {
  console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log('Наша програма включает в себя данные:' + key + ' - ' + appData[key]);
}