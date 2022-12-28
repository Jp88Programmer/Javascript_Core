var c = 1;

//helper function 
var b = function b(x){
    c *= x;
    return c ;
}

//helper function
var filterGreater = function(arr,logic){
    const res = [];
    arr.forEach(element => {
        logic(element)?res.push(element):null;
    });
    return res;
}

// let filterWithArrow = function(arr, (x) => (x % 2) === 0)
const arr = [1,2,3,4,5,6,7,8,9,10,12,13,14,15];

// console.log(filterGreater(arr,(x)=>x%2===0));

//use with array prototype property 
Array.prototype.filterfunction = function(logic){

    const res = [];
    this.forEach(element=>{
        logic(element)?res.push(element):null;
    });

    return res ;
}
// var sum = 0;
console.log(arr.reduce((sum,number)=> sum + number))

// console.log(sum);
