/* 
    To  identify the what the object and class 
    In OOP the Object and Class , Encapluction , Polymorzortion , inheritance , abstract and interface its main thing of oop
    let's start oop in javasript
*/

//To make the object 
let object1 = {
    name : 'Jayendra Parmar',
    coures : 'javascript',
    enRollNo : 190280107091,
};

console.log(object1);


//that is Mobile Constrcutor 
function Mobile(BrandName,Specifation,Prize){
    this.BrandName = BrandName ;
    this.Specifation = Specifation ;
    this.Prize = Prize ;
    this.run = function() {
        console.log(`your choise phone is ${BrandName} and Specification ${Specifation} and very Badget Prize ${Prize} `); 
    }
}
//this is the Mobile type object 
mobile1 = new Mobile('Vivo','Storage : 128gb \nRam : 6gb',16999);
console.log(mobile1);

