//Write a recursive function to perform a binary search on a sorted array.

function binarySearch(arr, searchNum, leftIndex = -1, rightIndex = arr.length) {
  if (!arr.length) return false
  const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (rightIndex - leftIndex > 1) {
    if (arr[middleIndex] === searchNum)
      return middleIndex
    if (searchNum < arr[middleIndex]) {
      rightIndex = middleIndex;
      return binarySearch(arr, searchNum, leftIndex, rightIndex)
    }
    leftIndex = middleIndex
    return binarySearch(arr, searchNum, leftIndex, rightIndex)
  }
  return false
}