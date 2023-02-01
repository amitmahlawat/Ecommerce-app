import React from "react";


const CartContext=React.createContext({
    Items:[],
    addItem:(item)=>{},
    RemoveItem:(id)=>{},
    clearCart:()=>{}
    
}
)

export default CartContext;