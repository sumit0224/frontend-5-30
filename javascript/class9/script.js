// forEach, map, filter, reduce, 

// foreach 
// let arr= ["Alice", "Bob", "Charlie"]

// arr.forEach((item)=>{
//     console.log(`hello, ${item}!`)
// })

// let num = [2, 3, 1, 4, 5, 6]

// let sum = 0;
// num.forEach((item)=>{
//     sum+=item
// })


// console.log(sum)

// let arr = ["apple", "banana", "cherry"]
// let newArr = []

// arr.forEach((item)=>{
//     newArr.push(item.toUpperCase())
// })
// console.log(newArr)

// let arr = ["cat", "dog", "rabbit"]
// let nweArr = []

// arr.forEach((item)=>{
//         nweArr.push("s"+item)

// })
// console.log(nweArr)

// let arr = ["red", "green", "blue"]
// let str = ''

// arr.forEach((item)=>{
//         str+=item+", "
// })
// console.log(str)
// let arr = [1, 2, 3, 4, 5,6 ,7 ,8 ]

// let double = arr.map((item)=> {
//     return item *2
// })

// console.log(double)


// let arr = ["apple", "banana", "cherry"]
// let a = arr.map((item)=>{
//     return item.length
// })
// console.log()

// let arr = [1, 3, 4,5, 2,6, 8, 6 ,9, ]

// let even = arr.filter((item)=>{
//             return   item % 2 === 0
// })

// console.log(even)

// reduce

// let arr = [1, 2, 3,4 ,5]
// let sum = arr.reduce((acc, curr)=>{
//             return acc* curr
// }, 1)

// console.log(sum)

// let num = [10, 20, 30, 40]

// let a = num.map((item, index)=>{
//     return item + index
// })
// console.log(a)


// HOF , callback fq, object, object method, opps, promise, trycatch, asyn await, localstoarge, fetch, dom


// ['hi','hello','yes']
// let arr = ['hi','hello','yes']

// let count = arr.reduce((acc, curr)=>{
    
//     return acc + curr.length //7 + yes 3 = 10
// }, 0)
// console.log(count)

// Flatten a 2D array [[1,2],[3,4],[5,6]] into a single array.

// let falt = [[1,2],[3,4],[5,6]].reduce((acc, curr)=>{
//     return acc.concat(curr)
// }, [])
// console.log(falt)

