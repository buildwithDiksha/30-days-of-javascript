// Global Scope - jo variable kisi function k bahar bna ho,usko hum khi se bhi access kr skte h 

let name = "Diksha";
function greet(){
    console.log(name);
}
greet();
console.log(name);


// Local Scope - jo variable function k andr bnta h aur sirf vhi tak accessible h (function scope)

function hello(){
    let Name = "anshul";
    console.log(Name);
}
hello();
// console.log(Name);   -  ab yaha reference error aa raha h kyuki name sirf function k andr accessible h 



// Scope chain - variables ko automatically local → outer → global order mein search krke code ko simple aur closures possible banata hai

let city = "Mumbai";
function first(){
    function second(){
        console.log(city);
    }
    second();
}
first();


// Variable Shadowing - Function ne apna local variable bana liya,local variable priority le leta hai , Global variable temporarily "shadow" ho jata hai.

let NAME = "Manisha";
function sayName(){
    let NAME = "Rohit"
    console.log(NAME);
}
sayName();



// Block Scope - let aur const block scope follow krte h 
{
    let age = 20 ;
}
// console.log(age);    
//  yaha age block scope h to vo sirf block k andr hi accessible h 


// var block scope follow nhi krta isliye modern js me let aur const use krte h 




// Function Expression 

function cat(){
    console.log("meow");  // abhi tak hum function aise bnate the
}
cat();

// ab hum function ko variable me store kr skte h aur function ko variable ki tarah treat kiya jaa skta h 
// ab ye function bnega : 
const dog = function(){
    console.log("bark");
}
dog ();

// Function Expression Kyu Use Karte Hain?
// Kyuki function ko variable ki tarah treat kar sakte hain


const add = function (a,b){
    return a+b ;
}
console.log(add(5,6));





// Kyun?
// Function declaration memory me pehle store ho jata hai
// Function expression variable ki tarah behave karta hai

morning();
function morning (){
    console.log("gud morning");    // ye kam krega 
}

afternoon();
const afternoon = function (){
    console.log("gud afternoon");    
};
// ye kam nhi krega kyuki ye function me load nhi hua h ye line by line execute hota h 