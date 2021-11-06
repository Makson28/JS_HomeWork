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

  // PopUp
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close'),
      popupContent = document.querySelector('.popup-content');

    const togglePopUpStyle = () => {
      const currentStyle = popup.style.display;
      popup.style.display = currentStyle === 'block' ? 'none' : 'block';
    };

    popupBtn.forEach(elem => {
      elem.addEventListener('click', () => {

        if (screen.width > 768) {
          togglePopUpStyle();

          let start = -80;
          let k = 0.5;

          const step = () => {
            if (start < 0) {
              popupContent.style.transform = `translateX(${start}vw)`;
              start += Math.ceil(Math.pow(k, 3));
              k += 0.05;
              window.requestAnimationFrame(step);
            } else {
              start = 1;
              popupContent.style.transform = `translateX(${start}vw)`;
            }

          };
          window.requestAnimationFrame(step);

        } else {
          togglePopUpStyle();
          popupContent.style.transform = `translateX(${-50}%)`;
          popupContent.style.left = `50%`;
        }

      });

    });

    popupClose.addEventListener('click', () => {
      if (screen.width > 768) {
        let start = 1;
        let k = 0.5;

        const step = () => {
          if (start < 89) {
            start += Math.ceil(Math.pow(k, 3));
            k += 0.05;
            popupContent.style.transform = `translateX(${start}vw)`;
            window.requestAnimationFrame(step);
          } else {
            togglePopUpStyle();
          }
        };
        window.requestAnimationFrame(step);

      } else {
        togglePopUpStyle();
      }

    });
  };
  togglePopUp();

});