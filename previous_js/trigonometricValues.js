/*  
    once caluculater to solve the problem of trigonometric angles values than use  the mathematical purpose

    to solve the problem make the webpage below given the staps to use and understand very well 

    1.select the webpage (Select the body mode)
    2.Add the tital of your application and style using the javascript
    3.Add the Angle value its degree formate than get the answer of the value  sine(Angle),cos(Angle),tan(Angle) when show butten cilck 
    //All the seting value are in textfield

*/

//select the body 
let selectBody = document.querySelector('body');

//set The tital of the application
let appTital = document.createElement('h1');
appTital.id = 'appTital';
appTital.className = 'appTital';
appTital.innerText = 'Trigonometric Values ';
appTital.style = 'margin : auto ; text-alignment : center ; padding : 10px ; border-bottom : 2px solid black ; ';

//create the main tags to reprents as your content 
let mainContent = document.createElement('main');
mainContent.id = 'main';
mainContent.style = 'display : flex ; padding : 10px ; ';

//Deploument the main and the tital in body 
selectBody.appendChild(appTital);
selectBody.appendChild(mainContent);

//create the form and the input method so on..
let trigonoForm = document.createElement('form');
trigonoForm.id = 'form';
mainContent.appendChild(trigonoForm);

//create the label of Angle and setContent and input text feild
let createDiv1 = document.createElement('div');
createDiv1.style = 'margin : 12px 26px ; padding : 10px 34px ; font-size : 22px ;';
let angleOfLabel = document.createElement('label');
angleOfLabel.setAttribute('for', 'Angle');
angleOfLabel.innerText = 'Angle (Degree) : ';
let inputAngle = document.createElement('input');
inputAngle.setAttribute('id', 'Angle');
inputAngle.setAttribute('className','Angle');
inputAngle.setAttribute('type', 'text');
inputAngle.setAttribute('name', 'Angle');
inputAngle.setAttribute('placeholder', 'Angle in degree');
inputAngle.style = 'border-radius : 15px ; padding : 5px 8px ; ';
createDiv1.appendChild(angleOfLabel);
createDiv1.appendChild(inputAngle);
trigonoForm.appendChild(createDiv1);

//create the label of Sine value  and setContent and input text felid
let createDiv2 = document.createElement('div');
createDiv2.style = 'margin : 12px 26px ; padding : 10px 34px ; font-size : 22px ;';
let sinOfLabel = document.createElement('label');
sinOfLabel.setAttribute('for', 'Sine');
sinOfLabel.innerText = 'sine(Angle) : ';
let inputSine = document.createElement('textarea');
inputSine.setAttribute('id', 'Sine');
inputSine.setAttribute('type', 'text');
inputSine.setAttribute('rows','1');
inputSine.setAttribute('cols','25');
inputSine.setAttribute('name', 'Sine');
inputSine.setAttribute('placeholder', 'sin\u0398');
inputSine.style = 'border-radius : 15px ; padding : 5px 8px ; position: relative; top: 8px; ';
createDiv2.appendChild(sinOfLabel);
createDiv2.appendChild(inputSine);
trigonoForm.appendChild(createDiv2);

//create the label of Cosine value  and setContent and input text felid
let createDiv3 = document.createElement('div');
createDiv3.style = 'margin : 12px 26px ; padding : 10px 34px ; font-size : 22px ;';
let cosOfLabel = document.createElement('label');
cosOfLabel.setAttribute('for', 'Cos');
cosOfLabel.innerText = 'cos(Angle) : ';
let inputCos = document.createElement('textarea');
inputCos.setAttribute('id', 'Cos');
inputCos.setAttribute('type', 'text');
inputCos.setAttribute('rows','1');
inputCos.setAttribute('cols','25');
inputCos.setAttribute('name', 'Cos');
inputCos.setAttribute('placeholder', 'cos\u0398');
inputCos.style = 'border-radius : 15px ; padding : 5px 8px ; position: relative; top: 8px; ';
createDiv3.appendChild(cosOfLabel);
createDiv3.appendChild(inputCos);
trigonoForm.appendChild(createDiv3);

//create the label of Tan value  and setContent and input text felid
let createDiv4 = document.createElement('div');
createDiv4.style = 'margin : 12px 26px ; padding : 10px 34px ; font-size : 22px ;';
let tanOfLabel = document.createElement('label');
tanOfLabel.setAttribute('for', 'Tan');
tanOfLabel.innerText = 'tan(Angle) : ';
let inputTan = document.createElement('textarea');
inputTan.setAttribute('id', 'Tan');
inputTan.setAttribute('type', 'text');
inputTan.setAttribute('rows','1');
inputTan.setAttribute('cols','25');
inputTan.setAttribute('name', 'Tan');
inputTan.setAttribute('placeholder', 'tan\u0398');
inputTan.style = 'border-radius : 15px ; padding : 5px 8px ; position: relative; top: 8px; ';
createDiv4.appendChild(tanOfLabel);
createDiv4.appendChild(inputTan);
trigonoForm.appendChild(createDiv4);

//create the button 

// btShow.appendChild = document.createTextNode('Show');
// btShow.style = 'padding: 5px; margin: 10px; float: right; border - radius: 9px; width: 60px; font - size: 18px; background: #cdd0c8 ; border-radius : 8px ; ';
// btShow.setAttribute('onclick',solveTrigono());
// trigonoForm.appendChild(btShow);
// let fun = function(){
//     btShow.style = 'background-color : red ; padding: 5px; margin: 10px; float: right; border - radius: 9px; width: 60px; font - size: 18px;  border-radius : 8px ;  ';
// }
// btShow.setAttribute('onmouseover','fun()');
//make the method of the calculation to trigono value 
function solveTrigono() {
    let check = document.getElementsByClassName('Angle').length;
    if (check == 0) {
        let valueOfAngle = parseFloat(document.getElementById('Angle').value);
        console.log(valueOfAngle);
        let sinValue = (Math.sin(Math.PI * valueOfAngle / 180) * 10000) / 10000.0;
        let cosValue = (Math.cos(Math.PI * valueOfAngle / 180) * 10000) / 10000.0;
        let tanValue = (Math.tan(Math.PI * valueOfAngle / 180) * 10000) / 10000.0;
        document.getElementById('Sine').value = sinValue ;
        document.getElementById('Cos').value = cosValue ;
        document.getElementById('Tan').value = tanValue ;
    }
    // console.log(sinValue);
}
let btShow = document.getElementById('btShow');
console.log(btShow);
btShow.addEventListener('click',solveTrigono);









