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

// const flatArray = [[[100, 105], [200, 205]], [[220, 230], [430, 455]]];

// console.log(flatArray.flatMap((el) =>[...el, el[0]-el[1]]));
// const result = flatArray.flatMap((el)=>{return el.map((it)=>{return it[0]-it[1]}); 
// });
// console.log(result);
// result.forEach((elem, index, array) =>{console.log(elem);});
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
// const arr = ['Apple', 'Hotdog', 'Bread', 'Milk'];
// console.log(arr.join('... '));
// const arrSmall = arr.splice(1, 0, ...userList);
// const arrSmall = arr.slice(1,3);
// console.log(arrSmall);
// console.log(arr);

// Built-in capabilities for Objects
// const article = {
//     info: {    title: 'My article',
//     description: 'This is info about article',
// },
//     id: 105423,
//     categoryId: 1423,
//     likeAmount: 442,
// };
// const ARTICLE_FIELD = {
//     title: 'ID статті',
//     description: 'Заголовок статті',
// };
// articlePhoto = {
//     photoUrl: '...url',
//     photoId: 100,
//     photoType: 'big',
// };

// articleCommentList = {
//     list: [{id: 4323, user: "Ivan", message: "Крутий контент"}],
// };

// Object.assign(article, articlePhoto, articleCommentList);

// console.log(article);

// console.log(Object.entries(article.info));

// const formList = Object.entries(article.info);

// const formListLayout = formList.map(([key, value])=>{
//     return `<p> <strong> ${ARTICLE_FIELD[key]}</strong> <br> <span> ${value}</span></p>`;
// });

// console.log(formListLayout);

// const objArr = [['id', 100432], ['title', 'My product name'], ['price', 1203]];

// console.log(Object.fromEntries(objArr));
// console.log(article.propertyIsEnumerable("propertyIsEnumerable"));

// Object.seal(article);

// delete article.id;
// console.log(article.id);

// console.log(Object.isSealed(article));

// console.log(Object.values(article.info));

// Advanced data type: Set Lesson
// const userIdList = new Set([40132, 45451, 65431, 506541]);

// console.log(userIdList);

// for(const value of userIdList) {
//     console.log(value);
// }
// userIdList.forEach((value, value2, set) =>console.log(value));

// console.log(userIdList.size);

// // =====

// userIdList.add(40132);

// console.log(userIdList);
// console.log(userIdList.size);

// // =====

// userIdList.add(40133);

// console.log(userIdList);
// console.log(userIdList.size);

// // =====

// const result = userIdList.delete(40133);

// console.log(userIdList);
// console.log(userIdList.size);
// // console.log(result);

// // ====
// console.log(userIdList.has(40133));
// console.log(userIdList.has(40132));

// // ===

// userIdList.clear();
// console.log(userIdList);

// const valueList = userIdList.values();

// const arr = Array.from(valueList);

// console.log(arr);

// const arr = [1,2,3,4,5,1,2,3,4,5];

// const set = new Set(arr);

// const arr2 = [...set];

// console.log(arr2);

// const categoryList = new Set();

// function addCategory(category) {
//     if(categoryList.has(category)) {
//         console.log('Ця категорія вже є');

//         return false;
//     } 
//     categoryList.add(category);
//     return true;
// }
// console.log(addCategory('спорт'));
// console.log(addCategory('спорт'));
// console.log(addCategory('їжа'));

// const students = [
//     {id: 1, name: "John", course: "Math"},
//     {id: 2, name: "Jane", course: "Science"},
//     {id: 3, name: "Adam", course: "Math"},
//     {id: 1, name: "Eve", course: "English"},
//     {id: 1, name: "Kate", course: "Science"},
// ];
// const course = students.map((student) =>student.course);
// console.log(course);
// const courseList = new Set(course);
// console.log(Array.from(courseList));

// Advanced data type: Dictionary lesson
// const button = new Map([
//     ['color', 'red'], 
//     ['size', '32px'],
// ]);

// console.log(button);

// const obj= {
//     color: "red",
//     size: 32 + "px",
// };

// const set = new Set(["red", "32px"]);

// const button2 = new Map(Object.entries(Object.fromEntries(set.entries())));
// console.log(button2);

// const button3 = new Map(set.entries());
// console.log(button3);

// const set2 = new Set(button.keys());
// console.log(set2);

// const button = new Map([
//     ['color', 'red', '32'], 
//     ['size', '32px'],
// ]);

// for(const [key, value] of button) {
//     console.log(key, value);
// }

// button.forEach((value, key, map) =>console.log(value, key, map));

// button.set('weight', 600);

// console.log(button.get('weight'));

// console.log(button.delete('weight'));
// console.log(button.delete('weight'));

// console.log(button);

// console.log(button.has('weight'));
// console.log(button.has('color'));

// button.clear();

// console.log(button);

// const LANG_LIST = {
//     UA: 'uk-UA',
//     EU: 'eu-US',
// }

// const activeLang = LANG_LIST.UA;

// const product = {
//     price: 100,
//     amount: 3,

//     info: new Map([[LANG_LIST.UA, {title: "Заголовок", info: "Інформація", }], [LANG_LIST.EU, {title: "Title", info: "Info", }],]),
// };

// const info = product.info.get(activeLang);

// console.log(info);
// console.log(product.info.has(activeLang));

// const user1 = {
//     id: 1323,
//     name: "Ivan",
// };

// const user2 = {
//     id: 4231,
//     name: "Anton",
// };

// const product1 = {
//     id: 5314,
//     title: "Mobile Phone",
// };

// const product2 = {
//     id: 5335,
//     title: "Apple",
// };

