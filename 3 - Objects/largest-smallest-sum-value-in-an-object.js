let obj = {
    a : "diksha",
    b : 20,
    c : "apple",
    d : 5,
    e : 40
}

values = Object.values(obj);   // phle value nikali fir us value me se find krenge number konse h 

let nums = values.filter(val => typeof val=== "number");       // ab yaha humne condition lgadi ki hmari value ka type number hona chahiye 

let largest = Math.max(...nums);
let smallest = Math.min(...nums);
let sum = nums.reduce((acc,val)=> acc + val , 0)

console.log(values);
console.log(nums);
console.log("Largest value : ",largest);
console.log("Smallest value : ",smallest);
console.log("Sum : ",sum);



// ... spread operator ka kam
// let nums = [10, 25, 5];
// Math.max(...nums); // Math.max(10, 25, 5)
// Math.min(...nums); // Math.min(10, 25, 5)