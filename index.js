// const personalAge = true;
// const dogAge = "-1";
// console.log("0" >= "1");
// const userRole = 1;
// const adminRole = 2;
// const productStockPrice = 0;
// const defaultProductPrice = null;
// const adminPrice = false;
// const productPrice = (adminPrice ?? productStockPrice ?? defaultProductPrice ?? 100);
// console.log("productPrice", productPrice);
// const defaultUserName = null;
// const ivanName = "Ivan";

// const ivanRole = userRole;
// const ivanBalance = 300;

// const result = (ivanRole === adminRole) && ivanBalance >= productPrice; 


// const authorName = !(ivanRole === adminRole &&  "Admin") && 'User';
// console.log("authorName", authorName);
// console.log('ivanName', !!ivanName);

// //==========================

// let productTitle = null;
// productTitle = productTitle || 'Назва товару';
// console.log('productTitle', productTitle);
// {const name = "Мікрофон";
// const productDefault = 'Назва товару';

// const newProductName = "Мікрофон 3000";
// const userRole = "admin";
// const test2 = "test";

// const updateProductName = userRole === "admin" ? console.log('isAdmin') || newProductName : console.log('noAdmin') || name;

// console.log(updateProductName);}
// // Ukraine
// {
//     let name = "test";
//     name = 'productName';
//     name = 'test2';
//     console.log(test);
//     //Kyiv
//     {
//         let info = "Hello world";
//         info = `${info} ${test}`
//     }
//         //City
//         {
//             let info = "Hello world";
//             info = `${info} ${test}`
//         }
// }

// {
//     const test2 = "Hello";
//     console.log(test2);
// }
// const CUSTOM_NAME = 'My robot';
// const MODE = 0;
// const ROOM = 'Вітальня';
// const COMAND = 'change name';

// if (COMAND === 'change name' && MODE !== 0) {
//     const name = CUSTOM_NAME || 'Robot 3121';
//     console.log(`Start ${name}`);
// }
// if (MODE === 0) {
//     console.log(`Robot is offline`);
// }
// if (COMAND === "work") {
//     const room = ROOM;
//     const mode = MODE;
//     console.log(`Mode: ${mode}; Прибираю кімнату: ${room}`);
// }

// const login = 'user';
// const password = '123qwe12331';
// const isAdmin = true;
// const isLoggedIn = null;
// if(isLoggedIn === true) {
//     if(isAdmin) {
//         console.log('Переходимо на сторінку /admin');
//     } else if (login === "demo") {
//         console.log('Переходимо на сторінку /demo');
//     } 
//     else {
//         console.log('Переходимо на сторінку /home');
//     }
// } else if (isLoggedIn === false){
//    if(login && password) {
//     console.log('Token:', 12432432432);
//     if(isAdmin) {
//         console.log('Переходимо на сторінку /admin');
//     } else {
//         console.log('Переходимо на сторінку /home');
//     }
// } 
// }else if (isLoggedIn === null) {
//     console.log("Помилка");
// }

// const price = 100;
// const useCashback = true;

// let cashbackLevel = 4;
// let totalPrice = null;
// let cashbackAmount = null;

// if(price < 100) {
//     console.log('Кешбек система доступна для товарів з ціною від 100 грн');
//     cashbackAmount = 0;
// } else {
//     if(cashbackLevel> 0) {
//         cashbackAmount = price * (cashbackLevel * 0.01);
//     }
    
//     cashbackLevel++;

//     if(cashbackLevel > 5) {
//         cashbackLevel = 1;
//     }
//     if(useCashback > 0 && useCashback) {
//         totalPrice = price - cashbackAmount;
//     }
// }

// console.log(totalPrice);

// const buttonType = 'primary';

// if(buttonType === 'primary') {
//     console.log("primary button");
// }else if(buttonType === 'secondary') {
//     console.log("secondary button");
// }else if(buttonType === 'basic') {
//     console.log("basic button");
// } else {
//     console.log("default button");
// }
// const buttonType = '123', buttonColor = 'red';

