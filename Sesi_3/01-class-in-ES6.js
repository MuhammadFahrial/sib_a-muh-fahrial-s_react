// Class in ES6 ---------------------------------------------------------------------
// Mendefinisikan Class
class Employee {
    doWork() {
        return 'complete!'
    }
}

let scott = new Employee()
console.log(scott.doWork()) // complete!

// Contructor
class EmployeeC{
    constructor (name){
        this._name = name
    }
    doWorkC() {
        return 'complete!'
    }
    getName() {
        return this._name
    }
}

let scottC = new EmployeeC('Scott Moss Contructor')
console.log(scottC.getName()) // Scott Moss Contructor

// Class Inherintance
class Person {
    constructor(name){
        this._name = name
    }
    getName(){
        return this._name
    }
}

class EmployeeI extends Person{
    // employe 'is-a' person
}

let scottI = new EmployeeI('Scott Moss Inherintance')
console.log(scottI.getName()) // Scott Moss Inherintance

class Person1 {
    constructor(name){
        this._name = name
    }
    getName (){
        return this._name
    }
}

class EmployeeI1 extends Person1 {
    doWork(){
        return this._name + 'is Working'
    }
}

let scottI1 = new EmployeeI1('Scott Moss Inherintance 1 ')
console.log(scottI1.getName()) // Scott Moss Inherintance 1
console.log(scottI1.doWork()) // Scott Moss Inherintance 1 is Working

const rial = new Person1('rial')
console.log(rial.doWork()) // undefined

// Method super
class EmployeeS extends Person1 {
    constructor (name, title){
        super(name)
        this._title = title
    }
}
