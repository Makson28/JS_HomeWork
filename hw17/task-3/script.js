'use strict'

const country = document.getElementById('country'),
  city = document.getElementById('city'),
  result = document.querySelector('.result');

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
}

country.addEventListener('change', () => {
  city.innerHTML = null;
  for (const key in cityArr) {
    if (country.value === key) {
      city.style.display = 'inline-block';
      cityArr[key].forEach(element => {
        city.innerHTML += `<option value=` + element + `>` + element + `</option>`;
      });
    }
  }
});

city.addEventListener('change', () => {
  const option = document.querySelector(`option[value=`+ country.value + `]`);
  result.textContent = option.textContent + ` ` + city.value;
});