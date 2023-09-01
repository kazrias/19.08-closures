//Write a recursive function to generate the nth number in the Fibonacci sequence

function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 2) + fibonacci(n - 1)
}