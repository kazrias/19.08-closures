//Write a recursive function to check if a given string is a palindrome

function isPalindrome(word) {
  if (word.length < 2)
    return true
  if (word[0] === word.slice(-1))
    return isPalindrome(word(1, -1))
  return false
}