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
// splice(statingIndex (to delete the element ),how many element to delete)
array.splice(2,3);
console.log(array);

//this is custom object
let objectOfArray =  {
    'name of array' : 'array' ,
    'Length of Array' : array.length,
    'what plateform to perfoem' : 'Vs code',
    'Host name of ' : 'local:5050',
};

//for loop for the object 
// for in loop mostable use object intence iterated
for (const key in objectOfArray) {
    console.log(objectOfArray[key]);
}

// for (const key of objectOfArray) {
//     console.log(key);
// }
console.log("------------------------------------------------------------");

// to use the function exprection in for loop
array.forEach( function(element,index) {
    console.log(element,index);
});
console.log("------------------------------------------------------------");
//its foreach loop for traversing and iterating loop 
array.forEach(element => {
   console.log(element); 
});
console.log("------------------------------------------------------------");
//iterating loop for any normal laguange
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
console.log("------------------------------------------------------------");
const ele = (element,index) => {
    console.log("array[" + index + "] = " + element);
}

array.forEach(ele);


const fun = () => {
   console.log("This none paranthiess function and also Arrow function "); 

   return "Vikaram SaraBhai";
}
console.log("------------------------------------------------------------");
fun();
console.log("------------------------------------------------------------");
console.log(fun());
console.log("------------------------------------------------------------");
function greet(who) {
console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");



console.log("------------------------------------------------------------");
function square(x,y) { console.log(y) ; return x * x; }
console.log(square(4));

console.log("------------------------------------------------------------");
function multiplier(factor,number1) {
return number => number1 * number * factor;
}

let twice = multiplier(2,3);
console.log(twice(5));

function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName();
}


console.log("-------------------------------------------------");

numbers = [12,33,3,5,6,7,7,785,34,32,44,43233,4233];
console.log(Math.max(...numbers));

maxAndMinValue(numbers);

function maxAndMinValue(...numbers) {
    
    let maxmum = -Infinity ;
    let minmum  =  Infinity ;
    for (const element of numbers) {
        
        if (minmum > element) {
            minmum = element ;
        }
        if (maxmum < element) {
            maxmum = element ;
        }

        console.log(maxmum,minmum);
    }

    console.log("Max Value : " + maxmum,"Min Value : " + minmum);

}


