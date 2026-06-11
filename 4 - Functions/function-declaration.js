// Functions can be defined as the block of code that performs a specific task , and can be invoked/called whenever needed

console.log("hello");   //  . k bad jo bhi aata h vo function hota h jo koi specific kaam krta h 

"abc".toLowerCase() // aur dot k bad function likhte h jo hme kam krvana h fir parenthesis lga dete h 

console.log([1,2,3].push(4));    // parenthesis k andr input likhte h 






// function se kam krvane k do parts hote h 
// function definition and function call ; function defintion hme btata h ki function kya kam krega and fir hm function call krenge ki tum ye kam kro 


// function definition                     // function call
//function functionName(){                  functionName();
// do some work
// }



function myFunction(msg){         // parameter - input
    console.log("welcome to js tutorial");
    console.log("we are learning js"); 
}
// yaha humne apne function ko define krdiya aur bta diya ki ise ye kam krna h , pr us se kam krvane k liye hme function ko call krna pdega  

myFunction(); 
myFunction();
// agr yhi kam mujhe 2 bar krvana hota to m bs function ko 2 baar call kr deti





// function parameters and argument

function myName(name){        // parameter - input
    console.log(name);       
}                      

myName("My name is diksha ")     // argument 



// function -> 2 numbers,sum
function mySum(a,b){       // input lenge
    console.log(a+b);
}

mySum(1,2);        // call krdiya aur argument daaldiya



// function -> 2 numbers ,multiplication
function product(a,b){
    multiply = a*b;
    return multiply;
}
let value = product(4,3);
console.log(value);



// console.log() sirf screen pr value print krata h kch return nhi krta to hum in future usko use nhi kr skte but return keyword value print k sath return krta h jisko future me use kiya jaa skta h 

// if koi function h calculateTotal to agr vo total return nhi krega fir payment vale page ko value kaise milegi 

function square(num){
    return (num*num);
}
let result = square(5);
console.log(result+5);
