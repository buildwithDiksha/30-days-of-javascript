// looping through objects 

let student = {
    name : "anshul",
    age : 22
}
for(let key in student){           // key 
   console.log(key); 
}
for(let key in student){
    console.log(student[key]);         // value
}



// object.keys  - returns keys 
let person = {
    name : "rahul",
    age : 25
}
console.log(Object.keys(person));

// object.values - returns values
console.log(Object.values(person));

// object.entries - returns all the entries
console.log(Object.entries(person));


  

// object destructuring  -Object destructuring ek shortcut hai jo object ke properties ko directly variables me assign kar deta hai.

let car = {
    name : "kia",
    price : 800000
}
//destructuring 
let {name,price} = car;

console.log(name);
console.log(price);




let Student = {
    name : "dipesh",   // copy object
    age : 19
}
let copyStudent = {...Student };
console.log(copyStudent);



let obj1 = {
    name : " rahul",
    age : 25
};
let obj2 = {
    name : "rohit",
    age : 28
};
let result = {        // merge two or more objects
    obj1,obj2
}
console.log(result);



let user = {
    name : "diksha"
};
Object.freeze(user);
// Object.freeze() ka use tab hota hai jab aap chahte ho ki ek object constant ban jaye aur usme koi modification na ho
// ye object ko freeze kr dega ab tum usme koi bhi changes nhi kr skte

user.name = "riya";
console.log(user.name);




let User = {
    name : "riya"
};
Object.seal(User);   
//jo properties already present h sirf unhe hi change krta h kch add/delete nhi krne deta

User.name = "diksha";
console.log(User);


