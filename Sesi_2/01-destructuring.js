// Destruction Object -----------------------
const user = {}
user.name = 'Muhammad Fahrial'
user.handle = '@fahrial'
user.location = 'Makassar, Indonesia'
// Extraction
const name = user.name
const handle = user.handle
const location = user.location;
console.log(name, handle, location)

const user1 = {
    name2: 'Muhammad Fahrial',
    handle2: '@fahrial',
    location2: 'Makassar, Indonesia'
}
const {  name2, handle2, location2 } = user1
console.log( name2, handle2, location2 )


// Destructuring Function Result -----------------------
const getUser = () => {
    return {
        name3: 'Rial',
        handle3: '@Rial',
        location3: 'Makassar, Indonesia'
    }
}
// Extraction
const {name3, handle3, location3} = getUser()
console.log( name, handle, location )


// Destructuring Array ----------------------------------
const csv = '1997, Ford, F350, Must Sell!'
const [ year, make, model, description ] = csv.split(",")
console.log(year, make, model, description)


// Aliasing Object Properties ----------------------------
const user2 = {
    n: 'Rial',
    h: '@rial',
    l: 'Makassar, Indonesia'
}
// Extraction
const { n:name4, h:handle4, l:location4 } = user2
console.log(name4, handle4, location4)