// const userProduct = new Map();
// userProduct.set(user1, product1).set(user2, product2);
// console.log(userProduct.get(user1));
// const productClientList = new Map([[product1, new Set()]]);
// productClientList.set(product1, productClientList.get(product1).add(user1));
// console.log(productClientList);
// productClientList.set(product1, productClientList.get(product1).add(user1));
// // console.log(product1, productClientList.get(product1).add(user2));
// console.log(productClientList);
// const has = productClientList.get(product1).has(user1);
// console.log(has);

// Built-in capabilities: JSON and URL lesson
// const roleField = 'roleName'; 

// const data = {
//     id: 1043,
//     login: 'user3431',
//     password: '123451we@',
//     roleField: "Admin",
//     go() {
//         console.log("go");
//     },
//     test1: {
//         test2: 123,
//     },
// };

// const jsonData = JSON.stringify(data, (key, value) => {
//     if(key === roleField) {
//         return null;
//     }
//     if(typeof value === 'string') {
//         return value.toUpperCase();
//     }
//     if(typeof value === 'number') {
//         return value * 10;
//     }

//     return value;
// }, 8);

// console.log(jsonData);

// const parseData = JSON.parse(jsonData, (key, value) => {
//     if(key === roleField) {
//         return "Admin";
//     }
//     if(typeof value === "string") {
//         return value.toLowerCase();
//     }
//     if(typeof value === "number") {
//         return value / 10;
//     }
//     return value;
// });
// console.log(parseData);
// const mainUrl = new URL('https://www.google.com/search?q=hello&sca_esv=18f74c4f65c74ef0&sxsrf=ACQVn0_dpCiBDisufK_KUzEV7bqMIJcjWg%3A1709031787672&ei=a8HdZd3NKN6rxc8PnLya0Ao&udm=&ved=0ahUKEwidr_TEr8uEAxXeVfEDHRyeBqoQ4dUDCBA&uact=5&oq=helloWorld&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWhlbGxvMgoQLhiABBiKBRhDMgoQLhiABBiKBRhDMgoQABiABBiKBRhDMgoQLhiABBiKBRhDMggQLhiABBjLATIIEAAYgAQYywEyChAAGIAEGIoFGEMyDhAuGIAEGMsBGMcBGK8BMgoQLhiABBiKBRhDMggQLhiABBjLATIZEC4YgAQYigUYQxiXBRjcBBjeBBjgBNgBAUjlFVAAWOoQcAB4AJABAJgB8ASgAbsLqgEJMC4zLjQtMS4xuAEDyAEA-AEBmAIFoAKpDMICChAjGIAEGIoFGCfCAgUQABiABMICBRAuGIAEwgILEC4YgAQYxwEY0QOYAwC6BgYIARABGBSSBwkwLjMuNC0xLjE&sclient=gws-wiz-serp')
// const url = mainUrl.searchParams;

// console.log(url);

// console.log(url.has('q'));
// console.log(url.append("name", "google"));
// console.log(url);
// console.log(url.getAll("q"));
// url.sort();
// console.log(url);
// console.log(mainUrl);

// const url = new URL("https://www.google.com/search");
// url.searchParams.append('q', 'cat photo');
// console.log(url.href);

//Built-in features: Date
// const date = new Date();
// const dateString = date.toISOString();
// console.log('year',date.getFullYear());
// date.setFullYear(2020);
// console.log('year',date.getFullYear());

// console.log('month',date.getMonth());
// date.setMonth(1);
// console.log('month',date.getMonth());

// console.log('date',date.getDate());
// date.setDate(27);
// console.log('date',date.getDate());

// console.log('day',date.getDay());

// console.log('minutes',date.getMinutes());
// console.log(date.setMinutes(27));
// console.log('minutes',date.getMinutes());

// console.log('seconds',date.getSeconds());
// date.setSeconds(27);
// console.log('seconds',date.getSeconds());

// console.log('milliseconds',date.getMilliseconds());
// date.setMilliseconds(500);
// console.log('milliseconds',date.getMilliseconds());

// console.log(date.toDateString());
// const date2 = Date.parse(dateString) + 1000 * 60 * 5;
// console.log(date2);
// console.log(date.toUTCString());
// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// const zone = date.getTimezoneOffset() / -60;
// console.log(zone);

// const user = -3;

// function getUserTimeZone(timezone) {
//     // let date = Date.now();
//     let date = new Date (Date.UTC(2024, 5, 26, 12, 30, 0, 0));
    

//     // console.log(date.getHours());
//     // console.log(date.getUTCHours());

//     date.setHours(date.getUTCHours() + timezone)

//     // const myTimezone = (date.getTimezoneOffset() / -60);

//     // date.setTime(date.getTime() - (1000 * 60 * 60) * myTimezone);

//     // date.setTime(date.getTime() + (1000 * 60 * 60) * timezone);

//     return date;
// }

// const userDate = getUserTimeZone(user);

// console.log(userDate.getHours());
// console.log(userDate.getUTCHours());

// console.log(userDate.toTimeString());

// console.log(new Date(getUserTimeZone(user)).toString());
// console.log(new Date().toUTCString());
// console.log(new Date(1719405000000).toUTCString());

// Math
// console.log(Math.PI);
// const a = 5;
// const b = 10;
// const c = -5;
// const d = "0ffff";

// const arr = [20, 30, 40];

// console.log(Math.min(a, b, c, ...arr));
// console.log(Math.sign(d));
// console.log(Math.pow(a, 3));
// console.log(Math.sqrt(16));

// console.log(Math.floor(1.156), Math.floor(1.556),Math.floor(1.956));

// console.log(Math.ceil(1.156), Math.ceil(1.556),Math.ceil(1.956));

// console.log(Math.round(1.156), Math.round(1.5),Math.round(1.956));

