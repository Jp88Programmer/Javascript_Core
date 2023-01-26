/*

    Call Back function :

    A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

    The above example is a synchronous callback, as it is executed immediately.

    Another Definatioin by Wikipedia :
    In computer programming, a callback, also known as a "call-after"[1] function, is any executable code that is passed as an argument to other code; that other code is expected to call back (execute) the argument at a given time. This execution may be immediate as in a synchronous callback, or it might happen at a later point in time as in an asynchronous callback
    
    Note, however, that callbacks are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks. A good example is the callback functions executed inside a .then() block chained onto the end of a promise after that promise fulfills or rejects. This structure is used in 
    many modern web APIs, such as fetch().
    
*/

/*

     its example of the input the name and save file or content to local storage please carefully read the sentance and show your creativity 

*/

// function greeting(name) {
//     alert('Hello ' + name);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);

Student =
    [{
        "Name of the student": "Jayendra Parmar",
        rollNomumber: 190280107091,
        Course: "  Data Structure And Algorithm ",
        Degree: "BE Compouter enginreeing",
        Skills: "C C++ Java Javascript ",
    },
    {
        "Name of the student": "Harshad Parmar",
        rollNomumber: 19028010899,
        Course: "  C For Data structure ",
        Degree: "BE Compouter science enginreeing",
        Skills: "C C++ Java Javascript c++ , c for data stucture ",
    },
    {
        "Name of the student": "Jayendra Parmar",
        rollNomumber: 190280107091,
        Course: "  Data Structure And Algorithm ",
        Degree: "BE Compouter enginreeing",
        Skills: "C C++ Java Javascript ",
    },
    {
        "Name of the student": "Jayendra Parmar",
        rollNomumber: 190280107091,
        Course: "  Data Structure And Algorithm ",
        Degree: "BE Compouter enginreeing",
        Skills: "C C++ Java Javascript ",
    },
    {
        "Name of the student": "Jayendra Parmar",
        rollNomumber: 190280107091,
        Course: "  Data Structure And Algorithm ",
        Degree: "BE Compouter enginreeing",
        Skills: "C C++ Java Javascript ",
    },
    {
        "Name of the student": "Jayendra Parmar",
        rollNomumber: 190280107091,
        Course: "  Data Structure And Algorithm ",
        Degree: "BE Compouter enginreeing",
        Skills: "C C++ Java Javascript ",
    },
    {
        "Name of the student": "Jayendra Parmar",
        rollNomumber: 190280107091,
        Course: "  Data Structure And Algorithm ",
        Degree: "BE Compouter enginreeing",
        Skills: "C C++ Java Javascript ",
    },
    {
        "Name of the student": "Jayendra Parmar",   
        rollNomumber: 190280107091,
        Course: "  Data Structure And Algorithm ",
        Degree: "BE Compouter enginreeing",
        Skills: "C C++ Java Javascript ",
    },
    {
        "Name of the student": "Jayendra Parmar",
        rollNomumber: 190280107091,
        Course: "  Data Structure And Algorithm ",
        Degree: "BE Compouter enginreeing",
        Skills: "C C++ Java Javascript ",
    }
    ]
//call the callback to recall or complete the Join than after call getStudents function its very imporant   

function Join(student) {

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            err = false ;
            if(!err){
            Student.push(student);
            // console.log("Join the student suceefully");
            resolve();
            }
            else{
                reject();
            }
        }, 3000);
    })
};

function getStudents() {

    setTimeout(() => {
        str = "";

        Student.forEach(Element => {

            str += `<li>${Element["Name of the student"]}</li>`

        });
        document.getElementById('ul').innerHTML = str;
        console.log("Student list import the DOM");
    }, 1000);

}

let st = { "Name of the student": "jay Rathod ", rollNomumber: 567, Course: "BEtech cse ", Skills: "C C++ java python " };

Join(st).then(function(){
    console.log("Student Join successfully");
    getStudents();
}).catch(function(){
    console.log("Rejected Student Request ");
});

// getStudents();