// switch('main') {
//     case 'main': 
//     case 'global':
//     case "primary":
//         console.log("primary");
//         break;
//     case 'second':
//     case 'double':
//     case "secondary":
//         console.log("secondary");
//         break;
    
//     default:
//         console.log("default button");
// }

// if ("0") {
//     console.log( 'Привіт' );
//     }
// let count = 6;
// let isFast = true;
// while(count < 5) {
//     console.log('Hello world!', count);
    
//     if(isFast && count >= 3) {
//         count = 5;
//     } else {
//         count++;
//     }
// }
// const PRODUCT_AMOUNT = 6;
// const DISCOUNT_ADDITIONAL = 2;

// let discountAmount = 0;
// let productCount = 0;

// while(productCount < PRODUCT_AMOUNT && DISCOUNT_ADDITIONAL <= 10 && discountAmount <= 10) {
//     productCount++;
 
//     if(productCount <= 0) {
//         break;
//     }
//     if(productCount <= 3) {
//         discountAmount += 1;
//     } else if  (productCount > 3 && productCount <=5) {
//         discountAmount += 1.5;
//     } else if  (productCount > 5 && productCount <=8) {
//         discountAmount += 2;
//     } else if  (productCount > 8 ) {
//         discountAmount += 2.5;
//     }
//     if(DISCOUNT_ADDITIONAL) {
//         discountAmount += DISCOUNT_ADDITIONAL;
//     }

//     console.log(productCount, discountAmount);
// }
// if(discountAmount > 10) {
//     discountAmount = 10;
// }

// console.log('Знижка', discountAmount, '%');

// console.log('Знижка для товарів', productCount);

// console.log('Товарів не мають знижки', PRODUCT_AMOUNT - productCount);

// let container = 5;
// let storage = 20;
// let car = 3;

//  do {
//     car++;
//     storage -= container;
//     console.log(car, storage);
// } while(car < 3)

// if(car > 3) {
//     console.log('Нам потрібна нова машина');
// }

// let start = 40;
// let goal = 100;

// let step = 0;
// let set = 8;
// let rest = 10;

// do {
//     if(step === 0) {
//         console.log('Початок тренування');
//     }
//     start++;
//     step++;    
//     if(step === goal || start === goal) {
//         console.log('Кінець тренування');
//         break;
//     }

//     if(step % rest === 0) {
//         console.log(`Зробіть перерву`);
//         continue;
//     }


//     if(step % set === 0) {
//         console.log(`Ви зробили ${step / set} сет(ів)`);
//     }
//     if(step === goal / 2) {
//         console.log(`Ви зробили половину тренувань`);
//     }

//     console.log('Поточний прогрес', step);
// } while(step < goal && start < goal);
// let q = 0
// main: for(let i = 0, j=5; i <= j; i++) {
//     console.log("Test", i, j);

//     if(i === 3) {
//         j++;
//     }

//     for( ; ;) {
//         console.log('Q', q);

//         if(q >= i) {
//             break main;
//         }
//         q++;
//     }
// }

// let age = 25;
// let hasExp = false;
// let hasEdu = true;

// let JS = true;
// let HTML = true;


// form: {
//     if(age >= 18) {
//         if(hasExp ) {
            
//             console.log('Ви підходите');
//             break form;

//             if(JS) {
//                 console.log('Ви підходите');
//             }
//             if(HTML) {
//                 console.log('Ви підходите');
//                 result = false;
//             }
//         }
//         if(hasEdu) {
//             console.log('Ви підходите');
//             break form;
//         }

//     }
//     if(age < 18) {
//         console.log("Ви не підходите. Маленький вік");
//         break form;
//     }
// }

// table: for(let i=1; i < 10; i++) {
//     if(i === 1) {
//         continue;
//     }
//     console.log(`Число ${i} ==============`);
//     for(let j=1; j <10; j++) {
//         if(j === 1) {
//             continue;
//         }
//         console.log(`${i} * ${j} = ${i*j }`);

        
//     }
// }

// FUNCTIONS
// function calcSpace(amount, unit = "px"){

//     return `${amount*4}${unit}`;
// }

