/* settimeout its one time when execute any event or stements is few time after than use this. */
console.log("Set Time outs");

console.log("Go Go power Ranger !!!! ");
function timeforce() {
    console.log("Power ranger Ready to fight ");
}

//this the setTimeout its arguments function (Recommends no args or covise) 
//its execute fuction after getting provideing time in millseconds
setTimeout(timeforce, 5000);

//setInterval its one time iterating time providing 
// setInterval(timeforce, 10000);


var i = 1 ;
function display() {
    let timeNow = new Date();

    // if(document.getElementsByClassName('time').length > 0 )
    //     document.getElementsById('contianer').removeChild(document.getElementsByClassName('time'));
    let container = document.querySelector('div#container');
    let createObs = document.createElement('p');
    createObs.style = `background-color : rgb(${i * 10 },${i * 10 },${i * 5 }) ; border-radius : 10px ; `
    createObs.id = 'time'
    createObs.className = 'time'
    createObs.innerText = timeNow ;
    container.appendChild(createObs);
    if (document.getElementsByClassName('time').length > 0) {
        container.replaceChild(document.getElementsById('time'),createObs);
    }
    i++ ;
    console.log(timeNow);
    
}
function removeEl() {
    let container = document.querySelector('div.container');
    container.removeChild(document.getElementById('time'));
}

setInterval(display,1000);