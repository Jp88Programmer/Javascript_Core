// Destructuring 
// its means that divied or assigning value simple ways to reducing time 

// to assign a = 445 and b = 45 
let [a, b, c] = [445, 45, 56, 66]
console.log(a, b, c)

// its a1 = 445 b = 45 and ...c means that all kinds of things are assignng in array  
let [a1, b1, ...c1] = [445, 45, 56, 66, 'jayendra', 565.78, 'parmar']
console.log(a1, b1, c1)

// divied object content to variable assign 
;({fullName, ...aim} = {fullName: 'jayendra',  aim: 'become reuseble engry finds ',num1: 34,num2: 234,num3: 434,num4: 134,num5: 304,num6: 334,num7: 394,num8: 374})
console.log(fullName)
console.log(aim)

// object destructing
let worm = {

    work : 'working in system its replcating code ',
    unique : 'its replcating , independent , ',
    type : 5,
    decripition : 'its similar to virues and its updated version ' ,
    version : '2.4.5.59',
    code : () => {

        for (let index = 0; index < 10; index++) {
            console.log(index);
        }
    }

};

// To assign the object instance to variable 
let {work,unique,...type} = worm ;
console.log(work);
console.log(unique);
console.log(type);
type.code();

// array destructring 
let cyberSecrty = ['vulrutiability','defence tools','web defence tool','cyber crime','cyber instvagation']

let [ch1,ch2,ch3,ch4,ch5] = cyberSecrty ;
console.log(ch1)
console.log(ch2)
console.log(ch3)
console.log(ch4)
console.log(ch5)


function reArr(){
    return [1,2,3]
}

let [a2,,c2] = reArr() ;
console.log(a2);
console.log(c2);