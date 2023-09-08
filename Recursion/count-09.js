//Write a recursive function to count the occurrences of a value in an array.

function countOccurrences(arr, value) {
  if (!arr.length) return 0
  return +(arr[0] === value) + countOccurrences(arr.slice(1), value)
}
