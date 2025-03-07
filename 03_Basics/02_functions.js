// shopping cart

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(2,56,598,25))


const user = {
    username:"Abhishek",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${user.username} and price is ${user.price}`)
}

// handleObject(user);

handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]));