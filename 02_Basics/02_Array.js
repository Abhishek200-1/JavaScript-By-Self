const marvel_heros = ["thor", "ironman", "captainAmerica", "Hulk"]
const dc_heros = ["batman", "superman", "flash", "wonderWomen"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);


// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros)

// const all_new_heroes = [...marvel_heros, ...dc_heros]
// console.log(all_new_heroes) 



const another_Array = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, 11, [12, 13, 15]]]
const real_another_Array = another_Array.flat(Infinity)
console.log(real_another_Array)



console.log(Array.isArray("Abhishek"))
console.log(Array.from("Abhishek"))


let scrore1 = 100
let scrore2 = 200
let scrore3 = 300

console.log(Array.of(scrore1,scrore2,scrore3))


