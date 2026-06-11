// Ques 1 
// function hello(){
//     console.log("Hello World");
// }
// hello();



// Ques 2
// function greet(name){
//     console.log("Hello",name);
// }
// greet("Diksha");



// Ques 3
// function add(a,b){
//     return a+b;
// }
// console.log(add(3,2));



// Ques 4
// function largest(a,b,c){
//     return (Math.max(a,b,c));
// }
// let max = largest(5,2,9);
// console.log(max);



// Ques 5 
// function evenOdd(num){
//     if(num%2===0){
//         return("even");
//     }
//     else{
//         return("odd");
//     }
// }
// console.log(evenOdd(7));

//    Or 

// function oddEven(num){
//     return (num % 2 === 0  ? "even" : "odd");
// }
// console.log(oddEven(9));
// console.log(oddEven(2));



// Ques 6
// function square(num){
//     return (num*num);
// } 
// console.log(square(5));



// Ques 7 
// function cube(num){
//     return(num*num*num);
// }
// console.log(cube(3));



// Ques 8 
// function celsiusToFahrenheit(celsius){
//     return(celsius*9/5)+32;
// }
// console.log(celsiusToFahrenheit(36));
// console.log(celsiusToFahrenheit(0));



// Ques 9 
// function arr(items){
//     return(items[0]);
// }
// console.log(arr(["banana","apple","mango"]));

// Or 
// function arr([a,b,c]){
//     return a;
// }
// console.log(arr(["kite","site","bite"]));



//  Ques 10 
// function stringLength(items){
//     return items.length;
// }
// console.log(stringLength("age"));

// String pass kroge → uska character count milega.
// Array pass kroge → uske elements ka count milega.



//  Ques 11 
// function joinString(str1,str2){
//     // return str1.concat(str2);           // bina space k join krta h  
//     return str1.concat(" ",str2)           // space k sath join krta h 
// }
// console.log(joinString("Diksha","Sobhawat"));



// Ques 12 
// function natureOfNumber(num){
//     if (num > 0){
//         return ("positive"); 
//     }
//     else if (num<0){
//         return ("negative");
//     }
//     else{
//         return ("zero") ;
//     }
// }
// console.log(natureOfNumber(-7));
// console.log(natureOfNumber(2));
// console.log(natureOfNumber(0));

// Or

// function natureOfNumber(num){
//     return(num > 0 ? "positive": num < 0 ?"negative":"zero");
// }
// console.log(natureOfNumber(6));
// console.log(natureOfNumber(-1));
// console.log(natureOfNumber(0));



// Ques 13
// function checkPalindrome(num){
//     let reverse = 0;
//     let originalNum = num;
//     while(num>0){
//         let digit = num%10;
//         num = Math.floor(num/10);
//         reverse = reverse*10+digit;
//     }
//     return (reverse===originalNum?"palindrome":"not palindrome")
// }
// console.log(checkPalindrome(121));



//  Ques 14 
// function vowelCount(str){
//     let count = 0;
//     for(let i =0;i<str.length;i++){
//         let ch = str[i];
//         if("aeiou".includes(ch)){
//             count++ ;
//         }
//     }
//     return count;
// }
// console.log(vowelCount("icecream"));



//  Ques 15
function maxElement(arr){
    return Math.max(...arr);   // spread operator inhe  20 34 99 alag alag kr deta h 
}
console.log(maxElement([20,34,87,97,99]));

