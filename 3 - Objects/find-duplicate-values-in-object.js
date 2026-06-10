let obj = {
    a: "name",
    b : 20,
    c : "age",
    d : 25,
    e : 20,
    f :  25
}
values = Object.values(obj);
console.log(values);

let duplicates = values.filter((val,i)=>  values.indexOf(val)!==i);

duplicates=[...new Set (duplicates)]

console.log(duplicates);
