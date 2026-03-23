// function sum (){
//     return "hello"
// }


// // function not runing

// // function called it but result not used
// sum()
// // function called it and result store in result variable 
// let result = sum()

// //  now i m use the result for print clg 
// console.log(result)




// let obj = {
//     name : "sumit",
//     age: 24,
//     skills: ["html", "css", "js"],

//     add: {
//         village: "shahpur",
//         city: "noida",
//         pincode: 201304

//     },
//     isActive : true
// }


// // console.log(obj.name)
// // console.log(obj.age)
// // console.log(obj.add.village)
// console.log(obj)

// DOM 

//  selection of html 
// change in html
// change the css 
// handle event

// let main = document.querySelector("#main")
// let all = document.querySelectorAll("div")
// console.log(all)


let main = document.querySelector("main")
main.textContent =  "<h1> hello</h1>"
// main.innerHTML = "<h1> hello</h1>"
main.innerText = "hello"

let h1 = document.createElement("h1")
console.log(h1)
main.append(h1)
document.getElementById("main")
document.getElementsByTagName("div")
document.getElementsByClassName("class")

//  document.querySelector() for selecting elements by given name like tagname, id , classname
// doucument.querySelectorAll() for selection all element by given name like tagname, id , classname
// textContent , innerHTML, innerText  for change the html text 
