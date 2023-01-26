let arr = new Array();

// traditional for loop 
for (let index = 0; index < 5; index++) {
    
    arr[index] = 'jayendra' ;
    
}

// define the function with arguments
let functionVariable = function(arr,index){
    console.log(arr[index],index);
    return null;
}

console.log(functionVariable(arr,2));

// here is javasript object make {} and name:value pair seperated by comma operator
let objectOfGame = {
    name : "Game of thoren",
    game : function(arr){
        console.log(arr.length);
        console.log("GTA 5");
        return 1;
    }
}

console.log(objectOfGame.game(arr));

for (const val of objectOfGame) {
    
    console.log(val);
    
}