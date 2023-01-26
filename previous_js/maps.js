// Map is combinations of key and value 
// ususally to see any language C,C++,java 
// In javascript also provide map its object 

let mapObj = new Map()

mapObj.set('Number', 897)
mapObj.set('String', 'this is the string')
mapObj.set([1, 2, 3, 4, 5, 6, 6, 7, 7, 8], 'this is the array')
mapObj.set(function () { return console.log('this is the function')}, 'this is the values of function')
mapObj.set({
  name: 'jayendra',
  rollNo: 190280107091,
  course: 'computer science',
  degree: 'ce',
  aim: 'become meaning full purpose'
}, 'this the object')

// iterator using map
for (const [value, key] of mapObj) {
  console.log(value, key)
}

// iterated the keys in maps
for (const key of mapObj.keys()) {

  console.log(key)
}

// iterate value from in maps
for (const value of mapObj.values()) {
  console.log(value)
}

console.log('------------------------------------------------------------')

// to convert the map to array 
let mapToArray = Array.from(mapObj)
console.log(mapToArray)

// to convert keys to array
let mapKeysToArray = Array.from(mapObj.keys())
console.log(mapKeysToArray)

let mapValuesToArray = Array.from(mapObj.values())
console.log(mapValuesToArray)

console.log('------------------------------------------------------------')

for (const key in mapObj.keys()) {
  console.log(mapObj[key])
}

console.log('------------------------------------------------------------')
