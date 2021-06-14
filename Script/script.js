'use strict';

//--------------------------------------------------------УРОК 07-------------------------------------------------------

const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function createDayItem(day, isItalic, isBold) {
    const ul = document.getElementById('week');
    let li = document.createElement('li');
    li.textContent = day;
    if (isItalic === true){
        li.style.fontStyle = 'italic';
    }
    if (isBold === true){
        li.style.fontWeight = 'bold';
    }
    ul.appendChild(li);
}

for (let i = 0; i < weekDays.length; i++){
    let isItalic = false;
    let isBold = false;
    let date = new Date();
    if (i === 0 || i === 6) {
        isItalic = true;
    }
    if (i === date.getDay()){
        isBold = true;
    }
    createDayItem(weekDays[i], isItalic, isBold);
}

//--------------------------------------------------------УРОК 06-------------------------------------------------------
/*
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n) && n > 0 && n < 100;
};

let numberInput = function(){
	let num = prompt('Введите ваш ответ от 1 до 100');
	while (!isNumber(num)) {
			num = prompt('Ошибка, введите ваш ответ от 1 до 100');
	}
	return num;
};


let numberInput = function(){
	let num;
	do {
			num = prompt('Введите ваш ответ от 1 до 100');
	}
	while (!isNumber(num));
	return num;
};

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

function game(){
    let oneMoreGame = function(){
        let oneMore = confirm('Eще разок?');
        if (oneMore === true){
            game();
        } else if (oneMore === false){
            alert('Игра окончена!');
        }
    };
	let x = randomInteger(0, 100);
    let counterN = 10;
	function answerComparison(){
		let answer = +numberInput();
		let confirmNext = function(){
			let a = confirm('Продолжить?');
			if (a === true){
				answerComparison();
			} else if (a === false){
				alert('Слабак!=)');
			}
		};
		console.log('x: ', x);
		console.log('answer: ', answer);

        counterN--;

        console.log('counterN: ', counterN);
        if (counterN === 0){
            alert('Вы проиграли. Использованы все попытки!');
            oneMoreGame();
        } else if(answer > x){
			alert('Загаданное число меньше, осталось попыток ' + counterN);
			confirmNext();
		} else if (answer < x){
			alert('Загаданное число больше, осталось попыток ' + counterN);
			confirmNext();
        } else if (answer === x){
			alert('Победа!!!');
			oneMoreGame();
		}
	}
	answerComparison();
}
game();
*/

/*
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//--------------------------------------------------------УРОК 05-------------------------------------------------------
let num;
const arr = [];

let numberInput = function(){
    do {
        num = prompt('Введите число:', 45468);
    }
    while (!isNumber(num));
    return num;
};

for (let i = 0; i < 7; i++) {
    arr[i] = numberInput();
    if (arr[i][0] === '2' || arr[i][0] === '4'){
        console.log('Искомое число: ', arr[i]);
    }
}

console.log('arr: ', arr);

next:
for(let i = 2; i < 100; i++){
    for(let j = 2; j < i; j++){
        if (i % j === 0) {
            continue next;
        }
    }
    console.log(i, 'делится на 1 и', i);
}
*/


//--------------------------------------------------------УРОК 04-------------------------------------------------------
/*
let yourString = prompt('Введите свой текст:','    Преимущество концепции «функция-как-объект» заключается в том, что код можно передавать в другую функцию точно так же, как обычную переменную или объект   ');

let lineProcessing = function(a){
    if (typeof(a) !== 'string'){
        console.log('Ошибка ввода, повторите попытку');
    } else if (a.trim().length > 30){
        console.log(a.trim().substr(0,30) + '...');
    } else {
        console.log(a.trim());
    }
};

lineProcessing(yourString);
console.log(typeof(yourString));
*/

//--------------------------------------------------------УРОК 03-------------------------------------------------------
/*
let lang = prompt('Введите желаемый язык в фотмате "ru" или "en"','ru'),
daysIf,
daysSwitch,
daysElase,
weekDays = [['ru', ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']], 
['en', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']]],
namePerson = prompt('Назови мне свое имя и я скажу кто ты:', 'Максим'),
result;
let weekObject = {
	ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	en:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};

weekDays.forEach((row) => {
    if (row[0] === lang) {
        daysIf = row[1];
    }
});

if (!daysIf) {
	console.log('IF Неправильно задан язык, вариант', lang, 'некорректный');
}

switch(lang){
    case 'ru':
        daysSwitch = weekDays[0][1];
        break;
    case 'en':
        daysSwitch = weekDays[1][1];
        break;
    default:
        (console.log('SWITCH Неправильно задан язык, вариант', lang, 'некорректный'));
}

const foundRow = weekDays.find(row => row[0] === lang);
if (foundRow) {
	daysElase = foundRow[1];
} else {
  console.log('Ошибка! Неправильно задан язык, вариант', lang, 'некорректный');
}

//Второе задание: Определение роли
result = namePerson === 'Артем' ? 'Директор' : (namePerson === 'Максим' ? 'Преподаватель' : 'Студент');
console.log('Ты: ', result);

console.log('Дни недели "if":', daysIf);
console.log('Дни недели "Switch": ', daysSwitch);
console.log('Дни недели "Object": ', weekObject[lang]);
console.log('Дни недели без использования "if" или "switch"', daysElase);
*/

//--------------------------------------------------------УРОК 02-------------------------------------------------------
/*let num = 266219, 
i = 0, 
result = 1, 
resultPow;

while (i < String(num).length){
    result *= Number(String(num)[i]);
    i++;
}

resultPow = result ** 3;

console.log('Произведение цифр этого числа: result = ', result);
console.log('Результат в степени 3: result^3 = ', resultPow);
console.log('Вывести в консоль первые 2 цифры полученного числа: ', String(resultPow).substr(0, 2));
*/


