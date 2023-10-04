// let p = {
//     firstname: "john",
//     lastname : "doe",
//     age:30
// };

// console.log(p.firstname)
// console.log(p.age)

// let person = {
//     firstname: "john",
//     lastname : "doe",
//     age:30
// };

// Modifying object properties
// p.firstname="alex"
// console.log(p)

// Adding new  properties
// p.email="alex@gmail.com"
// console.log(p)

// Delete
// delete p.firstname
// console.log(p)

// Getting object keys

// let keys = Object.keys(person)
// console.log(keys)

// Getting object values

// let keys = Object.values(person)
// console.log(keys)

// Entire Entries
// let keys = Object.entries(person)
// console.log(keys)

// Nested Object

let person = {
    firstname: "john",
    lastname : "doe",
    age:30,
    address:{
        street:"Wonderland",
        city:"Bangalore"
    }
};
// console.log(person.address.city)

// Object Destructuring
let {firstname,address}=person;
console.log(firstname)
console.log(address.city)