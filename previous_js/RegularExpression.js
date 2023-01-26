/*
    Regular Expression : 

    regular expression is one time ex.. than its start / and with / 

    ex : a = / this is regular expression / 

    what use ? 

    r.e is use when any string/file/project to search or change any word or instruction than very killer function 

    real life example : vs code well known when to hover cursor and click right click and change all occurnce its change all word or instrction and replace to all file/project 

*/

/*

// normal expression
let regularExpression = /jayendra/

// global expression
let regularExpression1 = /jayendra/g

// caseInsentive expression
let regularExpression2 = /jayendra/i

let str = `this is jayendra parmar and jayendra is very nice guy but jayendra very complecatent person not seeing their jayendra parmar very high stuimulation his clearfy to promise`

// 1.exec()
console.log(regularExpression2.exec(str))

// 2.test() --> if match r.e than its true 
console.log(regularExpression.test(str))

// 3.match() --> if match string as parameter r.e than return main benfits is its many occurance to show array
console.log(str.match(regularExpression1))

// 4.search() --> to search r.e in str and return str match (as r.e) else return -1
console.log(str.search(regularExpression1))

// 5.replace() -->replace match r.e if r.e global than all occurance replace 
console.log(str.replace(regularExpression1,"Harshd"))

*/


// let regx = /blockchian/;

// regx = /^blockchian/;               //--> ^ means start with after character ^_ example here 
// regx = /n$/;                       //--> character/string$ means if string end with r.e character than match
// regx = /block?ch?ia?n/            //--> character after ? than it optianal use or not 
// regx = /jayendr.a/               //--> match any one character
// regx = /jayendr*a/              //--> padding

// // let str = `blockchian is very intersting and future bb tecnology blockchian use decentralice system blockchian will future for web 3.0 blockchian`
// let str = "jayendra"

// console.log(regx.exec(str))
// if(regx.test(str)){
//     console.log(` match : ${regx.exec(str)} regular exprssion ${regx.source} `)
// }



/*
// character sets       --> use []
// [] type any one charcter to this scope 
// ex : /po[aA]r/ than str = "poar" aA applicable 
// [a-zA-z0-9 +-/] means that a to z , A to Z , 0 to 9 are applicable  
let regx = /jayendra[ a-zA-Z]pa[ ,<>0-9A-Z+a-z]rmar/ // --> first [] => a to z,A to Z applicable [] => <> and 0 to 9 A to Z + a to z are applicable

// Quentifieres     --> use {}
regx = /jayendr{2}a/ // exactaly 2 times r occur   
regx = /jay{0,3}endr{0,10}a/ // r occur 0 or 1 ... or 10 times and y 0 or.. 3 times
let nameString = 'jaendra parmar'
console.log(regx.exec(nameString))
if (regx.test(nameString)) {
  console.log(` match : ${regx.exec(nameString)} regular exprssion ${regx.source} ` + '\n')
}

console.log("Grouping")
// Grouping         --> use ()
regx = /(ja){0,10}(ye){2}n(d[0-9]){0,3}ra/
nameString = 'yeyend9d4d6ra'
console.log(regx.exec(nameString))
if (regx.test(nameString)) {
  console.log(` match : ${regx.exec(nameString)} regular exprssion ${regx.source} ` + '\n')
}

*/


// Character Classes

let regx = /\wayendra/                                 //--> \w word character contains _ or number or alphaet 
let nameString = '_ayendra'       
regx = /\w+yendra/                                    //--> \w+ one or many word character contains or not 
nameString = 'j788ayenpdra'       
regx = /\Wayendra/                                   //--> \W mens non word character not word chacter
nameString = '&ayenpdra'        
regx  = /\W+ayendra/                                //--> one or more \W none word character
nameString = '^&&ayenpdra'        
regx = /jayen\d777ra/                              //--> \d mens  one digit 
nameString = 'jayen5777ra'        
regx = /jayen\d+ra/                               //--> \d+ one or more digit 
nameString = 'jayen7798473ra'       
regx = /jayen\Ddra/                              //--> \D none digit number
nameString = 'jayenpdra'        
regx = /jayen\D+dra/                            //--> \D+ one or more none digit number
nameString = 'jayenparmardra'       
regx = /jayendra\sparmar/                      //--> \s white space character
nameString = 'jayendra parmar'        
regx = /jayendra\s+parmar/                    //--> \s+ one or more white space character
nameString = 'jayendra  parmar'
regx = /jayendra\Sparmar/                    //--> \S none white space character
nameString = 'jayendra%parmar'
regx = /jayendra\S+parmar/                  //--> \S+ one or more none white space character
nameString = 'jayendra%$$parmar'
regx = /jayendra\b/                        //--> word boundary mens \b is contains one boundary of word  after \b none word character
nameString = 'jayendra parmar'

// Assertions 
regx = /jay(?=endra\wparmar)/            //--> ?= that any string after ?= character or string match 
nameString = 'jayendra_parmar'

regx = /jay(?!endra\wparmar)/           //--> ?= that any string after ?= character or string match 
nameString = 'jay**'                   //--> ?= means that not match the string and character

console.log(regx.exec(nameString))

if (regx.test(nameString)) {
  console.log(` match : ${regx.exec(nameString)} regular exprssion ${regx.source} ` + '\n')
}
