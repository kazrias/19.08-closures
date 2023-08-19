'use strict'
let privateVariable = (val = 0) => {
    let _privateVar = val
    return {
        get() { return _privateVar },
        set() { newVal => _privateVar = newVal }
    }
}
