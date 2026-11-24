console.log('=== Задание №1 ===');
let age = Number(prompt("Введите возраст"));

if (age < 18) {
  console.log("Несовершеннолетний");
} else if (age >= 18 && age <= 59) {
  console.log("Взрослый");
} else if (age >= 60) {
  console.log("Пенсионный возраст");
}
console.log('=== Задание №2 ===');
let score = Number(prompt("Введите баллы:"));

if (score >= 90) {
  console.log("Отлично (5)");
} else if (score >= 75) {
  console.log("Хорошо (4)");
} else if (score >= 60) {
  console.log("Удовлетворительно (3)");
} else {
  console.log("Неудовлетворительно (2)");
}
console.log('=== Задание №3 ===');
let login = "admin";
let password = "12345";

let userLogin = prompt("Логин:");
let userPassword = prompt("Пароль:");

if (userLogin == login) {
    if (userPassword == password) {
        alert("Добро пожаловать!");
    } else {
        alert("Неверный пароль");
    }
} else {
    alert("Пользователь не найден");
}
console.log('=== Задание №4 ===');
let number1 = 20;
let number2 = 5;
let operation = "+";

if (operation == "+") {
  console.log(number1 + number2);
} else if (operation == "-") {
  console.log(number1 - number2);
} else if (operation == "*") {
  console.log(number1 * number2);
} else if (operation == "/") {
  console.log(number1 / number2);
} else {
  console.log("Ошибка");
}
console.log('=== Задание №5 ===');
let age = 20;
let isRegistered = true;
let isBlocked = false;

if (age >= 18 && isRegistered && !isBlocked) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}