// Ques 1 
const sum = (a,b) => {
    return a+b ;
}
console.log(sum(10,21));

// Ques 2 

const OddEven = (num) =>{
    return (num%2===0?"Even":"Odd")
}
console.log(OddEven(8));


// Ques 3 
const largest = (a,b,c) =>{
    return Math.max(a,b,c);
}
console.log(largest(10,20,30));


// Ques 4 
function vowel(string){
    let count = 0;
    for(let i = 0;i<string.length;i++){
      let ch = string[i];
      if("aeiou".includes(ch)){
        count ++
      }
    }
    return count ;
}
console.log(vowel("diksha"));


// Ques 5
function double (num){
return num*2;
}
console.log(double(10));


// Ques 6 
function calculator(a,b){
    return a+b;
}
function add(callback){
     return callback(10,20);
}
console.log(add(calculator));
