const { useCallback } = require("react");

// Ques 1 
function greet(name){
    console.log("hello" + " " + name);
}
function processUser(callback){
    callback("Diksha")
}
processUser(greet)



// Ques 2 
function showMessage(msg){
    console.log(msg);
}
function Message(callback){
    callback("Welcome");
}
Message(showMessage);



// Ques 3 
function add(a,b){
    return a+b;
}
function calculate(x,y,operation){
    return operation(x,y);
}
let ans = calculate(10,20,add);

console.log(ans);


