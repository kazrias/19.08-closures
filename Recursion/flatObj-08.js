//Write a recursive function to flatten a nested object.

function flatObj(obj, parent) {
  let res = {}
  for (let key in obj) {
    let parentName = parent ? parent + '.' + key : key;
    if (typeof obj[key] === 'object')
      return { ...res, ...flatObj(obj[key], parentName) }
    res[parentName] = obj[key]
  }
  return res
}