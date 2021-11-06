document.addEventListener('DOMContentLoaded', () => {
  'use srtict';

  // Таймер
  function countTimer(deadLine) {
    const timerhours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRamaining() {
      const dateStop = new Date(deadLine).getTime(),
        dateNow = new Date().getTime(),
        timeRamaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRamaining % 60),
        minutes = Math.floor((timeRamaining / 60) % 60),
        hours = Math.floor(timeRamaining / 60 / 60);
      return {
        timeRamaining,
        hours,
        minutes,
        seconds
      };
    }

    function addZero(num) {
      if (String(num).length === 1) {
        return '0' + num;
      } else {
        return String(num);
      }
    }

    function updateClock() {
      const timer = getTimeRamaining();

      if (timer.timeRamaining > 0) {
        timerhours.textContent = addZero(timer.hours);
        timerMinutes.textContent = addZero(timer.minutes);
        timerSeconds.textContent = addZero(timer.seconds);
        setInterval(updateClock, 1000);
      } else {
        timerhours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
      }
    }

    updateClock();
  }
  countTimer('27 october 2021');

  // Меню
  const togleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      menuItems = menu.querySelectorAll('ul>li'),
      closeBtn = document.querySelector('.close-btn');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));

  };
  togleMenu();
});