// console.log(Math.trunc(1.156), Math.trunc(1.5),Math.trunc(1.956));

// const random = Math.trunc(Math.random() * 10) + 1;

// console.log(random);

// console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3));

// console.log(0.1 + 0.2);
// console.log(Math.fround(0.1+0.2));

// Built-in features: Console
// // {
// //     let a = 5;
// //     a = 10;
// //     console.exception('Error, a змінна повинна бути 5');
// // }

// const counterLabel = 'Timer';

// console.time(counterLabel);
// console.count(counterLabel);

// // console.groupCollapsed('Group 1');

// // console.log('Test 1');
// // console.warn('Test 2');
// // console.groupCollapsed('Group 2');
// console.timeLog(counterLabel);
// console.count(counterLabel);
// // console.debug('Test 3');
// // console.groupEnd();
// // console.groupEnd();
// console.timeEnd(counterLabel);
// console.countReset(counterLabel);
// console.count(counterLabel);

// const test1 = () => console.trace('Hello');

// const test2 = () => test1();

// const test3 = () => test2();

// test3();

// const data = [
//     {name: "John", age: 25, city: "New York"},
//     {name: "Alice", age: 30, city: "London"},
// ];

// console.table(data, ['name']);

// const a = 5;
// const b = 10;

// const result = a > b;
// console.assert(result, "Info");
// console.clear();

// console.log('%cHello World', 'font-size: 50px; color: yellow');

// Built-in regular expressions
// const regexp = /(?<group1>.e)(?<group2>st)/gims;

// const regexp1 = RegExp("test", "g");

// console.log(regexp.ignoreCase);
// console.log(regexp.test('This is test and est'));
// console.log(regexp.exec('This is test and est'));
// regexp.lastIndex = 9;
// console.log(regexp.exec('This is test and est'));
// console.log(regexp.exec('This is test and est'));
// const test = 'This is test and est';
// const result = test.matchAll(regexp);
// console.log(result.next());
// console.log(result.next());

// Error handling
// function getUserData()
// {
//     try {const a = 10;
// a = 5;
// //...робить запит до бази даних
// // console.log("1");
// } catch(err) {
//     //err - помилка про те, що дані з сервера не можуть бути отриманні
//     const newError = new Error(`Помилка. Неможливо отримати дані користувача ${userId}`, {
//         cause: err,
//     });
//     console.log(new Error);
// }}


// function updateUserData(userId) {
//     try {
//         const data = getUserData(userId);

//         data.name = 'Ivan'; 
//     } catch(err) {
//         const newError = new Error(`Помилка. Неможливо оновити дані користувача ${userId}`, {
//             cause: err,
//         });
//         console.log(newError.toString());
//     }
// }
// updateUserData(3123);

// const ERROR_ID_LIST = {
//     NOT_NUMBER: 1,
// };

// function sumNum(a, b) {
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         // const error = new TypeError("Аргументи не є числами");
//         // error.name = ERROR_ID_LIST.NOT_NUMBER;
//         // throw error;
//         return false;
//     }

//     return a + b;
// }

// try {
//     sumNum(10, "abc");
// } catch(err) {
//     if(err.name === ERROR_ID_LIST.NOT_NUMBER) {
//         sumNum(10, 0);
//     }
//     console.log(err.name);
// }

// Object-oriented-programming in JavaScript
// let Animal = {
//     name: 'Тварина',
//     voice: 'Звук',
//     say() {
//         console.log(`${this.name} каже ${this.voice}`);
//     },
// };

// Animal = null;

// const dog = Object.create(Animal);
// dog.name = 'Бобік';
// dog.voice = 'Гав';

// dog.say();
// Object.defineProperty(dog, '_space', {
//     value: 0,
//     writable: true,
// });
// Object.defineProperty(dog, 'space', {
//     set(value){
//         this._space = value*4;
//     }, 
//     get() 
//     {
//         return `${this._space} px`;
//     },

// });
// console.log(dog.space);

// dog.space = 4;

// console.log(dog.hasOwnProperty("voice"));

// console.log(dog.voice);

// Object.defineProperty(dog, "location", {
//     value: "Ukraine",
// });
// console.log(dog.location);

// dog.location = "USA";

// console.log(dog.location);
// Animal.go = function() {console.log(`${this.name} біжить ${this.voice}`);}
// dog.go();
// console.log(Object.getPrototypeOf(dog) === Animal);
// console.log(Animal.isPrototypeOf(dog));

// Object.setPrototypeOf(dog, {asd: "123"});
// console.log(Object.getPrototypeOf(dog));

// dog.__proto__ = null;

// const Tag = {
//     render(value) {
//         return `<${this.className}>${value} <>`;
//     },
//     className: null,
// };

// const Button = Object.create(Tag);

// Button.render = function(value = "") {
//     return `<button class="${this.className}" style="${this.style}">${value} <button>`;
// };

// const mainButton = Object.create(Button, {
//     style: {
//         value: 'background: red;',
//         writable: true,
//     },
//     className: {
//         value: 'my-button',
//     }
// });

// console.log(mainButton.render("Click"));
// console.log(mainButton.className);

// const Input = Object.create(Tag);

// Input.render = function() {
//     return `<input placeholder="${this.placeholder}" style="${this.style}"/>`;
// };

// const loginInput = Object.create(Input, {
//     style: {
//         value: 'border: 1px solid red;',
//         writable: true,
//     },
//     placeholder: {
//         value: "Login....",
//     },
// });

// console.log(loginInput.render());
// console.log(loginInput.className);

// const serverRequest = {
//     data: null,
//     getData() {
//         ///......
//     },
//     render() {
//         this.data = this.getData();

//         return `...`
//     }
// }

// const Page = {
//     components: [],
//     path: '/.../...',
//     render() {
//         //.....
//     }
// }

