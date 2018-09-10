let money = prompt('Сколько у Вас денег?');
let apple = prompt('Сколько Вы купили яблок?');
let bread = prompt('Сколько Вы купили батонов?');
let apple_price = prompt('Введите цену яблока') * apple;
let bread_price = prompt('Введите цену батона') * bread;
let calc = money >= apple + bread;
document.body.innerHTML = calc;