// hoisting
// Execution Context 
// function 
// var 
// let a = 10



// // var = hoisting;

// console.log(name);

// let a = 20 ;

// let b = 30 ;
// sum(a, b)

// var name = "sumit";

// function sum(a, b){
//     return a + b
// }


// const arr = [10, 20, 30];

// // // const [a, b] = arr
// // const [, a, b] = arr
// // console.log(a)

// // co
// let a = arr[0] 
// let b = arr[arr.length - 1]

// let a = 10 ;
// let b = 20 ;

// [a, b] = [b, a]
// console.log(a)


// const arr = [1, [2, 3], 4];
// let [a, b] = arr[1]

// // console.log(b)

// let a = [1, 2, 3, 4, 5, 6, 7, 8,9]

// // let [ c , ...d] = a
// // console.log(d)

// let b = [...a]

// console.log(b)

// function sum(...a){
//     return a.reduce((a, c)=> a + c , 0)
// }

// console.log(ans);


// var  ans = sum(1,2,3,3,3,3,2,2,2,2,1,1,1,1)

// shallow copy


// let a = [1, 2, 3]

// let b = JSON.parse(JSON.stringify(a))



// a.push(87)

// console.log(b)


// let obj = {
   
//     name : "sumit",
//     age: 23,
//     address: {
//         village : "shahpur",
//         city: "Noida"
//     },
//     isVerify : true,
//     hobbies : ["games", "reading", "learning"]

// }


let copy = JSON.parse(JSON.stringify(obj))


copy.address.city = "delhi"

console.log(copy)

console.log(obj)

