'use strict';
//--------------------------------------------------------УРОК 12-------------------------------------------------------

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

const todoData = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

const render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';
    headerInput.value = '';

    todoData.forEach(function(item, index){
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
                '<button class="todo-remove"></button>' + 
                '<button class="todo-complete"></button>' + 
            '</div>';
        if (item.completed){
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const todoComplete = li.querySelector('.todo-complete');
        todoComplete.addEventListener('click', function(){
            item.completed =!item.completed;
            localStorage.setItem('data', JSON.stringify(todoData));
            render();
        });

        const todoRemove = li.querySelector('.todo-remove');

        todoRemove.addEventListener('click', function(){
            li.remove();
            todoData.splice(index, 1);
            localStorage.setItem('data', JSON.stringify(todoData));
            render();
        }); 
    });


};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();
    const newTodo = {
        value: headerInput.value,
        completed: false
    };
    if(headerInput.value !== ''){
        todoData.push(newTodo);
    } else {
        alert('Пустые дела не добавляются! =Р ');
    }
    render();

    localStorage.setItem('data', JSON.stringify(todoData));
});

render();


//--------------------------------------------------------УРОК 09-------------------------------------------------------
/*
const date = document.querySelector('.date'),
    dateTime = document.querySelector('.date_time');

let currentTime;
const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    month = [
        ' января ',' февраля ',' марта ',' апреля ',' мая ',' июня ',
        ' июля ',' августа ',' сентября ',' октября ',' ноября ',' декабря '
    ],
    hour = [' час ', ' часа ', ' часов '],
    minutes = [' минута ', ' минуты ', ' минут '],
    seconds = [' секунда!', ' секунды!', ' секунд!'],
    getCurrentTime = function(){
        currentTime = new Date();
        return currentTime;
    },
    dateOutput = {
    formatOne: function(now){
        const compare = function(time){
            let timeWord;
            if (time > 10 && time < 20){
                timeWord = 2;  
            }
            else {
                time = time % 10;
            }

            if (time === 1){
                timeWord = 0;
            }
            else if(time >= 2 && time <= 4){
                timeWord = 1;
            }
            else if(time >= 5 || time === 0){
                timeWord = 2;
            }
            return timeWord;
        };
        date.textContent = 'Сегодня: ' + weekDays[now.getDay()] + ', ' + now.getDate() + month[now.getMonth()] +
        now.getFullYear() + ' года, ' + now.getHours() + hour[compare(now.getHours())] + now.getMinutes() +
        minutes[compare(now.getMinutes())] + now.getSeconds() + seconds[compare(now.getSeconds())];
    },
    formatTwo: function(now){
        const compare = function(time){
            let timeOut;
            if (time < 10){
                time = time.toString(); 
                timeOut = '0' + time;
            }
            if (time >= 10){
                timeOut = time.toString(); 
            }
            return timeOut;
        };
        dateTime.textContent = 'Сегодня: ' + weekDays[now.getDay()] + ' ' + compare(now.getDate()) + '.' + 
        compare(now.getMonth()) + '.' + now.getFullYear() + ' - ' + compare(now.getHours()) + ':' +
        compare(now.getMinutes()) + ':' + compare(now.getSeconds());
    }
};

setInterval(
    () => dateOutput.formatOne(getCurrentTime()),
    1000
);
setInterval(
    () => dateOutput.formatTwo(getCurrentTime()),
    1000
);

//dateOutput.formatOne(getCurrentTime());
//dateOutput.formatTwo(getCurrentTime());
*/


//--------------------------------------------------------УРОК 07-------------------------------------------------------
/*
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
*/
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


