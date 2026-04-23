// let p1 = new Promise((res, rej)=>{
//     let state = false
//     if (state){
//         return res("fullfill")
//     }
//     else{
//         return rej("reject")
//     }
// })

// p1.then(res=> console.log(res, "then chala")).catch(err=> console.log(err, "catch chal")).finally(()=>console.log("final"))

// function bankAccount() {
//   let balance = 0;

//   return {
//     deposit: function(amount) {
//       balance += amount;
//       console.log("Balance:", balance);
//     },
//     withdraw: function(amount) {
//       balance -= amount;
//       console.log("Balance:", balance);
//     }
//   };
// }

// const account = bankAccount();

// account.deposit(1000); // Balance: 1000
// account.withdraw(200); // Balance: 800


// let obj = {
//     name: "sumit",
//     surname: "gautam"
   
// }

// function fullname(){
//     return this.name + " " + this.surname 
// }   

// let obj2 = {
//     last : "hellooooo"
// }


// let res = fullname.bind(obj, "hhh")

// console.log(res)


// function sum (a, b){
//     return a + b
// }

// let sec = sum.bind(null,  8)
// console.log(sec(0))

// let obj = {
//     name : "faraz"
// }

// function sentence(age, city){
//     return `${this.name} and his age is ${age} and lived in ${city}`
// }

// let data = sentence.apply(obj, [23, "noida"])
// console.log(data)


const person = {
  name: "Sumit"
};

function greet( age, city) {
  console.log(`Hello ${this.name}, age ${age}, from ${city}`);
}

greet.call(person, 22, "Delhi");

