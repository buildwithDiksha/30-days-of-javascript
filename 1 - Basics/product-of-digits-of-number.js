let num=434;
let product=1;
while(num>0){
    let digit = num%10 ;
    num = Math.floor(num/10);
    product = product*digit;
}
console.log(product);