// function playTrackById(trackId) {
//     /// отримати файл пісні і її запустити
// }
// function stopTrackById(trackId) {
//     /// отримати файл пісні і поставити її на паузу
//     console.log(`отримати файл пісні з ID ${trackId} і поставити її на паузу`);
// }
// function play(trackName, trackId) {
//     console.log(`Запускаємо ${trackName}`);

//     playTrackById(trackId);
// }

// function end(oldTrackName, newTrackName) {
//     console.log(`Завершили грати ${oldTrackName}`);
//     console.log(`Наступний трек ${newTrackName}`);
// }

// function pausePlay(currentTrackName) {
//     console.log(`Трек ${currentTrackName} на паузі`);

//     reloadDataTrack();

//     play();
// }

// function reloadDataTrack (amount) {
//     if(amount <= 0) {
//         console.log('Дані оновлені вказану кількість разів');
//     } else {
//         console.log('Повторне оновлення');
//         //певний код для оновлення даних
//         reloadDataTrack(amount -1);
//     }
// }
// reloadDataTrack(5);

// function pauseStopByTrack(trackName, trackId) {
//     let isPause = null;
//     return () => {
//        if(isPause == true) {
//         return;
//        }
//     stopTrackById(trackId);
//     console.log(`Трек ${trackName} на паузі`);
//     isPause = true;
// };
// }


// const pauseStop456 = pauseStopByTrack('IT - Console log', 10);

// pauseStop456();

// const runCommand = function(command, erorrFn) {
//     const result = command();
//     if(!result) {
//         return erorrFn()
//     }
// }

// runCommand(()=>{
//     console.log('Запуск команди');

//     return 1 - 1;
// }, ()=>{
//     console.log("Помилка");
// });

// const testFunc = () => {
//     console.log(test);
//     let test = 10;

//     return test;
// };

// console.log(testFunc());

// const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {

//     return(amount, unit = "px") =>{
//         if(oldAmount === amount &&  unit=== oldUnit) {
//             console.log("Memo");
//             return oldResult;
//         }

//         oldResult = `${amount*4}${unit}`;
//         oldAmount = amount;
//         oldUnit = unit;

//         return oldResult;
//     };
// };

// const calcSpace = memoCalcSpace();
// console.log(calcSpace(4));
// console.log(calcSpace(4));

// const getSpaceFromDesign = (componentName) => {
//     switch (componentName) {
//         case 'button':
//             return 4;
//         case 'card':
//             return 3;
//         default:
//             return 2;
//     }
// }

// const isMobile = true;

// const amount = getSpaceFromDesign('button');
// const amountMobile = isMobile ? amount / 2: amount;
// const amountInPx = calcSpace(amountMobile);

// const calcSpaceFromDesign = (componentName) => {
//     const result = getSpaceFromDesign(componentName);
//     return calcSpace(isMobile ? result / 2: result);
// }

// console.log('//////');

// console.log(calcSpaceFromDesign('button'));

// Built-in global functions lesson
// const code = `console.log("Hello")`;
// eval(code);
// function calcScreenRation(w, h) {
//     w = parseFloat(w);
//     h = parseFloat(h);
//     let result = w / h;
//     if(isNaN(result)) {
//         return 'Error';
//     } else if(!isFinite(result)) {
//         return 'Is Infinity';
//     } else {
//         return result;
//     }
// }
// console.log(calcScreenRation('1920.5px', '1000.5px'));

// const num = parseFloat("1.5555");
// console.log(num);
// const domain = 'it-brains.com.ua';
// function redirectToPath (path) {
//     path = encodeURI(path);
//     const link = encodeURI(`https://${domain}/${path}`);
//     // робимо переход на сторінку
//     console.log(link);
//     return link;
// }
// const URI = 'https://it-brains.com.ua/product/%25D0%259C%25D1%2596%25D0%25BA%25D1%2580%25D0%25BE%25D1%2584%25D0%25BE%25D0%25BD%2520%25D1%2580%25D0%25BE%25D0%25B6%25D0%25B5%25D0%25B2%25D0%25B8%25D0%25B9/info';
// function getURL(urlInURI) {
//     urlInURI = decodeURI(urlInURI);
//     console.log(urlInURI);
//     return urlInURI;

