// High-Order Function ----------------------------
setInterval(() => {
    console.log('Tick')
}, 1000)

const printTick = () => {
    setInterval(printTick, 1000)
    console.log('Tick')
}

// Filter -----------------------------------------
const animalsFilter = [
    {name: "Fluffy", species: "cat"},
    {name: "Carlo", species: "dog"},
    {name: "Nemo", species: "fish"},
    {name: "Hamilton", species: "dog"},
    {name: "Dory", species: "fish"},
    {name: "Ursa", species: "cat"}
]

// Menggunakan for loop
let fish = []
for(let i = 0; i < animalsFilter.length; i++){
    if (animalsFilter[i].species === 'fish'){
        fish.push(animalsFilter[i])
    }
}
console.log(fish)

// Menggunakan filter
let fishFilter = animalsFilter.filter((animal) => animal.species === 'fish')
console.log(fishFilter)


// Map -----------------------------------------
const animalsMap = [
    {name: "Fluffy", species: "cat"},
    {name: "Carlo", species: "dog"},
    {name: "Nemo", species: "fish"},
    {name: "Hamilton", species: "dog"},
    {name: "Dory", species: "fish"},
    {name: "Ursa", species: "cat"}
]

// Menggunakan for loop
let names = []
for(let i = 0; i < animalsMap.length; i++){
    names.push(animalsMap[i].name)
}
console.log(names)

// Menggunakan Map
let namesMap = animalsMap.map((animalsMap) => animalsMap.name + " is a " + animalsMap.species)
console.log(namesMap)


// Reduce -----------------------------------------
let orders = [
    {total: 325},
    {total: 512},
    {total: 128},
    {total: 32}
]

// Menggunakan for loop
let total = 0
for (let i = 0; i < orders.length; i++){
    total = total + orders[i].total
}
console.log(total)

// Menggunakan Reduce
let total2 = orders.reduce((total3, order) => total3 + order.total, 0)
console.log(total2)
