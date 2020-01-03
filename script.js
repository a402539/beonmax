/*jslint node: true, es6: true*/
'use strict';
/* jshint undef: true, unused: true */
// /* globals alert, confirm, prompt*/ // не решает проблему ReferenceError

// Модальные окна

// alert("Hello world!"); // на странице работает, но в консоли дает ошибку
// let answer = confirm('Are you here?'); // аналогично

//let answer = prompt("Есть ли вам 18?", "Да");
//console.log(answer, typeof(answer));

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(typeof(arr), arr);

// официально признанная ошибка
console.log(typeof(null), '"null" incorrectly recognised as object'); // object, хотя null - отдельный тип данных

// 2.4 Операторы в JS
//let answer = +prompt("Есть ли вам 18?","Да"); // 
//console.log(typeof(answer),'unary plus makes number');
//console.log("arr" + " string concatenation is object");
//console.log(4 + " concatenation of a number with string is object");
//console.log(4 + +" not a mathematical operation results in NaN"); // W007 Confusing pluses

let inc = 10,
    dec = 10;
console.log(inc++, dec--); // возвращает старые данные 10 10
console.log(++inc, --dec); // возвращает новые данные  12  8
//console.log(++inc--, --dec++); // ReferenceError: Invalid left-hand side expression in prefix operation
console.log(5%2); // 1 = остаток от деления 5 на 2
console.log('2' == 2); // true - значения совпадают
console.log('2' === 2); // false - типы не совпадают

console.log('Урок 2.5. Учимся работать с системой контроля версий Git и с сервисом GitHub');
// Ctrl+Shift+P shell - Terminal: Select default shell - выбрать shell по умолчанию git bash
// git init
// git config --global user.name "Boris"
// git config --global user.email "a402539@yandex.ru"
// git status // посмотреть состояние
// git add -A // добавить файлы
// git commit -a -m'first commit' // создать контрольную точку
// сделать ищменения в файлах и отразить эти изменения, создав новую контрольную точку
// git add -A
// git commit -a -m'second'
// посмотреть log
// git log
// push an existing repository from the command line
// git remote add origin https://github.com/a402539/beonmax.git
// git push -u origin master // следующий раз можно писать просто git push

console.log('Урок 2.6. Как работать с GitHub с разных компьютеров.Gitignore и GitKraken');
// скопировать в GitHub ссылку https://github.com/a402539/beonmax.git
// cd .. // перейти в вышестоящую папку
// git clone https://github.com/a402539/beonmax.git work // создастся папка work и в ней копия beonmax.git