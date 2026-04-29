

import product from "./data.js"
import {grid} from "../script.js"
export function showProduct() {
    product.map((items, index) => {
        let card = document.createElement("div")
        card.innerHTML = `<div
                    class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-surface-variant flex flex-col">
                    <div class="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
                        <img alt="Product"
                            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            data-alt="red high-performance running sneakers floating on a clean white studio background with sharp lighting"
                            src="${items.Image}" />
                        <button
                            class="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-all">
                            <span class="material-symbols-outlined text-xl" data-icon="favorite">favorite</span>
                        </button>
                        <div
                            class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${items.type ==="trending"? "bg-yellow-400": ""}">
                            ${items.type}</div>
                    </div>
                    <div class="p-5 flex flex-col flex-grow">
                        <div class="flex items-center gap-1 mb-2">
                            <span class="material-symbols-outlined text-orange-400 text-sm"
                                style="font-variation-settings: 'FILL' 1;">star</span>
                            <span class="text-sm font-bold text-on-surface">${items.rating}</span>
                            <span class="text-xs text-secondary">(124 reviews)</span>
                        </div>
                        <h3 class="text-lg font-bold text-on-surface mb-2 leading-tight font-title-sm"> ${items.title}</h3>
                        <div class="mt-auto flex items-center justify-between">
                            <span class="text-2xl font-black text-primary">${items.price}</span>
                            <button
                                class="w-10 h-10 bg-on-background text-white rounded-lg flex items-center justify-center hover:bg-primary active:scale-95 transition-all">
                                <span class=" addtoCart material-symbols-outlined" id="addtoCart" data-id="${items.id}" >add_shopping_cart</span>
                            </button>
                        </div>
                    </div>
                </div>`

        grid.append(card)
    })


}
