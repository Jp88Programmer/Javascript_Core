// set ds in javascript 
// The Set object lets you store unique values of any type, whether primitive values or object references.

let mySet = new Set()
mySet.add('jayendra parmar')
mySet.add('jayendra parmar')
mySet.add('jayendra parmar')
mySet.add(90)
mySet.add(67)
mySet.add(30)
mySet.add(true)
mySet.add(true)
mySet.add(true)
mySet.add(false)
mySet.add('this')

console.log(mySet)
console.log(mySet.size)
console.log('number in the set ', mySet.has(90))
console.log('number in the set ', mySet.has(92))

mySet.add([1, 1, 3, 3, 4, 'string', {a: 67, b: 'string object'}, true, false, 'this', 'this'])
// console.log(mySet)

// iterator in set 
for (const item of mySet) {
  // console.log(item)
}

// iterator in set using foreach loop
mySet.forEach(element => {
  // console.log(element)
})

// convert set to array using array.from() method
let setToArray = Array.from(mySet)

// to idetify the set to array 
// console.log(setToArray, typeof (setToArray))

setToArray.push('this')

console.log('after add the repeat value ', setToArray)
// console.log(setToArray)

console.log('this is avilable in set ',mySet.has('this'))