let value = localStorage.getItem("cart-count") || 0
let cart_counter = document.querySelector("#cart-value")
cart_counter.textContent = value

let cart_grid = document.querySelector("#cart-grid")
let subtotal = document.querySelector("#subtotal")
let tax = document.querySelector("#tax")
let grandtotal = document.querySelector("#grandtotal")

// ✅ FIX: parse JSON
let cartItems = JSON.parse(localStorage.getItem("cart")) || []
let totalAmt = cartItems.reduce((acc, curr) => {
    return acc + (Number(curr.price)* curr.quantity )
}, 0.00)

subtotal.textContent = "$" + totalAmt;

let taxAmt = totalAmt / 10
tax.textContent = taxAmt

let grandTotalAmt = totalAmt + taxAmt
grandtotal.textContent = grandTotalAmt
function showcart() {

    cart_grid.innerHTML = "" // ✅ clear old data

    cartItems.map((item, index) => {
        let div = document.createElement("div")

        // ✅ FIX: use dynamic data instead of hardcoded
        div.innerHTML = `
          <div class="bg-white rounded-xl border border-black/10 p-5 flex gap-4 items-center">

  <!-- Image -->
  <div class="w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
    <img src="${item.Image}" class="w-full h-full object-cover" />
  </div>

  <!-- Content -->
  <div class="flex-1 min-w-0 flex flex-col gap-2.5">

    <div>
      <h3 class="text-[15px] font-medium text-gray-900 truncate">${item.title}</h3>
      <p class="text-[15px] text-gray-900 mt-1">$${item.price}</p>
    </div>

    <!-- Qty stepper -->
    <div class="flex items-center border border-black/20 rounded-lg w-fit overflow-hidden">
      <button class="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 text-base transition-colors">−</button>
      <span class="w-8 h-8 flex items-center justify-center text-sm font-medium border-x border-black/10">${item.quantity || 1}</span>
      <button class="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 text-base transition-colors">+</button>
    </div>

  </div>
</div>
        `

        cart_grid.prepend(div)
    })


}

showcart()

