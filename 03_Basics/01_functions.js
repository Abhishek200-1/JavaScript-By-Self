function sayMyName() {
  console.log("A");
  console.log("B");
  console.log("H");
  console.log("I");
  console.log("S");
  console.log("H");
  console.log("E");
  console.log("K");
}

// sayMyName(); 


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
    
}

const result = addTwoNumbers(3,5)
// console.log("result: ", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Abhishek"))
console.log(loginUserMessage(""))



