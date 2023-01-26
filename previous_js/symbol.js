// symbol is primitive type that means its not referance type 

let sym1 = Symbol('this is first symbol')
let sym2 = Symbol('this is first symbol')

console.log(sym1,typeof(sym1))

console.log(sym2,typeof(sym2))

// symbol is unique key its value is not repept or change or not same  
console.log(sym1 === sym2)

// to reprent in object type 
let obj = {}
obj[sym1]  = 'symbol1'
obj[sym2]  = 'symbol2'
obj['name'] = 'symbol object'
obj['aim'] = 'show proprety of symbol'

// console.log(obj);


// in loop symbol are igonre in the scope of loop 
for (const key in obj) {
    console.log(obj[key]);
}
