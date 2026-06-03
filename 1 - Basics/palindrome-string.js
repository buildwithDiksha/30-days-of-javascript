let str= "madam";
let original = str;
let reverse = str.split("").reverse().join("");
console.log(reverse);
if(reverse==original){
    console.log( str + " is a palindrome string");
}
else{
    console.log( str + " is not a palindrome string")
}