// }
// const path = 'product/Мікрофон рожевий/info';
// const link = `https://${domain}/${path}`;

// const link1 = redirectToPath(path); // URI
// const link2 = getURL(link1); // Decode URI
// console.log(link === link2);

//Вбудовані можливості для числових типів
// const a = 0.00051;
// const b = 0.00052;
// const c = 0.00103;

// const d = a + b;
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);
// console.log(d - c < Number.MIN_VALUE && c - d < Number.EPSILON);
// function reviewNumber(num) {
//     // console.log(num);
//     if(Number.isNaN(num)) {
//         return console.log('Is not a Number', num);
//     }
//     if(!num && num !== 0) {
//        return console.log('Bad number', num);
//     }
//     if(!Number.isInteger(num)) {
//         return console.log('Дробове число', num);
//     }
//     if(!Number.isSafeInteger(num)) {
//         return console.log('Небезпечне число', num);
//     }
//     return console.log(num);
// }
// reviewNumber(9007199254741004n);
// const a1 =94567;
// const a2 = a1.toExponential();
// const a3 = parseFloat(a2);
// const a4 = a3.toString();
// console.log(a4);

//Вбудовані можливості для рядкових типів
// const a = 'HeololoWorold';
// console.log(a.length);
// console.log(String.fromCodePoint(128515));
// const b = "Ļ";
// console.log(b.codePointAt(0));
// console.log(String.fromCodePoint(315));
// console.log(String.raw`www.test.com/home\ncatalog/category\new`);
// console.log(a.concat(" ", b, " ", "!"));
// console.log(a.lastIndexOf('ol'));
// console.log(a.endsWith('ol', 12));
// const c = "     HelloWold     ";
// console.log(c.padStart(18, ' '));
// console.log(c.slice(-5));
// console.log(c.toUpperCase());
// console.log(c.toLowerCase());
// console.log(c.trim(), "1");

//Просунутий тип даних: Масив
// const a = 1;
// const b = 2;
// const c = 3;

// const getOne = () => 1;

// let list = [function Name() {}, 100, 'Text', null, undefined, 1+2, 5<6, getOne(), a, b, c];
// // console.log(list);
// const testArr = [];
// testArr[0] = 'Start';
// testArr[1] = 2;
// testArr[2] = 20;
// testArr[testArr.length] = 30;
// testArr[testArr.length] = 40;
// delete testArr[0];
// console.log(testArr);
// const big = [[[1], [2, 3, 4, 5], [3]], [[2]], [[3]]];
// console.log(big[0][1][2]);
// const location = [[100, 200], [105, 205], [110, 190,], [120, 180,]];
// for(const pointIndex in location) {
//     console.log(location[pointIndex]);
//     for(const coordIndex in location[pointIndex]) {
//         console.log(location[pointIndex][coordIndex]);
//     }
// }
// for(let i=0; i < location.length; i++) {
//     console.log(location[i]);
//     for(let j=0; j < location[i].length; j++) {
//         console.log(location[i][j]);
//     }
// }
// let l1 = [2,3,4];
// let l2 = [1, 2, 3];
// const l3 = [100, ...(l1 || [])];
// const [loc1, ...rest] = location;
// const [[p1,p2], loc3, loc4 = "Test"] = rest;
// console.log(p1,p2);
// console.log(l1.toString(), l2.toString());
// console.log(l1, l3);
// delete l1[0];
// console.log(l1, l2);
// [l1, l2] = [l2, l1];
// console.log(l1,l2);
// function printFullName([name, surname, lastname, ...arg]) {
//     // console.log(arg);
//     // return arg.toString();
//     return `${name} ${surname} ${lastname} ${arg.length ? `(${arg.toString()})`: ""}`;
// }
// console.log(printFullName(['Ivan', 'Ivanenko', 'Ivanov', 'Admin', '18']));
// function sumAllNum(...nums) {
//     let sum = 0;
//     for (const n of nums) {
//         sum += n;
//     }
//     return [sum, nums.length];
// }
// const [sum, numLength] = sumAllNum(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16); 
// console.log(sum, numLength);

