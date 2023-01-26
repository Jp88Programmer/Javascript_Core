/// to add the Element in DOM let's the code and enjoy them 

//first to create the element 
let addElement = document.createElement('p'); 
addElement.className = 'divPara';
addElement.id = 'divPara1';

//using innerHtml 
addElement.innerHTML = 'this is the paragraph in div .box and using js .innerHTML property ';

//using innerText
addElement.innerText = 'this is the paragraph in div .box and using js .innerText property ';

//to select the parent or regin tags to falch addElement 
let selectTag = document.querySelector('div.box');

//to append as child in selectTag
selectTag.appendChild(addElement);

/* Replace the element and so on (text,img,tags) etc */

let addElement1 = document.createElement('h3');
addElement1.className = 'heading';
addElement1.id = 'heading1';

// to add the text from createText method 
let addText = document.createTextNode('this add repleace to p.para using replaceWith method from js');

//add the text element
addElement1.appendChild(addText);

//to replace element 
addElement.replaceWith(addElement1);

//to Replace the text from the element 
let replaceText = document.createTextNode('this text replace with old text and append from element');
let addElement2 = document.createElement('p');
addElement2.className = 'paraReplace';
addElement2.id = 'paraReplace1';
addElement2.appendChild(replaceText);

//replace the addElement2 to #heading1
let parent = document.getElementById('box1');
parent.replaceChild(addElement2,document.getElementById('heading1'));

//remove the child element 
parent.removeChild(document.getElementById('paraReplace1'));
