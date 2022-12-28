//class in javascript 

//class : class is the one time of the blue print of any entites like if you said that car than car has four whells,engine 
// and sets and so on.. that is the fixed generic property to define all the car 

class Car{

    //constructor is method that its intiaizited the instance 
    //when object make/built/call automatically called the constructor 
    constructor(){
        this.key = false;
    }

    startEngine(){
        this.key = true;
    }

    isStart(){
        return this.key;
    }

    // here not instance function / prototype method 
    // instance variable and its contain the function express
    //here show that containing the method expression
    //what is difference method expression and normal function : that is variable hositng 
    driver = function takeFrontSit() {
        console.log("logically say that driver has take sit front")
    }

    //static method 
    static containFourWheels(){
        console.log("this is silly answer that car has contain the four wheels");
    }
}


const c = new Car();
console.log(c.isStart());
console.log(c.key);
console.log("------------------")
console.log(c.startEngine());
console.log(c.isStart());
console.log(c.key);
console.log("------------------")

c.driver();
console.log(c.driver,typeof(c.driver));
console.log("------------------")

Car.containFourWheels();