//Write a recursive function to generate all permutations of a given string.

function getPermutations(str) {
  if (str.length === 0) return "";
  if (str.length === 1) return str;
  let res = [];
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const restChars = str.slice(0, i) + str.slice(i + 1);
    const restCharPerm = getPermutations(restChars);
    for (let j = 0; j < restCharPerm.length; j++) {
      const permutation = currentChar + restCharPerm[j]
      res.push(permutation)
    }
  }
  return (res);
}
