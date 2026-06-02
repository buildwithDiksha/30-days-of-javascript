let num = 1234;
let reverse = 0 ;
while(num>0){
    let digit = num % 10 ;     // gives remainder(4,3,2,1)
    num = Math.floor(num/10);   // gives only integer part (123,12,1,0)    // jab tak hamara num >0 h tab tk loop chlega jaise num hua 123,12 to last me jake no. 0 hogya aur loop bnd hogya 
    reverse=reverse*10+digit;   //(0*10+4=4)(4*10+3=43)(43*10+2=432)(432*10+1=4321)
}
console.log(reverse);
