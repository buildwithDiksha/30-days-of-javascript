// Arrow function - short syntax of function expression 

// without arrow function : 
const add = function(a,b){
    return a+b ;
};
console.log(add(5,4));

// with arrow function : 
const subtract = (a,b) => {
    return a-b ;
};
console.log(subtract(9,4));


// Arrow function syntax
const functionName = (parameters) => {
    // code 
};

// eg :
const greet = () => {
    console.log("hello");
}
greet();

// eg :
const square =  (num) => {
    return num*num ;
}
console.log(square(4));
// 2 ya zyada parameters ho to brackets mandatory hain
// agr parameter hi nhi h to parenthesis compulsory h 


// Implicit return 
const multiply = (a,b) => a*b ;
console.log(multiply(4,7));       // jb simple calculations jo tb ye method use kr skte h 

// Eg : 
const isEven = (num) => num%2===0;
console.log(isEven(4));


// Multi Line Code 
const calculate = (a,b) => {
    let sum = a+b ;
    let product = a*b ;
    return sum + product;
}
console.log(calculate(8,2));
// yaha braces use krne pdenge aur manually return bhi likhna pdega


// Returning Objects
const getUser = () =>{
    name: "diksha"
} 
console.log(getUser());
// iska ans undefined isliye aa raha h kyuki {} ko function body smjh aa raha h isliye hme object k alag se bracket lgane pdenge

// correct :
const getUsername = () => ({
    name:"diksha"
});
console.log(getUsername());
// object return karna ho to object ko () me wrap karte hain.



