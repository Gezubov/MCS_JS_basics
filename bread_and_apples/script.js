let money = parseInt(prompt('Сколько у Вас денег?'));
let apple = parseInt(prompt('Сколько Вы купили яблок?'));
let bread = parseInt(prompt('Сколько Вы купили батонов?'));
let apple_price =  parseInt(prompt('Введите цену яблока')) * apple;
let bread_price =  parseInt(prompt('Введите цену батона')) * bread;
let calc = money >= apple + bread;
document.body.innerHTML = calc;