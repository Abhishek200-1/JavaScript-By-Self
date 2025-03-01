let score = "33"

console.log(typeof score);
console.log(typeof (score));


let valueNumber = Number(score);
console.log(typeof valueNumber)


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// 1 => true
// 0 => false
// "" => false
// "Abhishek" => true



//*********************************************************************Operations ******************************************************************/

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2)

// console.log(2-2)

// console.log(2*2)

// console.log(2**2)

// console.log(2/2)

// console.log(2%2)

let str1 = "hello"
let str2 = " Abhishek"
let str3 = str1 + str2
console.log(str3)


console.log("1" + 1)
console.log(1 + 1)
console.log(1 + "1")
console.log(1 + 1 + "1")
console.log("1" + 1 + 3)


// prefix
// incremenst and returen value before increament
let x = 3;
const y = x++;
console.log(y)

let x2 = 3n;
const y2 = x2++;
console.log(y2)


// postfix
// incremennt and return value after increment
let a = 3;
const b = ++a;
console.log(b)

let c2 = 3n;
const d2 = ++c2;
console.log(d2)

// link to study

