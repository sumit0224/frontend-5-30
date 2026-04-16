// const person1 = {
  
//   age: 50,
//   eyeColor: "blue"
// };

// const obj = {
//     age: 50,
//   eyeColor: "blue"
// }

// // Create Source Object
// const person2 = {firstName: "Anne",lastName: "Smith",};

// // Assign Source to Target
// Object.assign(person2, obj)
// console.log(person2)

// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };

// let text = Object.entries(person);
// console.log(text)

// const fruits = {Bananas:300, Oranges:200, Apples:500};
// const more = {
//     grappes: 400,
//     mangos: 200
// }


// Object.assign(fruits, more)

// let arr = Object.entries(fruits)


// console.log(arr)

// let text = "";
// for (let [a, b] of Object.entries(fruits)) {
//  console.log( a + "  " + b)
// }

// console.log(text)

// const fruits = [

//   ["apples", 300],
//   ["pears", 900],
//   ["bananas", 500]
// ];

// const myObj = Object.fromEntries(fruits);
// console.log(myObj)


// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   age : 50,
//   eyeColor : "blue"
// };

// let text = Object.values(person);

// console.log(text)


// const fruits = [
//   {name:"apples", quantity:300},
//   {name:"bananas", quantity:500},
//   {name:"oranges", quantity:200},
//   {name:"kiwi", quantity:150}
// ];

// const obj = Object.groupBy(fruits , ({quantity})=> quantity>210 ? "ok": "not")
// console.log(obj.ok)


// const obj = {
//     name : "sumit",
//     age: 23,
//     phone: 987899,
//     set size(ph){
        
//         this.phone = ph   
        
//     }
// }
// obj.size = 1111
// console.log(obj.phone);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"

// };

// // Freeze Object
// Object.seal(person)

// person.age = 21


// console.log(person

// )



 function Car (tyre, color, model, price, comp){
    this.tyre = tyre 
    this.model = model
    this.color = color
    this.price = price, 
    this.comp = comp
 }

Car.prototype.name = "tata"
const safari = new Car(4, "red", 2018, "50lac", "safari");



console.log(safari)
  