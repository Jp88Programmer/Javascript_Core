// arrow function is the compress versoion of function let's example 

/*
    similer example
printEvenNumber = (number) => {

    for (let i = 1; i <= number; i++) {
        
        if(i % 2 === 0)
            console.log(i + " ");
        
    }
    
}

printEvenNumber(100);

*/


//Full compress version of function 
// here string.substr() is return and below line is similer to this 
/*

printString = function(string){
    return string.substr(8,6);
}

*/


printString = string => string.substr(8,6);

console.log(printString("This is String"));

Name = (name,sureName ) => name + " " + sureName ;
goodMorning = name => sureName => console.log(sureName);
    // console.log(name + " " + sureName );
// };
// }
funTofun = name =>  sureName => console.log(name + " " + sureName );

funTofun('jayendra');
goodMorning('parmar');
funTofun('parmar');
console.log(funTofun('parmar'));
