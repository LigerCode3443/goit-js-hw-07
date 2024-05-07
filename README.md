# goit-js-hw-01

// ## Прості задачі

// 1. Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.
//
//function newArr(array) {
// for (const items of array) {
// console.log(items);
// }
// }
// newArr([5, 8, 9]);
// TODO=====================================
// 1. Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у
// консоль.

// function newArr(str) {
// for (let i = 1; i < str.length; i += 2) {
// const element = str[i];

// console.log(element);
// }
// }
// newArr(["px", "js", "html", "css", "ms", "s"]);
// TODO=====================================
// 1. Напиши функцію, яка приймає масив чисел та виводить лише парні числа у
// консоль.

// function newArr(arr) {
// for (const num of arr) {
// if (num % 2 === 0) console.log(num);
// }
// }
// newArr([5, 8, 9, 10, 12, 3, 7]);
// TODO=====================================
// 1. Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив
// чисел. Потрібно вивести лише ті елементи масиву які більші за max.

// function newNum(arr, max) {
// for (const item of arr) {
// if (item > max) console.log(item);
// }
// }
// newNum([2, 5, 1, 0, -6, 6, 7, 9, 10], 4);
// TODO=====================================
// 1. Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.

// function newNum(arr) {
// let total = 0;
// for (const item of arr) {
// total += item;
// }
// console.log(total);
// }
// newNum([2, 5, 1, 0, 6, 6, 7, 9, 10]);
// TODO=====================================
// 1. Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна
// порахувати скільки разів шуканий елемент зустрічається у масиві.
// function newArr(arr, str) {
// let count = 0;
// for (const item of arr) {
// if (item === str) {
// count++;
// }
// }
// console.log(count);
// }
// newArr([3, 4, 4, 5, 6, 7, 2, , 6, 6], 6);
// TODO=====================================
// 1. Напиши функцію яка приймає масив чисел. Функція повинна видалити усі
// негативні(відємні числа) з масиву та повернути новий масив.

