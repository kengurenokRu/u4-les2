function printAboutMe() {
  const firstName = prompt('Напишите ваше имя?');
  const age = prompt('Напишите сколько вам лет?');

  if (age < 20) alert('Привет, Максим!');
  else if (age > 45) alert('Здравствуйте, Максим!');
  else alert('Здравствуй, Максим!');
}

function printStudents() {
  let temp = '';

  while (true) {
    const name = prompt('Напишите ваше имя?');
    if (name === null) break;
    else temp = temp + ', ' + name;
  }

  temp += '.';

  return temp;
}

function checkCart(count, price, promo) {
  if (count > 20) price *= 0.90;
  else if (count > 10) price *= 0.95;

  if (price > 10000) price -= 1000;

  if (promo.toLowerCase() === 'methed') price *= 0.85;

  return price;
}

function filter(list, blackList) {
  return list.filter(item => !blackList.includes(item));
}

printAboutMe();

alert( printStudents() );

alert( checkCart(21, 10000, 'mEtHed') );

alert( filter([1, 2, 3, 4, 5, 6], [2, 4]) );