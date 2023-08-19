function createCounter() {
    let count = 0;
    return () => ++count;
}
const counter = createCounter()