// function newArr(arr) {
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] < 0) {
// arr.splice(i, 1);
// }
// }
// console.log(arr);
// let newArr2 = [];
// for (const item of arr) {
// if (item > 0) {
// newArr2.push(item);
// }
// }
// console.log(newArr2);
// }

// newArr([-3, 4, -4, 5, 6, 7, -2, 6, -6, 5, 6, 6, 6]);
// TODO=====================================
// 1. Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент
// масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до
// нижнього регістру, в іншому випадку привести до верхнього регістру.
// function newStr(str) {
// for (const items of str) {
// if (items.length < 6) {
// items.toLowerCase();
// } else {
// items.toUpperCase();
// }
// }
// console.log(str);
// }
// newStr(["Hello", "World", "Javascript", "Htmlcss"]);
// TODO=====================================
// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
// лише непарні числа.

// function newNum(num) {
// let resout = [];
// for (const items of num) {
// if (items % 2 === 1) {
// resout.push(items);
// }
// }
// return resout;
// }
// console.log(newNum([3, 6, 4, 7, 7, 8, 9, 2]));
// TODO=====================================
// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне
// число помножене на індекс, за яким воно знаходиться в масиві.
// function newNum(num) {
// let result = [];
// for (let i = 0; i < num.length; i++) {
// const element = num[i];
// result.push(element \* i);
// }
// return result;
// }

// console.log(newNum([3, 6, 4, 7, 7, 8, 9, 2]));
// TODO=====================================
// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
// лише числа, які діляться на 3.
// function newNum(num) {
// let result = [];
// for (const item of num) {
// if (item % 3 === 0) {
// result.push(item);
// }
// }
// return result;
// }

// console.log(newNum([3, 6, 4, 7, 7, 8, 9, 2]));

// ## Середні задачі
// TODO=====================================
// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
// де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

// function newStr(arr1, arr2) {
// let newArr = [];
// for (let i = 0; i < arr1.length; i++) {
// for (let j = 0; j < arr2.length; j++) {
// if (arr1[i] === arr2[j]) {
// newArr.push(arr1[i]);
// }
// }
// }
// return newArr;
// }
// console.log(newStr([2, 5, 8, 9, 10, 3, 4], [1, 4, 7, 8, 10]));
// TODO=====================================???????
// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
// де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// function newStr(arr1, arr2) {
// let newArr = [];
// for (let i = 0; i < arr1.length; i++) {
// for (let j = 0; j < arr2.length; j++) {
// if (arr1[i] !== arr2[j]) {
// newArr.push(arr1[i]);
// }
// }
// }
// return newArr;
// }
// console.log(newStr([2, 5, 8, 9, 10, 3, 4], [1, 4, 7, 8, 10]));
// TODO=====================================
// 1. Напиши функцію яка приймає масив та знаходить мінімальний елемент.

// TODO=====================================
// 1. Напиши функцію яка приймає масив та знаходить максимальний елемент.
// TODO=====================================
// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
// більші за середнє значення всіх елементів масиву.
// function newStr(str) {
// let total = 0;

// for (const item of str) {
// total += item;
// }
// }
// console.log(newStr([2, 5, 8, 9, 10, 3, 4, 12, 4, 17, 8, 10]));
// TODO=====================================
// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
// більші за власний індекс.

// function newStr(str) {
// let total = [];
// for (let i = 0; i < str.length; i++) {
// if (str[i] > i) {
// total.push(str[i]);
// }
// }
// return total;
// }
// console.log(newStr([2, 5, 8, 9, 10, 3, 4, 12, 4, 17, 8, 10]));

// TODO=====================================???????
// 1. Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний
// елемент та видалити його з масиву.
// function newStr(arr) {
// let min = Infinity;
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] < min) {
// min = arr[i];
// arr.splice(i, 1);
// }
// }
// return arr;
// }
// console.log(newStr([11, 8, 9, 10, 3, 4, 12, 4, 17, 8, 10]));
// TODO=====================================
// 1. Напиши функцію яка приймає два параметри start та end. Функія повина
// повернути масив де будуть числа з діапазону але лише ті у яких не має
// цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5"
// у собі.
// TODO=====================================

// ## Складні

// 1. Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні
// числа переміщені в початок, а всі непарні - в кінець.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
// елемент є сумою усіх попередніх елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить
// лише унікальні числа.
// 1. Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без
// дублювання елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
// елемент є середньоарифметичним всіх сусідніх елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи
// відсортовані в порядку збільшення або зменшення.
// 1. Напиши функцію, яка приймає массив рядочків та їх за довжиною елементів.

// - [Kata #1](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)
// - [Kata #2](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)
// - [Kata #3](https://www.codewars.com/kata/5813d19765d81c592200001a)
// - [Kata #4](https://www.codewars.com/kata/62ad72443809a4006998218a)
// - [Kata #5](https://www.codewars.com/kata/53b2ff49b82af296ce001139)
// - [Kata #6](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)
// - [Kata #7](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)
// - [Kata #8](https://www.codewars.com/kata/5a905c2157c562994900009d)
// - [Kata #9](https://www.codewars.com/kata/57d814e4950d8489720008db)
// - [Kata #10](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)
// - [Kata #11](https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0)

// let totalSum = 0;
// let number;
// do {
// number = prompt("plese namber");
// if (number === null) {
// break;
// }
// totalSum += Number(number);
// } while (true);

// alert(totalSum);
//TODO:============task-02=========================
// Перебрати та вивести числа від 10 до 30, число 15 пропустити і не виводити.

// function sortNumber(min, max, value) {
// let resout = "";
// let count = 0;
// for (let i = min; i <= max; i += 1) {
// if (i === value) {
// continue;
// }
// count += 1;
// resout += `${count}) ${i}\n`;
// // resout += `${i - min + 1}) ${i}\n`;
// }
// return resout;
// }
// console.log(sortNumber(10, 30, 15));

//TODO:============task-03=========================
// Перевірте чи співпадає введений пароль password із збереженим паролем.
// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true,
// якщо значення збігаються, і false - якщо ні.

// const clintePassword = prompt("Enter your password");
// const userName = prompt("Enter your name");
// function checkPassword(password, user) {
// const userPassword = "admin";

// return;
// userPassword === password ? `Hello ${user}` : `Bay bay ${user}`;
// }
// alert(checkPassword(clintePassword, userName));
//TODO:============task-06=========================
// Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл for з оператором break та continue.

// const colors = [
// { hex: "#f44336", rgb: "244,67,54" },
// { hex: "#2196f3", rgb: "33,150,243" },
// { hex: "#4caf50", rgb: "76,175,80" },
// { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
// hexColors.push(color.hex);
// rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// const book = {
// author: "Bernard Cornwell",
// genres: ["historical prose", "adventure"],
// rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
// console.log(key); // Ключ
// }
// }

// function getProductPrice(productName) {
// const products = [
// { name: "Radar", price: 1300, quantity: 4 },
// { name: "Scanner", price: 2700, quantity: 3 },
// { name: "Droid", price: 400, quantity: 7 },
// { name: "Grip", price: 1200, quantity: 9 },
// ];
// for (const product of products) {
// if (product.name === productName) return product.price;
// }
// }
// console.log(getProductPrice("Radar"));

const book = {
title: "The Last Kingdom",
author: "Bernard Cornwell",
genres: ["historical prose", "adventure"],
isPublic: true,
rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined

// !====================================================================

const user = {
name: "Jacques Gluke",
tag: "jgluke",
location: {
country: "Jamaica",
city: "Ocho Rios",
},
hobbies: ["swimming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"

// !====================================================================

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"

// !====================================================================

const book = {
title: "The Last Kingdom",
author: "Bernard Cornwell",
genres: ["historical prose", "adventure"],
isPublic: true,
rating: 8.38,
};

console.log(book.title); // "The Last Kingdom"
console.log(book["title"]); // "The Last Kingdom"

console.log(book.genres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(book.propKey); // undefined
console.log(book[propKey]); // "Bernard Cornwell"

// !====================================================================
const book = {
title: "The Last Kingdom",
author: "Bernard Cornwell",
genres: ["historical prose", "adventure"],
isPublic: true,
rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]
// !====================================================================
const book = {
title: "The Last Kingdom",
author: "Bernard Cornwell",
genres: ["historical prose", "adventure"],
isPublic: true,
rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];
book.price = {
hardcover: 39,
softcover: 29,
};

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]
// !====================================================================
const name = "Henry Sibola";
const age = 25;

const user = {
name,
age,
};

console.log(user.name); // "Henry Sibola"
console.log(user.age); // 25
// !====================================================================
const propName = "name";
const user = {
age: 25,
// ключ цієї властивості буде взято зі значення змінної propName
[propName]: "Henry Sibola",
};

console.log(user.name); // "Henry Sibola"
//??????????????????????????????????????
// !====================================================================
const book = {
title: "The Last Kingdom",
author: "Bernard Cornwell",
genres: ["historical prose", "adventure"],
rating: 8.38,
};

for (const key in book) {
console.log(key); // Ключ
console.log(book[key]); // Значення властивості з таким ключем
}
// !====================================================================
// !====================================================================
const book = {
title: "The Last Kingdom",
author: "Bernard Cornwell",
genres: ["historical prose", "adventure"],
rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']
// !====================================================================
// !====================================================================
const book = {
author: "Bernard Cornwell",
genres: ["historical prose", "adventure"],
rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys)
console.log(key); // Ключ
console.log(book[key]); // Значення властивості
}
// !====================================================================

// !====================================================================

// !====================================================================
function countProps(object) {
let propCount = 0;
const keys = Object.keys(object);
for(const key of keys){
if (keys.hasOwnProperty(key)){
propCount += 1;
}
}
return propCount;
}
// \* Літерал об'єкта
//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// const person = {
// username: "Mango",
// hobby: "paint",
// age: 24,
// greet() {
// return `Hello ${this.username}`;
// },
// greet: function () {
// return `Hello ${this.username}`;
// },
// };
// person["hobby"] = "skydiving";
// person.hobby = "skydiving";
// person.mood = "happy";
// person["mood"] = "happy";
// console.log(person);
// console.log(person.greet());
// const person1 = Object.create(person);
// person1.username = "Kiwi";

// console.log(person1.greet());
// console.log(person1);
// person = person.happy;

// console.log(person.hobby);
// console.log(person.greet());
// console.log(this);

// \* Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-2======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const user = {
// username: "Chili",
// car: "BMW",
// color: "red",
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// function objValues(obj, findKey) {
// return Object.keys(user).includes(findKey);
// for (const key in obj) {
// if (key === findKey) return true;
// }
// return false;
// }
// console.log(objValues(user, "px"));

// function objValues(obj, key) {
// return key in obj;
// }
// console.log(objValues(user, "car"));
//TODO:============task-3======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0
// const salaries = {
// Mango: 100,
// Poly: 160,
// Ajax: 1470,
// };
// function totalSalaries(obj) {
// let totalSum = 0;
// for (const key of Object.values(obj)) {
// totalSum += key;
// }
// return totalSum;
// }
// console.log(totalSalaries(salaries));
//TODO:============task-4======================================================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]

// const user = {
// name: "John",
// surName: "Stones",
// age: 20,
// hobby: "tenis",
// haveCar: true,
// merried: false,
// };
// function shwoObjectData(obj) {
// return Object.entries(obj);
// }
// console.log(shwoObjectData(user));

//TODO:============task-5======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
// width: 200,
// height: 300,
// title: "My menu",
// };
// function multiplyNumeric(obj) {
// for (const key in obj) {
// if (obj.hasOwnProperty(key) && typeof obj[key] === "number") {
// //! перевірка чи це його властивость
// obj[key] \*= 2;
// }
// }
// return obj;
// }
// console.log(multiplyNumeric(menu));

//TODO:============task-6==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.
// const stor = {
// product: [],

// hasProduct(name) {
// return this.product.includes(name);
// },

// addProduct(newProduct) {
// return this.product.push(newProduct);
// },
// };

// stor.addProduct("tomat");
// stor.addProduct("kivi");
// stor.addProduct("apple");
// stor.addProduct("cocos");

// console.log(stor);

// console.log(stor.hasProduct("kivi"));
