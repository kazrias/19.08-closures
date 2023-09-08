//Write a recursive function to calculate the Greatest Common Divisor (GCD) of two positive integers.

function greatestCommonDivisor(num1, num2) {
  if (num2 === 0) return num1
  return greatestCommonDivisor(num2, num1 % num2)
}
