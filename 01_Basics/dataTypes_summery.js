/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly 
declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.
data types are two types based on kis tarah se data ko memry me rakha jata hai or access kiya jata hai
1) premitive 7 types
    * String
    * Number
    * Boolean
    * Null
    * Undefined
    * symbol
    * BigInt
2) non-premitive (Refrence type) memory m as a ref
    * Array
    * Objects
    * Functions

Return type of variables in JavaScript
1) Primitive Datatypes
    * Number => number
    * String  => string
    * Boolean  => boolean
    * null  => object
    * undefined  =>  undefined
    * Symbol  =>  symbol
    * BigInt  =>  bigint

2) Non-primitive Datatypes
    * Arrays  =>  object
    * Function  =>  function
    * Object  =>  object
*/

const heroes = ["Abhishek", "Vishal", "Doga"]
let myObj = {
    name : "Abhishek",
    age : 22,
    state : "Surat"
}

const myFunction = function(){
    console.log("hello Abhishek")
}
myFunction();





// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Memory Type ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
There are two types of memery in javascript
1) Stack
    ( it is used for primitive data types 
        jo variable declare kiya hai uska ek copy mita hai
    )

    **Stack memory**
    ****************
    *              *
    ****************
    *              *
    ****************
    *              *
    ****************
    *              *
    ****************
    *              *
    ****************
    
2) Heap 
    ( it is used in non-primitive 
        original value ka refrence milta hai 
    )
    **Heap Memory**
    ************************************************
    *                                              *
    *                                              *
    *                                              *
    *                                              *
    *                                              *
    *                                              *
    *                                              *
    *                                              *
    *                                              *
    *                                              *
    ************************************************
*/

let myYouTubeName = "DevBucket.youtube.com"