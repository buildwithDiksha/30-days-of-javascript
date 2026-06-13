// Callback function ek aisa function hota h jo dusre function me as a argument pass kiya jata h aur fir call kiya jata h 

function greet (name){
    console.log("Hello" + " " + name);    
}
function processUser(callback){
    callback("Diksha");
}
processUser(greet);   
// greet = callback function
// processUser = callback ko call kr raha h    



function user(Name){
    console.log("Bye" + " " + Name);
}
function username(callback){
    callback("Rohit");
} 
username(user);




// Arrow Function as Callback function 
// Agar callback sirf ek baar use ho raha hai to alag function banane ki jagah directly arrow function likh dete hain

// Without arrow function  :
function print(num){
    console.log(num);    
} 
[1,2,3].forEach(print)

// With arrow :
let numbers = [1,2,3,4];
numbers.forEach(num => console.log(num*2))

// Agar callback sirf ek baar use ho raha hai to alag function banane ki jagah directly arrow function likh dete hain


// forEach me Callback 

// Array.forEach((value) => {
//     // code 
// });

// Eg :
let arr = ["diksha","manisha","nisha","anshul","dipesh"]
arr.forEach((val) => {
    console.log(val);
    console.log(val.length);
})



// Multiple Parameters :
// forEach callback ko 3 value  milti h

// Array.forEach((value,index,array) => {
// })

// iska Eg : 
let fruits = ["apple","mango","banana"]
fruits.forEach((value,index)=>{
    console.log(value,index);
})


// map() me Arrow Callback

let nums = [1,2,3,4]
let result = nums.map((num)=>{
    return num*2;
})
console.log(result);


// filter() me arrow callback

let digits = [1,2,3,4,5];
let even = digits.filter((Num)=>{
    return Num %2 === 0
})
console.log(even);

// Array methods me sbse common usage 
// forEach :
Arr.forEach((item)=>{
    console.log(item);
})

// map
arr.map((item) => item * 2);


// filter
arr.filter((item) => item > 10);

// reduce 
arr.reduce((acc,curr) => acc + curr , 0 );
