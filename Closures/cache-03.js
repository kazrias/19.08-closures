//Write a function that caches the duplication of result of a calculation using closure

function createCachingFunction() {
    let cache = {}
    return function (val) {
        if (val in cache)
            return cache[val] + ' (cached)'

        cache[val] = val * 2;
        return cache[val] + ' (calculated)'
    }
}

