// Write a recursive function to calculate the sum of an array of numbers
function sum(arr) {
  return !arr.length ? 0 : arr[0] + sum(arr.slice(1))
}
