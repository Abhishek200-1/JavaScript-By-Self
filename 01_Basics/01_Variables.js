/* 
    1) what is variables ?
    Ans = Variables are Containers for Storing Data

    JavaScript Variables can be declared in 4 ways:
    1 - Automatically
    2 - Using var   => The variable is available throughout the function where it is declared. the same variable can be declared multiple times in the same scope.
        example : var a = 10;
                  var a = 20; // No error
                  console.log(a); // Output: 20

    3 - Using let   =>  The variable is only available within the block {} where it is declared. Cannot be redeclared in the same scope: Avoids accidental overwriting.
        example :  let b = 10;
                // let b = 20; 
                // Error: Identifier 'b' has already been declared
                
    4 - Using const  => The variables which is declared with const keyword these are constant values and cannot be changed.
        example :  const c = 10;
                // c = 20; 
                // Error: Assignment to constant variable

    Note. => Prefer not to use var because of issue in block scope and functional scop
    
    
    
    
*/



const accountId = 1555669
let accountEmail = "abhishek@gmail.com"
var accountPassword = "123456"
accountCity = "Surat"

// accountId = 2 not allowed
accountEmail = "raghav@gmail.com"
accountPassword = "2121256"
accountCity = "Surat_02"

// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);
