function createCachingFunction() {
    let cache = {}
    return function (val) {
        if (val in cache)
            return cache[val] + ' (cached)'

        let result = val * 2;
        cache[val] = result
        return cache[val] + ' (calculated)'
    }
}
