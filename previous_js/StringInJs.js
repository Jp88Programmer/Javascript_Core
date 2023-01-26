console.log('String in Java ');
console.log("hello java");
var a = 34;
var b = 67;
console.log(a + b);
var c = a + b / (a & b) * (a % b ) ;
console.log(c);
var str = `this is the string and my first string`
var string1 = `${str} and i am so happy and i study the javaScript`
console.log(string1)
var java = 'java';
console.log(`${java}Script`)
console.log(`jayendra \nparmar `)
var str1 = new String(`html javaScript`)
console.log(str1)
console.log('javaScript is Scripting  and oop ');
var stringOfName = 'Jayendra Arvindbhai Ja Parmar '
console.log(stringOfName)
console.log(stringOfName.indexOf('Ja'))
console.log(stringOfName.lastIndexOf('Ja'));

//Substring of the string 

//slice(startIndex,the length of the substring)
console.log(stringOfName.slice(0,8))       

//substr(startIndex,the length of the substring)
console.log(stringOfName.substr(9,10))

//substring(startingIndex,endIndex but not included)
console.log(stringOfName.substring(0,20));

//the concat the method 
console.log(str.concat(string1))

//trim the method to igonere the starting and ending space
var whiteSpaceString = '           the whitespace inclued to start                   end space inclued             ';
console.log('with space (starting and ending side of the string )\n' + whiteSpaceString)
console.log('white remove the verse wisera \n' + whiteSpaceString.trim())
/* 
    let is the type to declare variable 
    Also call the scope variable when the scope is completed than variable remove the space
*/

