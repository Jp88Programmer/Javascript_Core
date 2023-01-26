/*
   first : to select selector and issue the event click and edit the selector and add the DOM and to stor the localStorage
*/


// let sel = document.querySelector('div.container');
// sel.addEventListener('click',edit);

// function edit() {
//     let editSel = document.createElement('div');
//     editSel.className = 'editClass';
//     editSel.id = 'editId';
//     editSel.innerHTML = "<p>jayendra parmar hdjvdvhdjh fdhjfhdjfsd dsfndfbjdfb dhsbdhshfus </p>";
//     sel.replaceWith(editSel);
//     let stor = editSel.firstChild.textContent ;
//     localStorage.setItem('editItem',stor);

//     console.log("Successfully data receive !!!");
// }

let divElement = document.createElement('div');
val = localStorage.getItem('Edititem');
if (val == null) {
    divElement.innerText = 'this is the text  you can edit';
}
else{
    divElement.appendChild(document.createTextNode(val));
}
divElement.setAttribute('id','divElement');
divElement.setAttribute('className','divElement');
divElement.setAttribute('style','border : 2px solid black; margin : 5px; padding : 10px; border-radius : 10px; width : 150px; height : 100px;');

let mainContent = document.querySelector('.mainContent');
let container = document.getElementById('container');
mainContent.insertBefore(divElement,container);

divElement.addEventListener('click',function(){

        let textAreaCheck = this.getElementsByClassName('textarea').length;
        if(textAreaCheck == 0){
            let html = divElement.innerHTML;
            divElement.innerHTML = `<textarea name="Edit" class="textarea" id="textarea" cols="20" rows="5">${html}</textarea>`;
        }
        let textArea = document.getElementById('textarea');
        textArea.addEventListener('blur',function(){
            divElement.innerHTML = textArea.value ;
            localStorage.setItem('Edititem',textArea.value);
        });

});


