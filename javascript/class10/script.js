//  function 


// declearation 
// function hello() {

// }
// function expression  any
// let sum = function (a, b) {
//     console.log(a + b)
// }
// anyoumuse function 
// let s = function (a, b) {
//     console.log(a + b)
// }
//  fat arrow function 
// let multi = (a, b) => {
//     console.log(a*b)
// }
// multi(2,2)

//  HOF high order function


// function greet(name) {
//   return "Hello " + name;
// }

// function processUserInput(greet) {
//   const name = "Sumit";
//   return greet(name);
// }
// console.log(greet("abhay"))
// console.log(processUserInput(greet));



// IIFE imedeated invoke function expression

(function(){
    console.log("hello")
})()



// function add (a){
//         return function b(b){
//             return a + b
//         }
// }

// let b = add(5)
// console.log(b(6))
// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUser(callback) {
//   const name = "Sumit";
//     callback(name)
// }

// processUser(greet);


// Ek function processNumber banao jo ek number aur ek callback le
// 👉 Callback decide kare: number even hai ya odd


//  function processNumber(num , cb ){ // cb = isEven
//     let ans = cb(num) // isEven(7)
//     return ans

//  }

//  function isEven(num){
//     if (num%2 ===0){
//         return true
//     }
//     else{
//         return false
//     }
//  }
 
//  console.log(processNumber(7, isEven))

// Ek function calculate(a, b, operation) banao
// 👉 operation ek callback ho jo addition, subtraction ya multiplication kare

// function calculate(a, b, operation){
//     let ans = operation(a, b)
//     return ans
// }

// function sum(a, b){
//     return a + b
// }

// Ek array [10, 20, 30] lo
// 👉 forEach ka use karke har element ko callback se print karo with index

// let arr = [10, 20,30]

// function print(item){
//     console.log(item)
// }
// arr.forEach((item, index)=>{
//     console.log(item, index)
// })