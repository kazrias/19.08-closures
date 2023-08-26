function createCalculator(str) {
    if (str === 'add')
        return (...args) => args.reduce((curr, next) => curr + next, 0)
    if (str ==='multiply')
        return (...args) => args.reduce((curr, next) => curr * next, 1)
}

const add = createCalculator("add");
console.log(add(3, 5)); // Output: 8 

const multiply = createCalculator("multiply");
console.log(multiply(2, 4)); // Output: 8