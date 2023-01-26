console.log('Local and Section storage');


let name = 'Jayendra parmar';
let enorllmentNo = 190280107091 ;

// to set the borwer in local storage 
localStorage.setItem('Name',name);
localStorage.setItem('EnrollNo',enorllmentNo);

//to get the data in the local storage 
console.log(localStorage.getItem('Name'));
console.log(localStorage.getItem('EnrollNo'));

//to clear the data in the local storage / to clear the fariovable storage 
localStorage.removeItem('Name');

//TO clear all the data
localStorage.clear();

// to set the borwer in session storage 
sessionStorage.setItem('SessionName',name);
sessionStorage.setItem('SessionNO',enorllmentNo);

//To retrive the data from the session storage 
console.log(sessionStorage.getItem('SessionName'));
console.log(sessionStorage.getItem('SessionNO'));

//To clear the data from the session st..
sessionStorage.removeItem('SessionName');
sessionStorage.clear();
