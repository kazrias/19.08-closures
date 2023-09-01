/*
Write a function that received callback and set of arguments and calculate the result via callback
using closure
*/

function add(a = 0, b = 0, c = 0, d = 0, e = 0, f = 0) {
    return a + b + c + d + e + f;
}

function partial(callback, ...partialArgs) {
    return function (...nestedArgs) {
        return callback(...partialArgs, ...nestedArgs)
    }
}
let addThreeNums = partial(add, 10, 15, 20);
