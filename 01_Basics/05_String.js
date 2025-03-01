const name = "Abhishek"
const repoCount = 50

// console.log(name + repoCount + " Value") old way

// console.log(`hello my name is ${name} and my repocont is ${repoCount}`); mordern way

const gameName = new String("Abhishek-Vish");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt('5'))
console.log(gameName.indexOf('h'))

console.log(gameName)

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice((-4,3))
console.log(anotherString)

const newStringOne = "          Abhishek          "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://Abhishek.com/abhishek%20"

url.replace('%20', '-')
console.log(url.replace('%20', '-'))

url.includes('Abhishek')
console.log(url.includes)

console.log(gameName.split('-'))