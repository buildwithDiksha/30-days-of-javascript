let num = 1441;
let original = num;
let reverse = 0;
while(num>0){
    let digit = num%10;
    num = Math.floor(num/10);
    reverse = reverse*10+digit;
}
if(reverse==original){
    console.log("Palindrome number");
}
else{
    console.log("Not a palindrome number");
}