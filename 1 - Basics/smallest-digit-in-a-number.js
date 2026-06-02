let num = 873;
let smallest_digit=9; // kyuki agr 0 se initialize kiya to 0 hi ans hoga hmesha kyui zero hi smallest h to hm largest number ko smallest se initialize kr denge
while(num>0){
    let digit = num%10;
    num=Math.floor(num/10);
    smallest_digit=Math.min(smallest_digit,digit);
}
console.log(smallest_digit);



// in case hmare paas koi number negative me aa jae to vaha hum num=Math.abs(num) ka use kr lenge ye negative number ko absolute value me change kr dega mtlb positive kr dega