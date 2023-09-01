function curry(func) {
    return function curried(...args) {
        let argsLen = args.length;
        let funcLen = func.length;
        if (argsLen >= funcLen) {
            return func(...args)
        }
        return function (...otherArgs) {
            return curried(...args, ...otherArgs)
        }
    }
}
function add(x, y, z) {
    return x + y + z
}
let curried = curry(add);
console.log(curried(1)(2)(3));