//Implement a currying function using closures

function add(x, y, z) {
    return x + y + z
}

function curry(func) {
    return function curried(...args) {
        let argsLen = args.length;
        let funcLen = func.length
        if (args.length >= func.length) {
            return func(...args)
        }
        return function (...otherArgs) {
            return curried(...args, ...otherArgs)
        }
    }
}