// Advanced data type: Object
// const key = "key";
// const a = {
//     amount: 100,
//     // [key]: 'HelloWorld',
//     [key]: {
//         [key]: 'Ivan',
//         age: 35,
//     },
//     // [key]: "test",
// };
// console.log(a.del);
// console.log(a[key]);
// console.log(a.amount );

// // const b = {};
// // console.log(b);
// delete a.amount;
// console.log(a);
// const role = {
//     value: 'admin',
//     status: 3,
// }
// const person = {
//     name: "Іван",
//     age: 25,
//     occupation: "Розробник програмного забезпечення",
//     info: role,
//     address: {
//         city: "Київ",
//         // street: "Вулиця Шевченка", 
//         houseNumber: 10,
//     },
//     getAddress: function() {
//         return this.address;
//     }
// };
// const person2 = {...person};
// console.log("name" in person);
// console.log(person.getAddress());
// const { age, address: {city, street, zipcode = 41023}, ...rest} = person;
// console.log(age, city, street, zipcode);
// console.log(rest);

// function getAddress({address}) {
//     if(address) {
//         const{
//             city,
//             street = "Не вказано",
//             houseNumber, 
//             zipcode = 1000,
//         } = address;
//         return `Ваша адреса: ${city} ${street} ${houseNumber} ${zipcode}`;
//     }
//     return `Нема даних`;
// }
// const c = [1,2,3]
// const test = getAddress({city: "Kyiv"});
// console.log(test);
// for(const key in person) {
//     const item = person[key];


//     if(typeof person[key] === "object"){
//         for(const key2 in item) {
//             console.log(item[key2]);
//         }
//     }
//     else {
//         console.log(item);
//     }
// }
// const a = [{test: 1}];
// const b = a;

// console.log(a === b);    
// Number.prototype.toOwnString = function() {
//     console.log(this);
//     return `Число: ${this}`;
// }
// const b = 1;
// const c = b.toOwnString();
// console.log(c);
// function Test() {
//     this.world = "World";
//     return "Hello" + this.world;
// }
// Test.hello = "Hello";
// console.log(Test.hello);

//Symbols
// const user = {
//     name: "Olga",
//     id: 351305123,
//     bookId: null,

//     getPhone(book) {
//         return book[this.bookId];
//     },
// };

// const phoneBook = {
//     me: "+38067433551",
//     name: "Phone Book",
// };

// // ....

// function addToPhoneBook(phone, user) {
//     const symId = Symbol.for(user.id);

//     phoneBook[symId] = phone;

//     user.bookId = symId;
// };

// addToPhoneBook("+38067433551", user);

// addToPhoneBook("+412342321242342143241", user);

// // console.log(user.getPhone(phoneBook));

// // console.log(phoneBook);

// // const a = Symbol.for('1');
// // const b = Symbol.for('1');

// // console.log(a, b);

// /// ====

// const symId = user.bookId;
// // console.log(Symbol.keyFor(symId));

// for(const value in [1,2,3,4,5]) {
//     console.log(value);
// };
// console.log(phoneBook);
// let range = {
//     from: 1,
//     to: 5,

//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//     },
//     next() {
//         return this.current <= this.to ?{done: false, value: this.current++} :{done: true};
//     },
// };  

// for(let num of range) {
//     console.log(num);
// };
// const arr = [1,2,3, 4, 5];
// const iterator = arr[Symbol.iterator]();
// result = iterator.next();
// do{
//     console.log(result.value);
//     result = iterator.next();
    
// } while(!result.done);

// Built-in capabilities for arrays Part 1
// const obj = {
//         0:'Hello', 
//         1:'World', 
//         2: '!!!', 
//         length: 3, 
//         prefix: "():",
//     }; 
// const arr = Array.from(
//    obj,
//     function (elem, index) {
//         return `${this.prefix}${elem}`;
//     },
//     obj
// );
// console.log(Array.isArray(arr));

// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = [-1, 4, 5, 4.6, 4.7, 5,6];
// const arr3 = arr1;

// console.log(Array.of(...arr1, ...arr2));

// console.log(arr1.at(10));
// console.log(-(arr1.length -arr.push(10,20,30,40)));

