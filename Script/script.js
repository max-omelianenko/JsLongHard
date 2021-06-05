'use strict';

let num = 266219, 
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



