let user = {
    name : "aman",
    age : 26 ,
    isAdult : true,
    skills:["html","CSS","js"]
}
console.log(user);

user.course = "MBA";                   // adding new property
console.log("name" in user);           // property existence
delete user.isAdult;                 // deleting a property;
user.age = 27;                       // updating existing property

console.log(user);



