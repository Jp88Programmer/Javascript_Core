console.log("DomCreate with javascript");
let text = 'youtube';
// for (let i = 0; i < document.length; i++) { 
//     if (text == document.documentElement)
//      console.log(document.links[i]);
// }
/* 
  
        selectors 
        two types selector  -->   1. single selc..   2.multiple selector...

 */
let singleSelector = document;
// let els = document.getElementsByClassName('div1');

//the select the tags or byClass or byId return the first tags or selector of given parameter  
let els = document.querySelector('.div1');
// console.log(els);

// //to return the firstChild of your attribute  
// console.log(els.firstChild);
// console.log(els.firstElementChild);

// //to return the last element 
// console.log(els.lastChild);
// console.log(els.lastElementChild);

//
console.log(els.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);


// // console.log(singleSelector);
// Array.from(singleSelector).forEach(element => {
//     console.log(element);
// // });
// singleSelector  = document.getElementsByTagName('h1');
// console.log(singleSelector);
// singleSelector = document.getElementsByClassName('box1');
// // console.log(singleSelector); 

let element = document.createElement('p')
element.textContent = 'that time to show what are you doing what you want and want you gain ';
element.textContent.color;
document.body.appendChild(element);
console.log(singleSelector);

//To create the element 
// this add the canvas to document 
let addcanvas = document.createElement('canvas');
addcanvas.height = 300;
addcanvas.width = 500;

let textdegin = addcanvas.getContext('2d');

// to add the element to select tags as child and append the element 
textdegin.fillText('hello jayendra parmar \nto insert the canvas in your document', 100, 100);
document.body.appendChild(addcanvas);