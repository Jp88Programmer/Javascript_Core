console.log("Objects prototype and ineritance")

//user defined object 
let student = {
    name : function(){
        return `pleace fill the name`
    },
    enrollNumber : function(){
        return `Enter the enrollment Number`
    },
    degree : function () {
        return `Enter the degree course `
    },
    setName :  function(newName) {
        this.name = newName ;
    }
};

//this mehod to use the simpliy Object.create() mehod and parameter as the prototype which is defined 
let stu1 = Object.create(student);
stu1.name = 'Jayendra Parmar'
stu1.enrollNumber = 190280107091
stu1.degree = 'BE Computer Engineering 3 year'
console.log(stu1);

//Another method to Use defined type  
let stu2 = Object.create(student,{
    name  : {value : "jayendra Parmar" , writable : true },
    enrollNumber : {value : 190280107091},
    degree : {value : "C C++ Java Javascript"},
    });
    stu2.setName('Harshad Parmar');
    console.log(stu2);

//make the constructor 
function Employee(name,salary,skills) {
    this.name = name ;
    this.salary = salary ;
    this.skills = skills ;
}
let emp1 = new Employee("Jayendra Parmar",35000,'c c++ java javaSCript');
// console.log(emp1);

//Make the second constructor and inherited the employee con..
/* 
    the example with understanding constrctor

    This looks similar to the Person constructor in many ways, but there is something strange here that we've not seen before — the call() function. This function basically allows you to call a function defined somewhere else, but in the current context. The first parameter specifies the value of this that you want to use when running the function, and the other parameters are those that should be passed to the function when it is invoked.

*/

// to make the Facilty constructor
function Faclity(name,salary,skills,studyCourse) {
    Employee.call(this,name,salary,skills);
    this.studyCourse = studyCourse ;
};

// inheritaed the prototype 
Faclity.prototype = Object.create(Employee.prototype);

//Manully set the constrctor 
Faclity.prototype.constrctor = Faclity ;

let fact1 = new Faclity("Hetal Pandiya",45000,'C C++ C-graphics','Computer Graphics , Profecinal Etics Ipdc Computer Network');
console.log(fact1);


