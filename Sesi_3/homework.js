const arrayOfWords = ['cucumber', 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]


const makeAllCaps = (arrayOfWords) => {
    return new Promise((resolve) => {
        resolve (arrayOfWords.map((upper) => {
            return upper.toUpperCase()
        }))
    })
}

const sortWords = () => {
    return new Promise((resolve) => {
        resolve ((arrayOfWords.sort()))
    })
}

makeAllCaps(arrayOfWords)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch(error => console.log(error))


//  Error
// jika tidak me return new Promise di makeAllCaps --> makeAllCaps(...).then is not a function
// jika tidak menggunakan parameter dalam promise dan me-return arrayOfWord --> tidak menampilkan apa"

