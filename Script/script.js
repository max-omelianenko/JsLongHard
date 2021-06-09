'use strict';

<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
console.log('Дни недели без использования "if" или "switch"', weekDays.find(row => row[0] === lang)[1]);
=======
console.log('Дни недели "Object": ', weekObject[lang]);
console.log('Дни недели без использования "if" или "switch"', daysElase);
>>>>>>> Stashed changes


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


