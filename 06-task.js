function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
function memoize(func) {
    let cache = {}
    return function (n) {
        if (n in cache) return cache[n] + ' (cached)'
        cache[n] = func(n)
        return cache[n] + ' (calculated)'
    }
}

