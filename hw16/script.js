'use strict';

const start = document.getElementById('start'),
  cancel = document.getElementById('cancel'),
  incomePlus = document.getElementsByTagName('button')[0],
  expensesPlus = document.getElementsByTagName('button')[1],
  depositCheck = document.getElementById('deposit-check'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
  budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
  expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
  accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
  additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
  incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
  targetMonthValue = document.getElementsByClassName('target_month-value')[0],
  salaryAmount = document.querySelector('.salary-amount'),
  incomeTitle = document.querySelector('.income-title'),
  expensesTitle = document.querySelector('.expenses-title'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount'),
  depositBank = document.querySelector('.deposit-bank'),
  depositAmount = document.querySelector('.deposit-amount'),
  depositPercent = document.querySelector('.deposit-percent');


let expensesItems = document.querySelectorAll('.expenses-items'),
  incomeItems = document.querySelectorAll('.income-items');

class AppData {
  constructor() {
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.expensesMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  }

  check() {
    if (salaryAmount.value !== '') {
      start.removeAttribute('disabled');
    }
  };

  start() {
    if (salaryAmount.value === '') {
      start.setAttribute('disabled', 'value');
      return;
    }
    let allInput = document.querySelectorAll('.data input[type = next]');
    allInput.forEach(item => {
      item.setAttribute('disabled', 'true');
    });
    expensesPlus.setAttribute('disabled', 'true');
    incomePlus.setAttribute('disabled', 'true');
    start.style.display = 'none';
    cancel.style.display = 'block';

    this.budget = +salaryAmount.value;

    this.getExpInc();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getInfoDeposit();
    this.getBudget();
    this.getStatusIncome();
    this.showResult();
  };

  showResult() {
    const _this = this;
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('change', () => {
      incomePeriodValue.value = _this.calcPeriod();
    });
  };

  addExpensesBlock() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  };

  addIncomeBlock() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  };

  getExpInc() {
    const count = item => {
      const startStr = item.className.split('-')[0];
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;
      if (itemTitle !== '' && itemAmount !== '') {
        this[startStr][itemTitle] = itemAmount;
      }
    }

    incomeItems.forEach(count);
    expensesItems.forEach(count);

    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  };

  getAddExpenses() {
    const addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(item => {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  };

  getAddIncome() {
    additionalIncomeItem.forEach(item => {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  };

  getExpensesMonth() {
    for (let key in this.expenses) {
      this.expensesMonth += this.expenses[key];
    }
  };

  getBudget() {
    const monthDeposit = this.moneyDeposit * (this.percentDeposit / 100);
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + monthDeposit;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  };

  getTargetMonth() {
    return targetAmount.value / this.budgetMonth;
  };

  getStatusIncome() {
    if (this.budgetDay >= 16) {
      return ('У вас высокий уровень дохода');

    } else if (this.budgetDay >= 8 && this.budgetDay < 16) {
      return ('У вас средний уровень дохода');

    } else if (this.budgetDay < 8 && this.budgetDay > 0) {
      return ('К сожалению у вас уровень дохода ниже среднего');

    } else if (this.budgetDay == 0) {
      return ('У вас нет дохода');

    } else if (this.budgetDay < 0) {
      return ('Что то пошло не так');
    }
  };

  calcPeriod() {
    return this.budgetMonth * periodSelect.value;
  };

  reset() {
    let inputTextData = document.querySelectorAll('.data input[type = next]'),
      resultInputAll = document.querySelectorAll('.data input[type = next]');

    inputTextData.forEach(elem => {
      elem.value = '';
      elem.removeAttribute('disabled');
      periodSelect.value = '0';
      periodAmount.innerHTML = periodSelect.value;

    });

    resultInputAll.forEach(elem => {
      elem.value = '';
    });

    for (let i = 1; i < incomeItems.length; i++) {
      incomeItems[i].parentNode.removeChild(incomeItems[i]);
      incomePlus.style.display = 'block';
    }

    for (let i = 1; i < expensesItems.length; i++) {
      expensesItems[i].parentNode.removeChild(expensesItems[i]);
      expensesPlus.style.display = 'block';
    }

    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.expensesMonth = 0;
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;

    cancel.style.display = 'none';
    start.style.display = 'block';
    incomePlus.removeAttribute('disabled');
    expensesPlus.removeAttribute('disabled');
    depositCheck.checked = false;
  };

  getInfoDeposit() {
    if (this.deposit) {
      this.percentDeposit = depositPercent.value;
      this.moneyDeposit = depositAmount.value;
    }

    // if (depositPercent.value === NaN || depositPercent.value === '' || depositPercent.value < 0 || depositPercent.value > 100) {
    //   start.disabled = true;  
    //   alert("Введите корректное значение в поле проценты");
    // } else {
    //   start.disabled = false;
    // }
  };

  changePercent() {
    const valueSelect = this.value;
    if (valueSelect === 'other') {
      depositPercent.style.display = 'inline-block';
    } else {
      depositPercent.value = valueSelect;
      depositPercent.style.display = 'none';
    }
  }

  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';
      this.deposit = true;
      depositBank.addEventListener('change', this.changePercent);
    } else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      depositBank.value = '';
      depositAmount.value = '';
      this.deposit = false;
      depositBank.removeEventListener('change', this.changePercent);
      depositPercent.style.display = 'none';
    }
  }

  eventListeners() {
    start.addEventListener('click', this.start.bind(this));
    incomePlus.addEventListener('click', this.addIncomeBlock);
    expensesPlus.addEventListener('click', this.addExpensesBlock);
    salaryAmount.addEventListener('keyup', this.check);
    cancel.addEventListener('click', this.reset.bind(this));

    periodSelect.addEventListener('change', () => {
      periodAmount.innerHTML = periodSelect.value;
    });

    depositCheck.addEventListener('change', this.depositHandler.bind(this));
  };

};

const appData = new AppData();
appData.eventListeners();

let addExp = [];
for (let i = 0; i < appData.addExpenses.length; i++) {
  let element = appData.addExpenses[i].trim();
  element = element.charAt(0).toUpperCase + element.substring(1).toLowerCase();
  addExp.push(element);
}