/* task1
 Запитати число у користувача, піднести його до квадрату і вивести результат */

let numberSqw = Number(prompt('Please enter your number:'));
alert(`The square of this number is: ${numberSqw ** 2}`);

/* task2
Вивести середнє арифметичне двох чисел. Числа запитувати у користувача. */

let num1 = Number(prompt('Please enter first number:'));
let num2 = Number(prompt("Please enter second number:"));
alert(`The average of these numbers is: ${(num1 + num2) / 2}`);

/* task3
Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача */

let seconds = Number(prompt("Please enter value in seconds:"));
let minutes = seconds / 60;
alert(`${seconds} seconds is ${minutes} minutes`);

/* task4
Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Alex!' (згадайте про конкатенацію) */

let greeting = 'Hello';
let userName = prompt('Please enter your name');
alert(greeting + ', ' + userName + '!')