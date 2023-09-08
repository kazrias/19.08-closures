//Write a recursive function to generate all combinations of a given array.

function combinations(arr, s, result = [], current = [], start = 0) {
  if (current.length === s) {
    result.push([...current]);
  }
  for (let i = start; i < arr.length; i++) {
    current.push(arr[i]);
    combinations(arr, s, result, current, i + 1);
    current.pop();
  }
  return result;
}