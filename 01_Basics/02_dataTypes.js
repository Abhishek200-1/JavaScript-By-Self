"use strict"; //treat all js code as newer version

// alert("hello") we are using node js not browser

let name = "Abhishek"
let age = 21
let isLoggedIn = false
let state = null


/* 

    1) number => 2 to power 53
       let length = 16;
       let weight = 7.5;
    2) bigint used in trading stock market if number is long 
    3) string => ""
       let color = "Yellow";
       let lastName = "Johnson";
    4) boolean => true/false
       let x = true;
       let y = false;
    5) null => standalone value => object
    6) undefined => value is not assigned output => undefined
    7) symbol => unique
    8) Object 
       const person = {firstName:"John", lastName:"Doe"};

    Note : 1) A JavaScript variable can hold any type of data.
           2) When adding a number and a string, JavaScript will treat the number as a string.
           Example :
                   let x = 16 + "Volvo";
           Output : 16Volvo
           3) JavaScript evaluates expressions from left to right. Different sequences can produce different results:
           Example : 
                   let x = 16 + 4 + "Volvo";
           Output : 20Volvo
                   let x = "Volvo" + 16 + 4;
           Output : Volvo164

*/

console.log(typeof undefined)
