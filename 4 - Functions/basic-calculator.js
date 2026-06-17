function calculator(a,b,operation){
    return operation(a,b);
}
const add = (a , b) => a + b ;
const sub = (a , b) => a - b ;
const mul = (a , b) => a * b ;
const div = (a , b) => a / b ;

console.log(calculator(5,6,mul));
