let value = localStorage.getItem("cart-count") || 0
let cart_counter = document.querySelector("#cart-value")
cart_counter.textContent = value

let cart_grid = document.querySelector("#cart-grid")

// ✅ FIX: parse JSON
let cartItems = JSON.parse(localStorage.getItem("cart")) || []

function showcart() {

    cart_grid.innerHTML = "" // ✅ clear old data

    cartItems.map((item, index) => {
        let div = document.createElement("div")

        // ✅ FIX: use dynamic data instead of hardcoded
        div.innerHTML = `
           <div class="bg-surface-container-lowest rounded-xl p-6 shadow-sm border flex gap-6 items-center">
               
               <div class="w-32 h-40 rounded-lg overflow-hidden">
                   <img src="${item.Image}" class="w-full h-full object-cover" />
               </div>

               <div class="flex-1">
                   <h3>${item.title}</h3>
                   <span>${item.price}</span>

                   <div>
                       <span>${item.quantity || 1}</span>
                   </div>
               </div>
           </div>
        `

        cart_grid.prepend(div)
    })
}

showcart()