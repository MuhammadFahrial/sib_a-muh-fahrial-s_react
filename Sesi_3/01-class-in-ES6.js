// Class in ES6 ---------------------------------------------------------------------
// Mendefinisikan Class
class Employee {
    doWork() {
        return 'complete!'
    }
}

let scott = new Employee()
console.log(scott.doWork()) // complete!

// ---------------------------------------------------------------------------------

// Contructor
class EmployeeC{
    constructor (name){
        this._name = name
    }
    doWorkC() {
        return this._name
    }
    getName() {
        return this._name
    }
}

let scottC = new EmployeeC('this getName')
let scottC2 = new EmployeeC('this do Work')
console.log(scottC.getName()) // this getName
console.log(scottC.doWorkC()) // this do Work

// ---------------------------------------------------------------------------------

// Class Inherintance
class PersonI {
    constructor(name, title){
        this._name = name
        this._title = title
    }
    getName(){
        return this._name + ' is ' + this._title
    }
}

class EmployeeI extends PersonI{
    // employe 'is-a' person
}

let scottI = new EmployeeI('Scott Moss', 'Inherintance')
console.log(scottI.getName()) // Scott Moss Inherintance

// ---------------------------------------------------------------------------------

class PersonI1 {
    constructor(name){
        this._name = name
    }
    getName (){
        return this._name
    }
}

class EmployeeI1 extends PersonI1 {
    doWork(){
        return this._name + 'is Working'
    }
}

let scottI1 = new EmployeeI1('Scott Moss Inherintance 1 ')
console.log(scottI1.getName()) // Scott Moss Inherintance 1
console.log(scottI1.doWork()) // Scott Moss Inherintance 1 is Working

const rial = new PersonI1('rial')
console.log(rial.doWork()) // undefined

// ---------------------------------------------------------------------------------

// Method super
class EmployeeS extends PersonI1 {
    constructor (name, title){
        super(name)
        this._title = title
    }
}