// console.log(arr1);

// console.log(arr1.pop());

// console.log(arr1);

// console.log(arr1.shift());

// console.log(arr1);

// console.log(arr1.unshift(0,1));

// console.log(arr1);

// console.log(arr2.includes(50));

// console.log(arr2.lastIndexOf(5));

// const arr3 = arr1.concat(...arr2);
// console.log(arr3);
// console.log(arr1);

// arr1.copyWithin(2, 6, 9);

// console.log(arr1);

// arr1.fill(123, 6, 9);

// console.log(arr1);

// arr1.reverse();

// console.log(arr1);
// const filterFn = (value, index, array) => value % 2 === 0;
// const filteredArr = arr1.filter(filterFn);
// console.log(filteredArr);
// const sortFn =(elem1, elem2) => {
//     // let result = elem1 - elem2;
//     // if(elem1%2 === 0) {
//     //     result +=10;
//     // }
//     // // return elem1<elem2 ? 1: -1;
//     // return result;
//     if(elem1 %2 === elem2%2) {
//         return 0;
//     }
//     else if(elem1 %2 !== 0 && elem2%2 === 0) {
//         return 1;
//     }
//     else {
//         return -1;
//     }
// };
// const sortedArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].sort(sortFn);
// console.log(sortedArr);
// console.log(['Arabic', 'Info', 'Zero', 'City', 'Aar'].sort());

// console.log(arr2.every((elem, index, array)=>elem<0));

// Built-in capabilities for arrays Part2
// const userList = [
//     {id: 1, name: 'Dima', age: 19},
//     {id: 54, name: 'Ivan', age: 35},
//     {id: 6412, name: 'Anton', age: 41},
// ];

// let minAge = 30;

// const userBigAge = userList.sort((user1, user2)=>{
//     return user2.age - user1.age;
// });

// const userBigAge = userList.find(({age})=> age>=minAge);
// const userBigAge = userList.findLastIndex(({age})=> age>=minAge);
// console.log(userBigAge);
// const iter = userList.values();
// console.log(iter);
// const result = iter.next();
// console.log(result);
// for(const elem of iter) {
//     console.log(elem);
// }

//Built-in capabilities for Arrays part 2
// const userList = [
//     {id: 6412, name: 'Anton', age: 41, balance: 300 },
//     {id: 1, name: 'Dima', age: 19, balance: 0}, 
//     {id: 54, name: 'Ivan', age: 35, balance: 10200},
// ];

// const result = userList.map((user, index, array) =>{
//     user.balanceLimit = 1000 - user.balance;
//     if(user.balanceLimit < 0) {
//         user.balanceLimit = 0;
//     }
//     return user;
// });
// console.log(result);

const flatArray = [[[100, 105], [200, 205]], [[220, 230], [430, 455]]];

// console.log(flatArray.flatMap((el) =>[...el, el[0]-el[1]]));
const result = flatArray.flatMap((el)=>{return el.map((it)=>{return it[0]-it[1]}); 
});
console.log(result);
result.forEach((elem, index, array) =>{console.log(elem);});
// const result = userList.reduceRight((num, user, userIndex, array) =>{
//     console.log(num, user.age);

//     if(num > 100) return num;
//     return user.age > num ? user.age: num;
// }, 1);
// console.log(result);
// const totalBalance = userList.reduce((num, user)=>num + user.balance, 0);
// console.log(totalBalance);

// let minAge = 30;

// const userBigAge = userList.sort((user1, user2) =>{
//     return user2.age - user1.age;
// });
// const userBigAge = userList.find(({age}) => age>=minAge);
// const userBigAge = userList.findLastIndex(({age}) => age>=minAge);
// console.log(userBigAge);
// const iter = userList.values();

// console.log(iter);
// const result = iter.next();
// console.log(result);

// for(const elem of iter) {
//     console.log(elem);
// }
const arr = ['Apple', 'Hotdog', 'Bread', 'Milk'];
// console.log(arr.join('... '));
// const arrSmall = arr.splice(1, 0, ...userList);
// const arrSmall = arr.slice(1,3);
// console.log(arrSmall);
// console.log(arr);