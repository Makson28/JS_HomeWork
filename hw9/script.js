'use strict';

let statr = document.getElementById('start'),
  start = document.getElementById('start'),
  btnPlus = document.getElementsByTagName('button'),
  incomePlus = btnPlus[0],
  expensesPlus = btnPlus[1],
  depositCheck = document.querySelector('#deposit-check'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  budgetDayValue = document.getElementsByClassName('budget_day-value'),
  expensesMonthValue = document.getElementsByClassName('expenses_month-value'),
  additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
  incomePeriodValue = document.getElementsByClassName('income_period-value'),
  targetMonthValue = document.getElementsByClassName('target_month-value'),
  salaryAmount = document.querySelector('.salary-amount'),
  incomeTitle = document.querySelector('.income-title'),
  incomeAmount = document.querySelector('.income-amount'),
  expensesTitle = document.querySelector('.expenses-title'),
  expensesAmount = document.querySelector('.expenses-amount'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select');

let money;
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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 10000,
  period: 10,
  asking: function () {

    if (confirm('Есть ли у вас дополнительний источник заработка?')) {
      let itemIncome,
        cashIncome;

      do {
        itemIncome = prompt('Каой у вас дополнительний зароботок?', 'Таксую');
      }
      while (!isNaN(itemIncome) || itemIncome === '' || itemIncome === null);

      do {
        cashIncome = prompt('Сколько вы на етом заробатываете?', '170');
      }
      while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);

      appData.income[itemIncome] = cashIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', "Бензин, Поход, Подписки");
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    for (let i = 0; i < 2; i++) {
      let inputExpenses,
        cash;

      do {
        inputExpenses = prompt('Введите обязательную статью расходов?', "Комуналка");
      }
      while (!isNaN(inputExpenses) || inputExpenses === '' || inputExpenses === null);

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
  },

  getInfoDeposit: function () {
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '4');

      }
      while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);

      do {
        appData.moneyDeposit = prompt('Какая сума заложена', '400');

      }
      while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
    }
  },

  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getInfoDeposit();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log('Период равен', appData.period, 'месяцев', 'Цель заработать', appData.mission, 'долларов');

if (appData.getTargetMonth() > 0) {
  console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцов');
} else {
  console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData) {
  console.log('Наша програма включает в себя данные:' + key + ' - ' + appData[key]);
}