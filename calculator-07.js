//Create a function factory that generates functions for different operations

function createCalculator(str) {
    switch (str) {
        case 'add':
            return (...args) => args.reduce((curr, next) => curr + next, 0);
        case 'multiply':
            return (...args) => args.reduce((curr, next) => curr * next, 1);
        default:
            return () => 'No such operation yet'
    }
}
