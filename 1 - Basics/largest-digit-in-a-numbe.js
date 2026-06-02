let num = 549;
let largest_digit = 0 ;
while(num>0){
    let digit = num%10 ;
    num=Math.floor(num/10);
    largest_digit = Math.max(largest_digit,digit);
}
console.log(largest_digit);