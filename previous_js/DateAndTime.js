console.log("Date and time");

// make Date() object using new keyword 
let today = new  Date();    // its now time 
console.log(today);
// console.log(typeof(today));

// today.setDate('23-12-2001 04:23:47');
// console.log(today);

let date = new Date();
console.log(date);

// Get Day and its method
console.log(date.getDay());

// Get Date and its methods 
console.log(date.getDate());

// get month
console.log(date.getMonth());

// get Minute,hour and Second and millsecond
console.log(date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds());

/* Set methods */
let set = new Date();
console.log(set);

set.setDate(29);
set.setMonth(1);
set.setFullYear(2001);
set.setHours(23,45,34,89);

console.log(set);
