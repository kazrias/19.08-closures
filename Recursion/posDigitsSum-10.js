//Write a recursive function to calculate the sum of digits of a positive integer.

function posDigitsSum(digits) {
  return digits !== 0 ? digits % 10 + posDigitsSum(Math.trunc(digits / 10)) : 0
}
console.log(posDigitsSum(1005));