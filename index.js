// const personalAge = true;
// const dogAge = "-1";
// console.log("0" >= "1");
const userRole = 1;
const adminRole = 2;
const productStockPrice = 0;
const defaultProductPrice = null;
const adminPrice = false;
const productPrice = (adminPrice ?? productStockPrice ?? defaultProductPrice ?? 100);
console.log("productPrice", productPrice);
const defaultUserName = null;
const ivanName = "Ivan";

const ivanRole = userRole;
const ivanBalance = 300;

const result = (ivanRole === adminRole) && ivanBalance >= productPrice; 


const authorName = !(ivanRole === adminRole &&  "Admin") && 'User';
console.log("authorName", authorName);
console.log('ivanName', !!ivanName);

//==========================

let productTitle = null;
productTitle = productTitle || 'Назва товару';
console.log('productTitle', productTitle);