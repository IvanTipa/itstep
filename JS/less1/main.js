'use strict';

let number = 10; // NaN - також відноситься до чисел (.typeof(Nan))
let string = "Привіт, світ!";
let boolean1 = true; //false
let object1 = {
  name: "John",
  age: 30
};
let und = undefined;
let nul = null;
let symb = Symbol;
let big = BigInt;

console.log(number, string, boolean1, object1, und, nul, symb, big);

document.write("<h1>Заголовок рівня 1</h1>");
document.write("<h2>Заголовок рівня 2</h2>");
document.write("<h3>Заголовок рівня 3</h3>");
document.write("<h4>Заголовок рівня 4</h4>");
document.write("<h5>Заголовок рівня 5</h5>");
document.write("<h6>Заголовок рівня 6</h6>");

// 2. частина

let ale = alert('Перша домашня робота з JS');

// 3.

let conf = confirm("Вивести у документ?");
document.write(conf);

// 4. 

let num1 = prompt('Перше число');
let num2 = prompt('Друге число');
let result = num1 * num2;


document.write(`<br> ${result}`);

console.log((2, 5 - 2) * 2)