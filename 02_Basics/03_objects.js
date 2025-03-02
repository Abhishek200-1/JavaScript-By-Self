// singlton
// Object.create


// object litterals


const mysyb = Symbol("mykey1")

const JsUser = {
    name : "Abhishek",
    "full name" : "Vishwakarma Abhishek",
    [mysyb]: "hellokey1",
    age : 21,
    location : "Surat",
    email : "google.com",
    idLoggedIn : false,
    lastLoginDays : ["Mon", "Sat"]
}

console.log(JsUser.age)
console.log(JsUser["full name"])
console.log(typeof JsUser[mysyb])



JsUser.email = "Abhishek@chatgpt.com"
console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email = "Abhishek@microsoft.com"
console.log(JsUser)


JsUser.greetings = function(){
    console.log("hello JS user")
}
JsUser.greetingsTwo = function(){
    console.log(`hello JS user, ${this.name}`)
}

console.log(JsUser.greetings())
console.log(JsUser.greetingsTwo())

