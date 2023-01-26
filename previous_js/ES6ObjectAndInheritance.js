/* 

    we learn the Object and inheritance with the prototype 
    now learn the Object using class 
    its very simliar to java and java is the also learn than lets study the object and class 

    class is the blue print of the object and object is the instance of the class 

    here we define the class and constructor and instance or static(class function ) to identy the info/more about the object 

    let's the example  geometricshape is the exends the circle and its method 

*/

/*
    the GeometricShape Class Mostly the class is the abstarct but here use the border,background and fill color and use the style 
*/
class GeometricShape {
  //in the javascript constructor make the constructor keyword 
  constructor(borderColor,backgroundColor,fillColor){
    this.borderColor = borderColor ;
    this.backgroundColor = backgroundColor ;
    this.fillColor = fillColor ;
  }
  //setter method
  setColor(color) {
    this.fillColor = color ;
  }
  //Getter method 
  getColor(){
      return this.fillColor ;
  }
  //show to string type 
  toString(){
      return `BorderColor : ${this.borderColor} , background-color : ${this.backgroundColor} , Color : ${this.fillColor} ` ;
  }
}
/* 
    the circle class the extends by the GeometricShape class 
    here define the radius method and show the area and perimeter 

    in the javaScript not declare the variable but define to constructor 
    and most off syntex are simlier to java
     
*/
class Circle extends GeometricShape {
    constructor(borderColor,backgroundColor,fillColor,radius){
        super(borderColor,backgroundColor,fillColor);
        this.radius = radius ;
    }
    //Setter method 
    setRadius(newRadius){
        this.radius = newRadius ;
    }
    //Getter method 
    getRadius(){
        return this.radius ;
    }
    //Return the Area
    getArea(){
        return Math.PI * this.radius * this.radius ;
    }
    //Return the Perimeter 
    getPerimeter(){
        return 2 * Math.PI * this.radius ; 
    }
    //show the circle
    toString(){
        return `Circle :  ${super.toString()} \nRadius : ${this.radius} \nArea : ${this.getArea()} \nPerimeter : ${this.getPerimeter()} ` ;
    }
}
let circle1 = new Circle("Black","Pink","Red",2.34);
console.log(circle1.getArea());
