// 1 - Add/Remove Elements

// push() - array k last me element add krta h 
let arr = [1,2,3];
arr.push(4);
console.log(arr);


// pop() - array k last se element remove ho jata h 
let fruits = ["apple" ,"banana","mango" ,"orange"];
fruits.pop();
console.log(fruits);


// shift() - array k starting se element remove krta h 
let days = ["monday","tuesday","wednesday","thursday"];
days.shift();
console.log(days);


// unshift() - array k starting me element add krta h aur new length return krta h jo element add krne k bad milegi
let choice = ["b" ,"c" ,"d","e"];
choice.unshift("a");
console.log(choice);









// 2 - Search Methods

// includes() - check krta h ki koi particular element array me present h ya nhi
let Array = [1,2,3,4];
console.log(Array.includes(5));


// indexOf() -  array ke start se search karta hai aur pehla matching index return karta hai
let color =["red","green","blue"]
console.log(color.indexOf("green"));


// lastIndexOf() -array ke end se search karta hai aur last matching index return karta hai
let game = ["football" ,"badminton" ,"hockey","chess" ,"hockey","carrom"];
console.log(game.lastIndexOf("hockey"));








//  3 - Extract/Copy

// slice()- array ka ek portion (sub-array) nikalne deta hai bina original array ko change kiye
let items = ["book","bat","box","pencil","eraser","doll"]
console.log(items.slice(0,4));
console.log(items);







// 4 - Insert/Delete
// splice()- original array ko modify karta hai (mutates)
// splice k 3 methods hote h remove,insert,replace
// array.splice(start,deletecount,item1,item2)

let arr2=[1,2,3,4];
arr2.splice(1,2); // ye remove ka example h jisme hum phle to jaha se element remove krne h vo index likhenge hmne likha 1 to huum 1 index se element remove krenge uske bad hum likhte h ki hme kitne elements remove krne h hmne likha h 2 to 1 index se shuru krke hme 2 elemnts remove krne h 
console.log(arr2); // ye array return krega jo remove krne k bad bacha h [1,4]



let arr3= [5,6,7,8,9];
arr3.splice(0,2,2,3);  // ye replace ka example h 
console.log(arr3);


let arr4 = [1,2,3,4]
arr4.splice(2,0,7,9); // ye insert ka example h isme kch remove nhi hoga kyuki hmne 0 elements remove kiye h
console.log(arr4);