// Constructor function
// const User = {
//     login: null,
//     password: null,
//     role: null,
//     age: null,
// };

// function User(data) {
//     if(new.target) {
//         const {login = null, password = null, isAdmin = null, age = 0} = data;
//         const role = isAdmin ? 'Admin' : 'User';

//         const object = Object.assign(this, {
//             login, 
//             password, 
//             role,
//             age,
//         });

//         if(role === 'Admin') {
//             object.verify = function(password) {
//                 console.debug(password, this);
//                 return this.password === password;
//             };
//         }
//         if(age >= 50) {
//             object.login = String(object.login).toUpperCase();
//         }
//         object.toString = function() {
//             return `Користувач ${this.login}`
//         }
//         return object;
//     } else {
//         return new User(data);
//     }
// }

// function UserAdmin({login = null, password = null, isAdmin = null, age=0}) {
//     this.login = login;
//     this.password = password;
//     this.role = isAdmin ? 'Admin' : 'User';
//     this.age = age;
    
//     this.verify = function(password) {
//         return this.password === password;
//     };
// }

// =====

// const registerData = {
//     login: 'ivan',
//     password: '123qwe342',
//     isAdmin: true,
//     age: 50,
// };
// User.prototype.test = 'Hello world';
// const user = User(registerData);
// console.log(user.toString());

// // ========== 
// const adminData = {
//     login: 'ivan',
//     password: '123qwe342',
//     isAdmin: true,
// };

// const admin = new User(adminData);
// console.log(admin.password);

// ====


// const testData = {
//     login: 'ivan',
//     password: '123qwe342',
//     age: 50,
// };
// const testUser = new User(testData);
// console.log(testUser.login);

// // =====

// console.log(Object.getPrototypeOf(testUser) === User.prototype);
// const test = User;
// console.log(test.name);

// // ===

// console.log("========");

// console.log(user.verify("123qwe342"));

// const verifyUser = user.verify.bind(user, "123qwe342");

// console.log(verifyUser());

// function Animal(name) {
//     this.name = name;
// }

// const Person = function(name, age) {
//     Animal.call(this, [name]);
//     this.age = age;
// }

// const user2 = new Person('Ivan', 32);
// console.log(user2.name);

