'use strict';

const adv = document.querySelector('.adv');
adv.remove();

document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

const books = document.querySelectorAll('.book');
console.log(books);

books[1].after(books[0]);
books[0].after(books[4]);
books[4].after(books[3]);
books[3].after(books[5]);

const title = books[4].querySelector('a');
title.textContent = 'Книга 3. this и Прототипы Объектов';

const collectionsOne = books[0].querySelectorAll('li');

collectionsOne[1].after(collectionsOne[3]);
collectionsOne[6].after(collectionsOne[8]);
collectionsOne[9].after(collectionsOne[2]);
collectionsOne[3].after(collectionsOne[6]);
collectionsOne[6].after(collectionsOne[8]);

const collectionsTwo = books[5].querySelectorAll('li');

collectionsTwo[1].after(collectionsTwo[9]);
collectionsTwo[9].after(collectionsTwo[3]);
collectionsTwo[3].after(collectionsTwo[4]);
collectionsTwo[2].after(collectionsTwo[6]);
collectionsTwo[6].after(collectionsTwo[7]);

const collectionsThree = books[2].querySelectorAll('li');
collectionsThree[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');