// iterator is the traversing process / function which use object 
// In JavaScript an iterator is an object which defines a sequence and potentially a return value upon its termination.

// Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties:

/*
    value
    The next value in the iteration sequence.

    done
    This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value.
*/

let iteratorInArray = function (animals, startIndex, endIndex) {
  let index = 0

  if (startIndex === undefined) {
    startIndex = 0
  }
  if (endIndex === undefined) {
    endIndex = animals.length
  }
  return {
    next: function () {
      if (index <= endIndex && startIndex <= endIndex) {
        return {
          value: animals[startIndex + index++],
          done: false
        }
      }else {
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}

let animals = ['lion', 'tiger', 'elephant', 'fox', 'zebra', 'monkey', 'goerlia']

let animalsIteration = iteratorInArray(animals, 0,3)
console.log(animalsIteration.next().value)
console.log(animalsIteration.next().value)
console.log(animalsIteration.next().value)
console.log(animalsIteration.next().value)
console.log(animalsIteration.next().value)
console.log(animalsIteration.next().value)
console.log(animalsIteration.next().value)
