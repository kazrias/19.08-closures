//Write a recursive function to calculate the factorial of a given positive integer

function factorial(n) {
    if (n < 0)
        return 'number should be positive'
    return n === 0 || n === 1 ? 1 : n * factorial(n - 1)
}