let str = "diksha"
str=str.toLowerCase();
let vowels = 0;
let consonants = 0;
for(let idx=0;idx<str.length;idx++){
    let ch=str[idx];
if(ch>='a' && ch<='z'){
    if("aeiou".includes(ch)){
        vowels++;
    }
    else{
        consonants++ ;
    }
}
}
console.log(vowels);
console.log(consonants);
