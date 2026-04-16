


// const obj = {
//     text: "3jkL",

//     upper: function () {
//         let result = "";

//         for (let i = 0; i < this.text.length; i++) {
//             let code = this.text.charCodeAt(i);

           
//             if (code >= 97 && code <= 122) {
//                 result += String.fromCharCode(code - 32);
//             } else {
//                 result += this.text[i];
//             }
//         }

//         return result;
//     },
//     lower: function () {
//         let result = "";

//         for (let i = 0; i < this.text.length; i++) {
//             let code = this.text.charCodeAt(i);

            
//             if (code >= 65 && code <= 96) {
//                 result += String.fromCharCode(code + 32);
//             } else {
//                 result += this.text[i];
//             }
//         }

//         return result;
//     }

// }
// obj.text = "hello"
// console.log(obj.lower())


const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(person);

// Stringify the Array
let text = myArray.toString();
console.log(myArray)

