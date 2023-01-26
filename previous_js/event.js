//Event in the JavaScript 
/*

    Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. For example, if the user selects a button on a webpage, you might want to respond to that action by displaying an information box.

*/


// click event
document.getElementById('h1').addEventListener('click', function (e) {
    console.log('this is event to click and info.. about the tags');
    // location.href = '//google.com';
    /* 
        the event property to use or enables the event 
        some event and property are show the below mode 
    // */
    let vx = e.screenX;
    let vy = e.screenY;
    console.log(e);
    console.log(vx, vy);

    let wx = e.clientX;
    let wy = e.clientY;
    console.log(wx, wy);

    // the target return the tags to define the event 
    let tar = e.target;
    console.log(tar);

});

// the event 
let sel = document.getElementById('box1');

// movse enter event 
sel.addEventListener('mouseenter',fun2);

// mouse leave event
sel.addEventListener('mouseleave',fun3);


function fun2(e){
    console.log('this is div enter');
}
function fun3(e){
    console.log('this is div leave');
}
let button = document.querySelector('body');
button.addEventListener('mousemove',fun1);

function fun1(e) {
//   console.log(e.offsetX,e.offsetY);
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX + e.offsetX})`;
}

