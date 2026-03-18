//  arrays method


//  index value has  started from 0 
//  length value has started from 1
// Push add on last index 


// let list = [1, 2]
// list.push(3)
// list.push(4)
// list.push(5)
// console.log(list)

// pop remove value from last index

// let list = [1, 3, 5, 7]
// list.pop()
// list.pop()

// console.log(list)

// shift remove value from zero index

// let list = [ 1, 2, 3, 4, 5]
// list.shift()
// console.log(list)

// unshift add value on zero index

// let list = [1, 2, 3, 4]
// list.unshift(2)
// console.log(list)

// let list = [1,3, 4, 6]

// let odd = list.slice(0, 2)
// console.log(odd)

// let arr = [1,2, [2, 4, 5], [2,7, [1, 3]]] 
// let Arr=arr.flat(3)
// console.log(Arr)
// // [1,2,2,4,5,2,7,1,3]

let arr = [1, 2, 3, 4, 5,6 ,7 ,8 ]

let double = arr.map((item)=> {
    return item *2
})

console.log(double)