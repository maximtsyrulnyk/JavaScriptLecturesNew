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
const a = 'HeololoWorold';
// console.log(a.length);
// console.log(String.fromCodePoint(128515));
const b = "Ļ";
// console.log(b.codePointAt(0));
// console.log(String.fromCodePoint(315));
// console.log(String.raw`www.test.com/home\ncatalog/category\new`);
// console.log(a.concat(" ", b, " ", "!"));
// console.log(a.lastIndexOf('ol'));
// console.log(a.endsWith('ol', 12));
const c = "     HelloWold     ";
// console.log(c.padStart(18, ' '));
// console.log(c.slice(-5));
// console.log(c.toUpperCase());
// console.log(c.toLowerCase());
console.log(c.trim(), "1");
