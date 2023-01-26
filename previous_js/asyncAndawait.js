/*

    async and await :
    async menas when any type (variable or function) to return Promise 
    than use async mostly to use asyronize the programe or moment 
    
    await :  its one's state than complier to pading request or insterction and going to forward instraction when request are resolved  than its excute
    its usally use promise and another state when any insteraction to waiting its very useful to fetch api 
    its to fexlible not further use .then() 

    definition for study point of you :

    The async keyword:

    First of all we have the async keyword, which you put in front of a function declaration to turn it into an async function. An async function is a function that knows how to expect the possibility of the await keyword being used to invoke asynchronous code.
    Ah. Invoking the function now returns a promise. This is one of the traits of async functions — their return values are guaranteed to be converted to promises.
    So the async keyword is added to functions to tell them to return a promise rather than directly returning the value.

    The await keyword : 

    The advantage of an async function only becomes apparent when you combine it with the await keyword. await only works inside async functions within regular JavaScript code, however it can be used on its own with JavaScript modules.

    await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

    You can use await when calling any function that returns a Promise, including web API functions.
    
    async function hello() {
     return await Promise.resolve("Hello");
    };

    hello().then(alert);
    
*/

async function nameOfCadidete() {
    
    console.log("startNaming Of candiate ...");
    const api = await fetch('https://api.github.com/users');
    console.log("fetch api are apply but await is here than its time for background sorry");
    console.log(api);
    const users = await api.json();
    console.log("time to resolev and response to json....");
    console.log(users);
    return users ;
}

console.log("before function");
a = nameOfCadidete();
console.log("after function call");
a.then((data) => data);
console.log("to resolve promise and usee .then()");
console.log(a);

console.log("This is the divisible by 5 ");

async function divisilbe5(number) {
    
    if (number % 5 === 0){
        return  true ;
    }
    else{
        return false ;
    }
}

//when used to return the value/object of promise  
let b = () => {
   return divisilbe5(31).then((value) => console.log(value));
}

b();
// console.log(b());