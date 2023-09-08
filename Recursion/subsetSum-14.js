//Write a recursive function to find if there is a subset of a given array that adds up to a target sum.

function subsetSum(arr, targetSum, currentIndex = 0) {
  if (targetSum === 0) return true;
  if (currentIndex === arr.length) return false;

  if (arr[currentIndex] <= targetSum) {
    if (subsetSum(arr, targetSum - arr[currentIndex], currentIndex + 1)) {
      return true;
    }
  }
  return subsetSum(arr, targetSum, currentIndex + 1);
}