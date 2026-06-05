//  some() - Check karta h ki array me koi ek element condition pass karta hai
// agar kam se kam ek element true ho gaya → result true.
// agar ek bhi match na hua → result false.

let arr = [1,3,2,5]
let hasEven = arr.some(n => n%2==0)
console.log(hasEven);

let hasGreater10 = arr.some (n => n>10)
console.log(hasGreater10);





//  every() -Check karta hai ki array ke saare elements condition pass karte hain ya nahi.
// agar sabhi true → result true.
// Agar ek bhi fail hua → result false.

let Arr = [ 2,3,4,5]
allEven = Arr.every(n => n%2===0);
console.log(allEven);

let allGreater1 = Arr.every(n => n>1)
console.log(allGreater1);







// Find Methods 

// find() -Array me pehla element jo condition satisfy kare, usko return karta hai,
// Agar koi match na mile → undefined return hota hai.

let num = [10,20,30]
let dividedBy10 = num.find(n => n%10===0);
console.log(dividedBy10);


//  findIndex() - Array me pehle element ka index return karta hai jo condition satisfy kare

let Nums = [2,3,5,6]
let firstBig = Nums.findIndex(n => n%2!==0)
console.log(firstBig);




// merge arrays

// concat() - merge arrays

let a= [1,2]
let b = [3,4]

console.log(a.concat(b));
