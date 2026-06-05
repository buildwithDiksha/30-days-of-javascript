// map -Transformation
// Har element par operation karke naya array banata hai, Length same rehti hai

let numbers = [1,2,3,4,5]
let square = (numbers.map(n=>n*n));
console.log(square);


let num = [1,2,3,4];
let result =(num.map(n=>n**n));
console.log(result);






//filter - Ek condition lagata hai har element par,Jo elements condition pass karte hain, unko naya array me daal deta hai.

let nums= [1,2,3,4,5,6]
let even = nums.filter( n => n % 2 === 0);
console.log(even);


let arr = ["diksha" ,"cat","apple","rat" ,"noise"]
let longWords = arr.filter( arr => arr.length > 3)
console.log(longWords);


let Arr = [0,1,false,"",null,undefined]
let truthy = Arr.filter(Boolean);
console.log(truthy);




//reduce - Array ko single value me convert krta h 
// Ek accumulator (jisme result store hota hai) aur current value ke saath step‑by‑step chalta hai, Tumhe ek final output deta hai (sum, product, max, min, average,)

let Nums =[1,2,3,4]
let sum = Nums.reduce((acc,val)=> acc+val,0 )
console.log(sum);


let aar1= [1,2,3,4]
let product = aar1.reduce((acc,val) => acc*val,1)
console.log(product);


let arr2= [1,2,3,4]
let sum2 = arr2.reduce((acc,val) => acc+val,0)
let average = sum2/arr2.length
console.log(average);


let arr3=[1,2,3,4]
let max = arr3.reduce((acc,val) => acc>val?acc:val)
console.log(max);

let arr4 = [1,2,3,4]
let min = arr4.reduce((acc,val)=> acc<val?acc:val)
console.log(min);





