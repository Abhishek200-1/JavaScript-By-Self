// singleton object
// const tinderUser = new Object() 

// non singleton obj
const tinderUser = {}

tinderUser.id = "123456"
tinderUser.name = "Abhishek"
tinderUser.age = 45
tinderUser.isLoggedIn = false

console.log(tinderUser)


const regularUser = {
    email: "some@gmail.com",
    fullname :{
        userFullName :{
            firstName:"Abhishek",
            lastName:"Vishwakarma"
        }
    }
}

console.log(regularUser.fullname.userFullName)



// onjects ko marge krnek k liye
const obj1 = {1:"a", 2:"b"}

const obj2 = {3:"a", 4:"b"}

const obj3 = {5:"a", 6:"b"}

const obj4 = Object.assign({}, obj1, obj2, obj3)

console.log(obj4)


const onj5 = {...obj1, ...obj2, ...obj3}
console.log(obj4)


// values comes from database
const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
]


users[1].email
console.log(tinderUser)

// databases method
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))