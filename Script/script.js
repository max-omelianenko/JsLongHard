'use strict';

let lang = prompt('Введите желаемый язык в фотмате "ru" или "en"','ru'),
daysIf,
daysSwitch,
weekDays = [['ru', ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']], 
['en', ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']]],
namePerson = prompt('Назови мне свое имя и я скажу кто ты:', 'Максим'),
result;

weekDays.forEach((row) => {
    if (row[0] === lang) {
        daysIf = row[1];
    }
});

switch(lang){
    case 'ru':
        daysSwitch = weekDays[0][1];
        break;
    case 'en':
        daysSwitch = weekDays[1][1];
        break;
    default:
        (console.log('Неправильно задан язык, вариант', lang, 'некорректный'));
}

//Второе задание: Определение роли
result = namePerson === 'Артем' ? 'Директор' : (namePerson === 'Максим' ? 'Преподаватель' : 'Студент');
console.log('Ты: ', result);

console.log('Дни недели "if":', daysIf);
console.log('Дни недели "Switch": ', daysSwitch);
console.log('Дни недели без использования "if" или "switch"', weekDays.find(row => row[0] === lang)[1]);


//Задание второго урока
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


