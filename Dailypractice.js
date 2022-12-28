const number = [1,[2,[3,[8,[7]]],4],5];

const res1 = number.flat();
const res2 = number.flat(4);

console.log(res1)
console.log(res2)


console.log("----------------------------------------------------");

const numbers = [1,2,3,4,5];

//when you delete the item than its delete the partitculer element and its set empty item 
// here not pop the value or not reduce the length of array 
delete numbers[2];


console.log(numbers.length)
console.log(numbers[2]);
console.log(numbers.length)
console.log(numbers);