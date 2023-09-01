//Implement a function that returns an object with methods to get and set a private variable

let privateVariable = (val = 0) => {
    let _privateVar = val
    return {
        get() { return _privateVar },
        set(newVal) { _privateVar = newVal }
    }
}