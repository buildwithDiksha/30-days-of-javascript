let num = 23457;
let even_count=0;
let odd_count=0;
while(num>0){
    let digit=num%10;
    num=Math.floor(num/10);
    if(digit%2===0){
        even_count++
    }
    else{
        odd_count++
    }
}
console.log(even_count);
console.log(odd_count);