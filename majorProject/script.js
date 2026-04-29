import product from "./assets/data.js"
import { showProduct } from "./assets/product.js"


export const grid = document.querySelector("#product-grid")
const cart_counter = document.querySelector("#cart-counter")
showProduct()
const addBtn = document.querySelector("#addtoCart")
cart_counter.textContent = localStorage.getItem("cart-count")|| 0
const cartData = JSON.parse(localStorage.getItem("cart")) || []


// add to cart 

function cart (){
    let value = Number(cart_counter.textContent)

    return function AddToCart (){
        value++
        localStorage.setItem("cart-count", value)
        cart_counter.textContent = value
    }
}
let add = cart()

grid.addEventListener("click", (e)=>{
   if(e.target.classList.contains("addtoCart")){
        let id = e.target.dataset.id
        const item = product.find((p)=> p.id == id)

        cartData.push(item)
        localStorage.setItem("cart", JSON.stringify(cartData))
        add()
        console.log(cartData)

   }

})



