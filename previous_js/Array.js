let array = ['array','Array','ARray','ARRay','ARRAy','ARRAY',1,2,3,4,5,6,7,8,9,10];
console.log(array);
// console.log(array.push(11));

// the arraay push method to add the element in last 
array.push(11);
console.log(array);

// to add the element in the first
array.unshift('ARRAY');
console.log(array);

//delete pop method a
array.pop();
console.log(array);

//delete the first element 
array.shift();
console.log(array);

// one or many element delelte at time then use splice() method
// splice(statingIndex (to delete the element ),how many element to delete)
array.splice(3,1);
console.log(array);
