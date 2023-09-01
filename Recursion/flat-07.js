//Write a recursive function to flatten an array of nested arrays

function flat(arr) {
  let newArr = [];
  for (let val of arr) {
    if (Array.isArray(val))
      newArr.push(...fakeFlat(val))
    else
      newArr.push(val)
  }
  return newArr
}