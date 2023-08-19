function createCachingFunction() {
    let cache = {}
    return function (val) {
        if (!cache[val]) {
            let result = val * 2;
            cache[val] = result
            return cache[val] + ' (calculated)'
        }
        return cache[val] + ' (cached)'
    }
}
