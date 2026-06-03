let a=4;
let b=8;

while(a!==b){
    if(a>b){
        a=a-b;
    }
    else{
        b=b-a;
        }
    }
console.log("GCD is:" + a);


// Factors of 4 → 1, 2, 4
// Factors of 8 → 1, 2, 4, 8
// Common factors = 1, 2, 4
//  Largest common factor = 4  
// isliye GCD/HCF = 4