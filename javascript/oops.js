// bind , call , apply 




//  agr ap chahte ho ek function ko apne object ke jodna 
// tab ap bind use krnege 


// let person = {
//     first : "rahul",
//     last: "kumar",
   

// }

// function fullname (){

//     return this.first + " " + this.last
// }


// let a = fullname.bind(obj2)

// console.log(a())


// let res = fullname.call(person)
// console.log(res)


// let arr = [30, 20, 70, 40]

// let a = Math.max.apply(null, arr)
// console.log(a)

// oops

// class Car {
//     constructor (brand, color){
//         this.brand = brand,
//         this.color = color
//     }
// }

// let audi = new Car("audi", "red")

// console.log(audi)


// class Car {

//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }


// let bmw = new Car("bmw", "1998")
// console.log(bmw.age())

// Inheritance
// Encapsulation
// Polymorphism
// Abstraction

// class Animal {
//   speak() {
//     console.log("Animal makes sound");
//   }
//   count(){
//     console.log("4 leg")
//   }
// }

// class Dog extends Animal {

//   bark() {

//     console.log("Dog barks");
//   }
// }

// const pitbull = new Dog();
// pitbull.count()
// pitbull.speak()


// class Bank {
//     #locker = 100000;
//     getWithdraw (x){
//         return this.#locker - x
//     }

// }

// let d = new Bank()
// console.log(d.getWithdraw(10000))



// class Person {
//     constructor(name){
//         this.name = name
//     }
//     intro(){
//         return `my name is ${this.name}`
//     }
// }

// class Student extends Person{
//         constructor(name, course){
//            super(name)
//             this.course = course
//         }
//         study(){
//             return `i study ${this.course}`
//         }

// }


// const s = new Student("Sumit", "MERN");

// console.log(s.intro())


// class Animal {
//     sound(){
//         console.log("animal sound")
//     }
// }
// class Cat extends Animal{
//     sound(){
//         console.log("cat meow")
//     }

// }

// class Dog extends Animal{
//     bark(){
//         console.log("dog bark")
//     }
// }
// let c = new Cat()
// c.sound()
// let d = new Dog()
// d.sound()
// d.bark()


// class Vehical {
//     constructor(brand){
//         this.brand = brand
//     }
// }

// class Car extends Vehical{
//     constructor (brand, model){
//         super(brand)
//         this.model = model
//     }
// }



// let a = new Car ("tata", 2002)
// let b = new Car (  2001)
// console.log(b)


// class User{
//     #pass 
//     constructor(pass){
//         this.#pass = pass
//     }
//     verifyPass(b){
//         return this.#pass === b
//     }

// }


// let a = new User("1234")

// console.log(a.verifyPass("1234"))




class Bank {
    #balance
    constructor(balance){
        this.#balance = balance
    }

    getBalance(){
        return this.#balance
    }
    withdraw(w){
        let a = this.#balance - w
        return a
    }
    deposit(d){
         this.#balance += d
         return this.#balance

    }
}

let d = new Bank(2000)


// console.log(d.getBalance())

console.log(d.deposit(3000))

console.log(d.withdraw(5000))

