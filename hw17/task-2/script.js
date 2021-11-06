function getResult(x, y) {
  let result = 0;

  x = parseInt(prompt('Input x:'));
  y = parseInt(prompt('Input y:'));

  let powed = Math.pow(x, y);

  powed = powed.toString();
  powed = powed.split('');
  powed.forEach(element => {
    element = parseInt(element);
    result += element;
  });

  return result;
}

console.log(getResult(4, 8))