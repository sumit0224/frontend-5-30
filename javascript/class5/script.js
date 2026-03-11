
// function sqr(num){

//     return num**2 
// }
// let ans = sqr(8)

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true
//     }
//     return false
// }

// let ans = isEven(7)
// console.log(ans)

// function factorial(n){
//     let result = 1
//     for(let i = 1 ; i<=n; i++){
//         result = result*i
//     }
//     return result
// }

// let ans = factorial(8)
// console.log(ans)

// function isPrime(n) {


//     if (n === 2) {
//         return true
//     } else {

//         for (let i = 3; i < n; i++) {
//             if (n % i === 0) {
//                 return false
//             }

//         }
//     }
//     return true

// }
// let ans = isPrime(7)
// console.log(ans)

// function power(base, expo){
//     return base**expo
// }

// let ans = power(4,4)
// console.log(ans)

// function sumOfDigit(num) {
//     let sum = 0

//     while (num > 0) {
//         let rem = num % 10 // 4 , 3 , 2 , 1
//         sum = sum + rem // 0 + 4 + 3

//         num = Math.floor(num / 10) // 1234/ 10 =  123, 12 1 0

//     }
//     return sum

// }
// let ans = sumOfDigit(1234)
// console.log(ans)


// function rev(num) {
//     let rev = 0
//     while (num > 0) {
//         let rem = num % 10 // 4 , 3, 2
//         rev = rev * 10 + rem // rev = 0 * 10 + 4 = 4, rev = 4 * 10 + 3 = 43 rev = 43*10 + 2 = 432
//         num = Math.floor(num / 10) // 234/10 = 23.4 = 23 = 2 0
//     }
//     return rev
// }

// let ans = rev(234) // 432
// console.log(ans)

// function countDigits(num){
//     let count = 0
//         while (num>0){
//             num = Math.floor(num/10)
//             count++

//         }
//         return count

// }
// let ans = countDigits(9310513770)
// console.log(ans)


function gcd(a, b) {
    let min = Math.min(a, b)
    let arrA = []

    for (let i = 1; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
            arrA.push(i)
        }
    }
    return arrA[arrA.length - 1]

}

let ans = gcd(17, 18)

console.log(ans)