// Classes
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     test = () => {
//         console.log("Hello world", this.name);
//     }
// }
// class User extends Person{
//     constructor(login, password) {
//         super(login);
//         this.login = login;
//         this.password = password;
//     }
//     login = null;
//     password = null;
//     #role = null;
//     age = null;

//     id = null;
//     #id = 1000

//     isAdmin = () => {
//         console.log(this.#id);
//         this.createAdminUser();
//         return this.role !== "Admin";
//     };
//     #createAdminUser = (login) => {
//         const password = this.generateRandomPassword();
//         return new User();
//     };

//     static generateRandomPassword = () => {
//         return true;
//     };
//     get admin() {
//         return this.#role === "Admin";
//     }
//     set admin(value) {
//         this.#role = "Admin";
//     }
// };

// function Animal() {
//     this.test = 'Hello world';
// }

// function User({login, password, role, age}) {
//     Animal.apply(this);

//     this.login = login;
//     this.password = password;
//     this.role = role;
//     this.age = age;

//     Object.defineProperty(this, {
//         name: {
//             get() {},
//             set() {},
//         },
//     });
// }

// console.log(new User({}).test);
// const user = new User('Ivan', "dshakdahlslkjdas12321");
// console.log(user.isAdmin());

// function verifyAdmin(fn) {
//     const result = fn();

//     if(!result) {
//         throw new Error("Не адмін");
//     }
//     return true;
// }
// verifyAdmin(user.isAdmin);
// console.log(user.admin);
// user.admin = true;
// console.log(user.admin);
// console.log(user instanceof User);
// console.log(user.test());

// Programming patterns 1 part
// class RecentPurchases {
//     static #instance = null;
//     static #purchases = [];

//     static create() {
//         if(!this.#instance) {
//             this.#instance = new RecentPurchases();
//         }

//         return this.#instance;
//     }

//     static add(item) {
//         this.#purchases.push(item);
//     }
//     static get() {
//         return this.#purchases;
//     }
// }
// RecentPurchases.create();
// RecentPurchases.add('Телефон');
// RecentPurchases.add('Навушники');
// console.log(RecentPurchases.get());
// ===
// const lastPurchaseList2 = RecentPurchases.create();
// console.log(lastPurchaseList === lastPurchaseList2);
// lastPurchaseList2.add('Телефон');
// lastPurchaseList2.add('Навушники');

// console.log(lastPurchaseList.get());

// class Button {
//     constructor({text, color}) {
//         this.text = text;
//         this.color = color;
//     }
//     render() {
//         return `<button class="color:${this.color};"> ${this.text}</button>`;
//     }
// }
// class IconButton {
//     constructor({icon, color}) {
//         this.icon = icon;
//         this.color = color;
//     }
//     render() {
//         return `<button class="color:${this.color};"><img src="${this.icon}"/></button>`;
//     }
// }

// class ButtonFactory {
//     static TYPE = {
//         BASIC: "basic", 
//         ICON: "icon",
//     };

//     static createButton(type, options) {
//         if(options.icon) {
//             return new IconButton(options);
//         }
//         if(options.text) {
//             return new Button(options);
//         }
//         throw new Error(`Такого типу кнопки не існує: ${type}`);
        // switch(type) {
        //     case this.TYPE.BASIC:
        //         return new Button(options);
        //     case this.TYPE.ICON:
        //         return new IconButton(options);
        //     default:
        //         throw new Error(`Такого типу кнопки не існує: ${type}`);
        // }
//     }
// }
// const myIconButton = ButtonFactory.createButton(ButtonFactory.TYPE.ICON, {
//     color: 'red', 
//     icon: '/icon/my-icon.svg',
// });

// console.log(myIconButton);

// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     sendEmail(message) {
//         console.log(`Відправки на email ${this.email} повідомлення ${message}`);
//     }
// }

// class Video {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Channel {
//     constructor(name) {
//         this.name = name;
//         this.subscribers = [];
//     }
//     subscribe(user) {
//         // Підписка на канал
//         this.subscribers.push(user);
//     }
//     unsubscribe(user) {
//         // Відписка від каналу
//         this.subscribers = this.subscribers.filter((sub) => sub !== user);
//     }

//     createVideo(name) {
//         // Створення нового відео
//         const video = new Video(name);
//         this.sendNotify(video);
//     }
//     sendNotify(video) {
//         // Відправка повідомлення підписникам про нове відео
//         this.subscribers.forEach((subscriber) => {
//             subscriber.sendEmail(
//                 `Нове відео "${video.name}" на Youtube каналі ${this.name}!`
//             );
//         });
//     }
// }

// const channel = new Channel("IT Brains");

// const user1 = new User("john@example.com");
// const user2 = new User("jane@example.com");
// const user3 = new User("alice@example.com");

// channel.subscribe(user1);
// channel.subscribe(user2);
// channel.subscribe(user3);

// channel.createVideo("Урок про HTML");

// channel.unsubscribe(user1);

// console.log("===========");

// channel.createVideo("Урок про CSS");


// class Coffee {
//     name = "Кава";

//     cost = 10;

//     cook() {
//         console.log(`Приготування ${this.name}`);
//         // Логіка приготування кавового напою
//     }
// }

// class MilkDecorator {
//     constructor(coffee, amount) {
//         this.coffee = coffee;
//         this.amount = amount;
//     }
//     get name() {
//         return `${this.coffee.name}, з ${this.amount} мл молока`;
//     }

//     get cost() {
//         const milkPrice = 0.05;
//         return this.coffee.cost + milkPrice + this.amount;
//     }

//     cook() {
//         console.log(`Приготування ${this.name}`);
//         // Логіка приготування кави з молоком
//     }
// }

// Створення об'єкту базової кави
// let coffee = new Coffee();
// console.log(coffee.name);
// console.log(coffee.cost);
// coffee.cook();

// Додавання декоратора молока до кави
// let latteCoffee = new MilkDecorator(coffee, 300);
// console.log(latteCoffee.name);
// console.log(latteCoffee.cost);
// latteCoffee.cook();

// class TextEditor {
//     #text = "";

//     set text(text) {
//         this.#text = text;
//         this.#save();
//     }

//     get text() {
//         return this.#text;
//     }

//     #save() {
//         Snapshot.create(this.text);
//     }

//     restore() {
//         this.#text = Snapshot.restore().text;
//     }
// }

// class Snapshot {
//     constructor(text) {
//         this.text = text;
//     }

//     static #snapshots = [];

//     static create(text) {
//         console.log(text);
//         this.#snapshots.push(new Snapshot(text));
//     }

//     static restore() {
//         this.#snapshots.pop();
//         return this.#snapshots[this.#snapshots.length - 1];
//     }
// }

// const editor = new TextEditor();

// editor.text = "Це початковий текст.";
// editor.text = "Редагований текст.";  
// editor.text = "Оновлений текст.";  

// console.log("===");

// console.log(editor.text);

// console.log("===");

// editor.restore();

// console.log(editor.text);

// editor.restore();

// console.log(editor.text);

// class AuthHandler {
//     setNextHandler(handler) {
//         this.nextHandler = handler;
//         return handler;
//     }

//     login(user, password) {
//         if(this.nextHandler) {
//             return this.nextHandler.login(user, password);
//         } else {
//             return false;
//         }
//     }
// }

// class TwoFactorAuthHandler extends AuthHandler {
//     login(user, password) {
//         if (
//             user === "john" &&
//             password === "password" &&
//             this.isValidTwoFactorCode()
//         ){
//             console.log("Вхід дозволено з двофакторною автентифікацією");
//             return true;
//         } else {
//             return super.login(user, password);
//         }
//     }

//     isValidTwoFactorCode() {
//         return true;
//     }
// }

// class RoleHandler extends AuthHandler {
//     login(user, password) {
//         if(user === "guest") {
//             console.log("Вхід дозволено з роллю гостя");
//             return true;
//         } else {
//             return super.login(user, password);
//         }
//     }
// }

// class CredentialsHandler extends AuthHandler {
//     login(user, password) {
//         if(user === "admin" && password === "admin123") {
//             console.log("Вхід дозволено за логіном та паролем");
//             return true;
//         } else {
//             return super.login(user, password);
//         }
//     }
// }

// class HandlerBuilder {
//     constructor() {
//         this.firstHandler = null;
//         this.lastHandler = null;
//     }

//     add(handler) {
//         if(!this.firstHandler) {
//             this.firstHandler = handler;
//             this.lastHandler = handler;
//         } else {
//             this.lastHandler.setNextHandler(handler);
//             this.lastHandler = handler;
//         }
//         return this;
//     }

//     create() {
//         return this.firstHandler;
//     }
// }

// const handler = new TwoFactorAuthHandler();

// const handler2 = new CredentialsHandler();

// handler2.setNextHandler(new RoleHandler());

// handler.setNextHandler(handler2);

// handler.login("guest", "admin123");

// const handlerBuilder = new HandlerBuilder();

// const handler = handlerBuilder
//     .add(new CredentialsHandler())
//     .add(new TwoFactorAuthHandler())
//     .add(new RoleHandler())
//     .create();

// handler.login("admin", "admin123"); // Вхід дозволено за логіном та паролем
// handler.login("john", "password"); // Вхід дозволено з двофакторною автентифікацією
// handler.login("guest", "guest123"); // Вхід дозволено з роллю гостя
// handler.login("user", "password"); // Вхід заборонено


// class User1 {
//     constructor(name, messanger) {
//         this.name = name;
//         this.messanger = messanger;
//     }

//     sendMessage(message) {
//         const formattedMessage = this.formatMessage(message);
//         this.messanger.sendMessage(formattedMessage);
//     }

//     formatMessage(message) {
//         return `[${this.name}]: ${message}`;
//     }
// }

// через СМС
// через емайл
// через телеграм бот

// class SMSMessanger {
//     static sendMessage(message) {
//         console.log(`Відправлено SMS: ${message}`);
//     }
// }

// class EmailMessanger {
//     static sendMessage(message) {
//         console.log(`Відправлено Email: ${message}`);
//     }
// }

// const john = new User1("John", SMSMessanger);
// const jane = new User1("Jane", EmailMessanger);

// john.sendMessage("Привіт!"); // Відправлено SMS: [John]: Привіт!
// jane.sendMessage("Привіт!"); // Відправлено Email: [Jane]: Привіт!

// Programming patterns 2 part

// class Composite {
//     comments = [];
//     addComment(comment) {
//         this.comments.push(comment);
//     }

//     removeComment(comment) {
//         const index = this.comments.indexOf(comment);
//         if(index !== -1) {
//             this.comments.splice(index, 1);
//         }
//     }
// }

// class Comment {
//     constructor(text) {
//         this.text = text;
//         this.replies = []; // Array to hold replies to this comment
//     }

//     addReply(reply) {
//         this.replies.push(reply);
//     }

//     display() {
//         console.log(`- Коментар: ${this.text}`);
//         for (const reply of this.replies) {
//             reply.display();
//         }
//     }
// }

// class Video {
//     comments = [];

//     constructor(title) {
//         this.title = title;
//     }

//     addComment(comment) {
//         this.comments.push(comment);
//     }

//     display() {
//         console.log(`Відео: ${this.title}`);

//         for (const comment of this.comments) {
//             comment.display();
//         }
//     }
// }

// const video = new Video("Навчальне відео");
// const comment1 = new Comment("Дуже корисне відео");
// const comment2 = new Comment("Дякую за чудовий матеріал!");
// const reply = new Comment("Відповідь: Згоден!");

// video.addComment(comment1);
// video.addComment(comment2);
// comment1.addReply(reply);

// video.display();

// class Category {
//     static #categories = {};

//     constructor(name) {
//         this.name = name;
//     }

//     static create(name) {
//         if(!this.#categories[name]) {
//             this.#categories[name] = new Category(name);
//         }
//         return this.#categories[name];
//     }
// }

// class Product {
//     constructor(name, category) {
//         this.name = name;
//         this.category = category;
//     }
//     display() {
//         console.log(`Product: ${this.name}, Category: ${this.category.name}`);
//     }
// }

// const electronics = Category.create("Electronics");
// const books = Category.create("Books");
// const electronics2 = Category.create("Electronics");

// console.log(electronics, books, electronics2);
// console.log(electronics === electronics2);

// const product1 = new Product("Laptop", electronics);
// const product2 = new Product("Headphones", electronics);
// const product3 = new Product("Book Title", books);
// const product4 = new Product("Smartphone", new Category("Electronics"));

// product1.display();
// product2.display();
// product3.display();
// product4.display();

// console.log(product1.category === product4.category);

// const list = [product1, product2, product3, product4].filter(
//     (product) =>product.category === Category.create("Electronics"));

// console.log(list);

// class CoffeeMachine {
//     prepareCoffee() {
//         this.boilWater();
//         this.grindCoffeeBeans();
//         this.#brewCoffee();
//         this.pourIntoCup();
//         this.addIngredients();
//         this.serveCoffee();
//     }

//     boilWater() {
//         console.log("Boiling water");
//     }
//     grindCoffeeBeans() {
//         console.log("Grinding coffee beans...");
//     }
//     #brewCoffee() {
//         console.log("Brewing coffee...");
//     }
//     pourIntoCup() {
//         console.log("Pouring coffee into cup....");
//     }
//     addIngredients() {
//         // Цей метод залишається пустим і може бути перевизначений у підкласах
//     }
//     serveCoffee() {
//         console.log("Coffee served!");
//     }
// }

// class LatteMachine extends CoffeeMachine {
//     addIngredients() {
//         console.log("Adding milk to make a latte...");
//         // ...........
//     }

//     // ..........
// }

// class CapuccinoMachine extends CoffeeMachine {
//     addIngredients() {
//         console.log(
//             "Adding frothed milk and sprinkle of cocoa powder to make a capuccino..."
//         );
//     }
// }

// const latteMachine = new LatteMachine();
// latteMachine.prepareCoffee();

// const capuccinoMachine = new CapuccinoMachine();
// capuccinoMachine.prepareCoffee();

// class TextFile {
//     constructor(name, content) {
//         this.name = name;
//         this.content = content;
//     }
// }

// class ImageFile{
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// }

// class VideoFile {
//     constructor(name, duration) {
//         this.name = name;
//         this.duration = duration;
//     }
// }

// class TextEditor {
//     files = [];

//     addFile(file) {
//         this.files.push(file);
//     }

//     readTextFile(file) {
//         console.log(`Text file: ${file.name}, Size: ${file.content.length} characters`);
//     }

//     readImageFile(file) {
//         console.log(`Image file: ${file.name}, Size: ${file.size} KB`);
//     }
//     readVideoFile(file) {
//         console.log(`Video file: ${file.name}, Duration: ${file.duration} minutes`);
//     }

//     readFiles() {
//         for(const file of this.files) {
//             if (file instanceof TextFile) {
//                 this.readTextFile(file);
//             } else if (file instanceof ImageFile) {
//                 this.readImageFile(file);
//             } else if (file instanceof VideoFile) {
//                 this.readVideoFile(file);
//             }
//         }
//     }
// }

// const textEditor = new TextEditor();

// const textFile = new TextFile("document.txt", "Lorem ipsum dolor sit amet.");
// const imageFile = new ImageFile("image.jpg", 1024);
// const videoFile = new VideoFile("video.mp4", 60);

// textEditor.addFile(textFile);
// textEditor.addFile(imageFile);
// textEditor.addFile(videoFile);

// console.log(textEditor.files);

// Система електронних платежів з власним API
// class ElectronicPaymentSystem {
//     makePayment(amount) {
//         const convertedAmount = this.convertAmount(amount);
//         console.log(`Making electronic payment: $${convertedAmount}`);
//     }
//     convertAmount(amount) {
//         // Логіка конвертації суми платежу
//         return amount * 1.2; // Припустимо, що необхідна конвертація у відсотках
//     }
// }

// class OtherPaymentSystem {
//     submit(amount) {
//         console.log(`Submitting payment request: ${amount}`);
//     }
// }

// const electronicPaymentSystem = new ElectronicPaymentSystem();
// electronicPaymentSystem.makePayment(100);

// class PaymentAdapter {
//     constructor(paymentSystem) {
//         this.paymentSystem = paymentSystem;
//     }
//     makePayment(amount) {
//         const convertedAmount = this.convertAmount(amount);
//         this.paymentSystem.submit(convertedAmount);
//     }
//     convertAmount(amount) {
//         return amount * 1.2;
//     }
// }

// class Order {
//     constructor(amount) {
//         this.amount = amount;

//         if(amount < 100) {
//             this.paymentSystem = new PaymentAdapter(new OtherPaymentSystem());
//         } else {
//             this.paymentSystem = new ElectronicPaymentSystem();
//         }
//     }

//     makePayment() {
//         return this.paymentSystem.makePayment(this.amount);
//     }
// }

// const order1 = new Order(1000);
// order1.makePayment();

// const order2 = new Order(10);
// order2.makePayment();

// class ShoppingCart {
//     constructor(discountStrategy) {
//         this.discountStrategy = discountStrategy;
//         this.items = [];
//     }
//     addItem(item) {
//         this.items.push(item);
//     }

//     calculateTotalPrice() {
//         const price = this.items.reduce((acc, item) => acc + item.price, 0);
        
//         return this.discountStrategy.calculateDiscount(price);
//     }
// }

// class DiscountStrategy {
//     calculateDiscount(price) {
//         return price; // 10% знижка
//     }
// }

// Стратегія знижки для звичайних клієнтів
// class RegularDiscountStrategy extends DiscountStrategy {
//     calculateDiscount(price) {
//         return price * 1.1; // 10% знижка
//     }
// }

// Стратегія знижки для преміум клієнтів
// class PremiumDiscountStrategy extends DiscountStrategy {
//     calculateDiscount(price) {
//         return price * 1.2; // 20% знижка
//     }
// }

// Стратегія знижки для нових клієнтів
// class NewCustomerDiscountStrategy extends DiscountStrategy{
//     calculateDiscount(price) {
//         return price * 1.05; // 5% знижка
//     }
// }

// const shoppingCart1 = new ShoppingCart(new NewCustomerDiscountStrategy());

// shoppingCart1.addItem({name: "Product 1", price: 100});
// shoppingCart1.addItem({name: "Product 2", price: 50});

// console.log(shoppingCart1.calculateTotalPrice());

// class User {
//     constructor(name, chat) {
//         this.name = name;
//         this.chat = chat;
//     }
//     sendMessage(message) {
//         console.log(`${this.name} відправив повідомлення ${message}`);
//         return this.chat.sendMessage(this, message);
//     }

//     receiveMessage(user, message) {
//         console.log(`${this.name} отримав повідомлення від ${user.name}: ${message}`);
//     }
// }

// class Chat {
//     constructor() {
//         this.users = [];
//     }

//     // Додавання користувача до чату
//     addUser(user) {
//         this.users.push(user);
//     }

//     // Відправник повідомлення в чат
//     sendMessage(sender, message) {
//         for (const user of this.users) {
//             if(user !== sender) {
//                 user.receiveMessage(sender, message);
//             }
//         }
//     }
// }

// class UserGroup {
//    users = [];

//     addUser(user) {
//         this.users.push(user);
//     }
// }

// class UserIterator {
//     #users = null;
//     #currentIndex = 0;
//     constructor(userGroup) {
//         this.#users = userGroup.users;
//     }

//     #hasNext() {
//         return this.#currentIndex < this.#users.length;
//     }

    // Метод, який повертає наступний елемент
//     next() {
//         if(this.#hasNext()) {
//             const name = this.#users[this.#currentIndex].name;
//             this.#currentIndex++;
//             return name;
//         }
//         return null;
//     }
//     list() {
//         return this.#users.map((user) => user.name).join(", ")
//     }
// }

// const group = new UserGroup();

// group.addUser(new User("John Doe", "john@example.com", "password1"));

// group.addUser(new User("Jane Smith", "jane@example.com", "password2"));

// console.log(group.users.map((user) => user.name).join(", "));

// const iterator = new UserIterator(group);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(iterator.list());

// const chatMediator = new Chat();

// const user1 = new User("John", chatMediator);
// const user2 = new User("Jane", chatMediator);
// const user3 = new User("Mike", chatMediator);

// chatMediator.addUser(user1);
// chatMediator.addUser(user2);
// chatMediator.addUser(user3);

// user2.sendMessage("Привіт, всім!");

// Cycle of events
// function consoleLog() {
//     const test = "hello world";

//     console.log('4');
//     console.log('5');
//     console.log('6');

//     return consoleLog();
// }

// // console.log(test);

// console.log('1');
// console.log('2');
// console.log('3');

// consoleLog();

// for(let i = 0;i < 10000; i++) {
//     console.log(i);
// }
// const immediateId = setImmediate(() => {
//     console.log('Перший');
// }, 0);
// const intervalId = setInterval(() => {
//     console.log("п'ятий");
// }, 1000);

// const timeoutId = setTimeout(() => {
//     console.log('Другий');
//     clearInterval(intervalId);  
// }, 5000);

// console.log('Третій');
// console.log('Четвертий');

// clearImmediate(immediateId);
// clearTimeout(timeoutId);

// console.log('1');
// setTimeout(function() { console.log('2'); }, 0);
// console.log('3');

// Management of asynchronous operations
// function loadFile(filename) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("2222");
//             resolve(`Вміст файлу ${filename}`);
//         }, 2000);
//     });
// }

// function convertFile(content) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             // Конвертація файлу....
//             resolve(`Конвертований вміст: ${content.toUpperCase()}`);
//         }, 1000);
//     });
// }

// function saveFile(convertedContent) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('saveFile');
//             reject("Error test");
//         }, 1500);
//     });
// }

// function sendFileToClient() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('sendFileToClient');
//             reject("Error test 2");
//         }, 5000);
//     });
// }

// function getInfoFromFile(file) {
//     // console.log(file, 1111);

//     return Promise.resolve(file + 100);
// }

// const test = Promise.race([
//     loadFile("example.txt"), 
//     // getInfoFromFile("example.txt"), 
//     saveFile(), 
//     sendFileToClient(), 
//     convertFile('file'),
// ]).then((data) => {
//     console.log('Data', data);
// }).catch((error) => {
//     console.log('Error!', error);
// });

// console.log(test);
// loadFile("example.txt")
//     .then((content) => {
//         console.log("Файл завантажено успішно");
//         console.log("Вміст файлу: ", content);
//         return convertFile(content);
//     })
//     .then((data) => {
//         return getInfoFromFile(data);
//     })
//     .then((convertedContent) => {
//         console.log("Файл успішно сконвертовано");
//         console.log("Конвертований вміст: ", convertedContent);
//         return saveFile(convertedContent);
//     })
//     .then(() => {
//         console.log("Файл успішно збережено");
//         return sendFileToClient();
//     })

//     .catch((error) => {
//         console.error("Сталася помилка:", error);
//     })
//     .finally(() => {
//         console.log("Файл успішно відправлено клієнту");
//     });

// loadFile = (filename) => 
//     new Promise((resolve, reject)=>{
//         console.log(`Завантаження файлу ${filename}...`);
//          // Simulating an error condition
//          if (filename !== "image.png" && filename !== "photo.jpg") {
//             reject("Invalid file");
//         } else {
//             setTimeout(() => resolve(`Вміст файлу ${filename}`), 2000);
//         }
// });

// loadFile("image.png").then((data) => {
//     return data.toUpperCase();
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log("Error", error);
// }).finally(() => {
//     console.log("End");
// });

// const result = loadFile("photo.jpg");

// result.then((data) => {
//     console.log(data, 1);
//     return null;
// });

// result.then((data) => {
//     console.log(data, 2);
//     return null;
// });

// result.then((data) => {
//     console.log(data, 3);
//     return null;
// });

// Робота з Promise та HTTP запити

// function MyFunction() {
//     loadFile("example.txt")
//     .then((content) => {
        

//         // .........

//         // .........

//         //

//         return convertFile(content);
//     })
//     .then((data) => {
//         return getInfoFromFile(data);
//     })
// }

// function loadFile() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Дані файлу"), 2000);
//     });
// }

// function sendFileToData(fileData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(true), 1500);
//     });
// }

// const loadAndSendFile = () =>  loadFile()
//     .then((data) => sendFileToData(data))
//     .finally(() => console.log('Файл відправлено')); 

// loadAndSendFile = async() => {
//         const data = await loadFile();
//         await sendFileToData(data);
//         console.log("end send file");
// };

// loadAndSendFile().then(() => {console.log("End");});

// console.log(new Date().getTime());
// const request = new Request('url', {method: 'DELETE'});

// fetch(request);

// const data = {
//     id: 1,
//     name: 'User',
//     age: 50,
// };


// async function getData() {
// const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     method: 'GET',
//     // body: JSON.stringify(data),

//     headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer your_token",
//     },
// });

// console.log(res.bodyUsed);

// const data = await res.json();

// console.log(res.bodyUsed);

// console.log(data);

// console.log(res.ok);

// }
// getData();

// Functions-Generators
// async function performFile(path) {
//     const content = await loadFile(path);

//     //

//    return [
//     async () => {
//             const data = await convertFile(content);

//             return [
//                 async () => {
//                     const convertedContent = await getInfoFromFile(data);

//                     await saveFile(convertedContent);

//                     await sendFileToClient();
//                 },
//                 data,
//             ];
//         },
//         content,
//    ];
// }

// async function main() {
//     const [next, content] = await performFile("file.png");

//     console.log(next, content);

//     ////..........
//     //........

//     await next();
// }

// performFile("file.png").then(([next, content]) => console.log((next, content)));
main();

function myGenerator() {
    console.log("Start");

    yield 1;

    yield 2;

    yield 3;

    console.log("End");
}

const generator = myGenerator();

const result1 = generator.next();

console.log(generator);