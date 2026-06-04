// Array 

let arr = [1,2,3,4] // ordered list of items stored in a single variable
//  elements can be accessed through index 
console.log(arr) ;
console.log(arr[0]);
console.log(arr[1]);
console.log(arr.length);



// Creating arrays

let arr2=new Array(3);
console.log(arr2);   // 3 size ka array bnaega jisme values kch bhi nhi h vo hum add krenge 

arr2[0]="apple"
arr2[1]="banana"
arr2[2]="mango"

console.log(arr2);
console.log(typeof arr2);




let arr3 = new Array(1,2,3) // hmne yha pr values phle hi define krdi h jo hme add krni h hmare array me
console.log(arr3);



let arr4 = Array.from("hello");  // Array.from method string ko array me convert krta h   ; phle array define krenge fir jo string array me convert krna h vo likhenge
console.log(arr4);


console.log(Array.of(3)); // .of method arr bnata h jo hmne bracket me likha h uska


// Array.of(3) array bnaega 3 ka [3]

// new Array (3) bnaega jisme 3 elements ki space hogi vo hme daalne h elements pr arr empty hoga 












