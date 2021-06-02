'use strict';

let num, lengthOfNumber, numString, i, result;

num = 266219;
numString = String(num);
lengthOfNumber = numString.length;
i = 0;
result = 1;

while (i < lengthOfNumber){
    result *= Number(numString[i]);
    i++;
}

console.log('Произведение цифр этого числа: result = ', result);
result **= 3;
console.log('Результат в степени 3: result^3 = ', result);
numString = String(result);
console.log('Вывести в консоль первые 2 цифры полученного числа: ', numString.substr(0, 2));



