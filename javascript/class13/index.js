// //  Closures


// function counter() {
//     let value = 0
//     console.log(value)
    
//     function plus() {
//         return value++
//     }
//     function minus() {
//         return value --
//     }
//     return {plus, minus}
// }

// let {plus , minus} = counter(0)

// console.log(plus())
// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());
// console.log(plus());

// console.log(minus());
// console.log(minus());

// console.log(counter())


let obj = {
    name : "hello",
    age: 23,
    hobbie: ["game", "learning", "playing"],
    locker: {
            obj2: {
                name: "rahul"
            }
    }
}
// console.log(typeof obj)
// console.log(obj.name)
// console.log(obj.age)

// console.log(obj.locker.obj2.name)

console.log(obj["locker"]["obj2"]["name"])


