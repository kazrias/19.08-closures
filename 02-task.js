'use strict'
let privateVariable = (_val = 0) => {
    //let _privateVar=val
    let obj = {};
    obj.get = () => _val
    obj.set = newVal => _val = newVal
    return obj
}

//
let obj = privateVariable(42)
console.log(obj.get());

obj.set(14)
console.log(obj.get());

obj.set(140)
console.log(obj.get());

let secondObj = privateVariable()
console.log(secondObj.get());

secondObj.set(333)
console.log(secondObj.get());