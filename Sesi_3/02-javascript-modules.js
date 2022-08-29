// Javascript Modules ----------------------------------------------------------------
class EmployeeM {
    doWork() {
        return 'complete!'
    }
}
export default EmployeeM

// import EmployeeM from './EmployeeM.js'
// const mark = new EmployeeM('Mark cubus')
// mark.doWork()

export class PersonM {
    constructor(name) {
        this._name = name 
    }
    getName() {
        return this._name
    }
}

export class Employee extends PersonM {
    doWork(){
        return 'complete!'
    }
}

// import { PersonM, EmployeeM}  from './class.js'
// const mark = new EmployeeM('Mark Cubus')
// mark.doWork()