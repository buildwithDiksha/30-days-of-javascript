// javaScript me object ko array banane ke liye hum Object.keys(), Object.values(), aur Object.entries() use karte hain.
// Matlab tum object ke parts ko alag‑alag array me convert kar sakti ho. 


let obj = {
    a : "name",
    b : 20,
    c : "age",
    d : 30
}

let result = Object.values(obj);
console.log(result);
console.log(Object.entries(obj));

