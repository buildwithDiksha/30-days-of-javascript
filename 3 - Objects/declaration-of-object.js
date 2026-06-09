let student ={
    name : "Diksha",
    age : 20 ,
    course : "Btech Cse",
    subject : "javascript"
}
console.log(student);
console.log(student["name"]);
console.log(student.age);



let person = new Object();
person.name = "manisha";
person.age = 24;
 console.log(person);


//  When to Use Bracket Notation?
//  When key contains spaces
 
//  let student = {
//     "full name": "Diksha"
// };
// console.log(student["full name"]);



let car = {}
car.brand = "kia";
car.price = 800000;        // adding properties

console.log(car);




let book = {
    name : "wings of fire",
    price : 300 ,
    edition : 3 ,
    writer : "Tui Tamara Sutherland"
}
// console.log(book);

book.edition = 4 ;       // update 
// console.log(book);

delete book.price ;        // delete 
console.log(book);


//  checking property exists - using in operator
console.log("name" in book);
console.log("price" in car);
 
// using hasOwnProperty()
console.log(student.hasOwnProperty("name"));
 


// Objects can store:
// Strings
// Numbers
// Boolean
// Arrays
// Functions
// Other Objects

let user = {
    name : "diksha",
    age : 20,
    isStudent : "true",
    favGames : ["football" ,"cricket" ,"kho-kho"] 
}
console.log(user);


// object inside object  - nested objects

let movie = {
    name: "hello baby",
    duration :"2 hours 30 minutes" ,
    location :{
        state : "maharashtra",
        city:  "mumbai"
    }
}

console.log(movie);
console.log(movie["location"]["city"]);
console.log(movie.location.state);




// Object with array
let candidate ={
    name: "diksha",
    skills : ["HTML","CSS" ,"JS"],
    age:20
}
console.log(candidate);
console.log(candidate.skills);
console.log(candidate.skills[2])



// Array of objects (imp)⭐
let students =[ {
    name:"diksha",
    age:20
},
{
    name: "manisha",
    age : 24
}   
]
console.log(students[0].name);
console.log(students[1].name);


let people = [
    {name:"diksha" , age: 20},
    {name:"nisha" , age:23}
]
console.log(people[0].name);


