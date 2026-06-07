let arr = [10,20,30,40]
let max = arr[0];
let min = arr[0] ;
for(let i = 0;i<arr.length;i++){
    max = Math.max(max,arr[i]);
    min=Math.min(min,arr[i]);
}
console.log("Max = " ,max);
console.log("Min = " ,min);
