// function declaration
function add (a, b){
    return a + b
}

// function expression
const addExpression = function (a, b){
    return a + b
}

// Arrow function
const addArrowFunction = (a, b) => {
    return a + b
}

// Implisit return ---------------------------------------------
function add (a, b){
    return a + b
}
function square (x){
    return x * x
}
function three (){
    return 3
}

const addArrowFunction1 = (a, b) => a + b
const squareArrowFunction = (x) => x * x
const threeArrowFunction = () => 3

const add1 = (a, b) => {
    const temp =  a + b
    return temp
}

// // Manajemen this Keyword ---------------------------------------
function Person() {
    this.age = 0

    setInterval(function(){
        this.age++
        console.log(this.age)
    }, 1000)
}
const p = new Person()

// 1. Simpan ke variabel lain
function Person1(){
    this.age = 0

    const that = this
    setInterval(function(){
        this.age++
        console.log(that.age)
    }.bind(this), 1000)
}
const q = new Person1()

// 2. Menambahkan method bind
function Person3(){
    this.age = 0;

    setInterval(function(){
        this.age++
        console.log(this.age)
    }.bind(this), 1000)
}
const w = new Person3()

// 3. Menggunakan Arrow Function
function Person4(){
    this.age = 0

    setInterval(()=>{
        this.age++
        console.log(this.age)
    }, 1000)
}
const e = new Person4()