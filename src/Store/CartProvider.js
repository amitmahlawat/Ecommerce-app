import React,{useState} from "react";
import CartContext from "../Store/CartContext";
import { Alert } from "react-bootstrap";

const CartProvider=(props)=>{
const[alert,setAlert]=useState(false)
const[items,SetItems]=useState([])

const AddItemHandler=(item)=>{
    let existingItem=items.findIndex((data)=>{
       return data.title===item.title;
    })

    if(existingItem===-1){
        SetItems(prev => [...prev, item])
    }else{
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 2000);
    }
    
    
    
}

const RemoveItemHandler=(item)=>{
    const temp=[...items]
    if(item.quantity>1){
        item.quantity=item.quantity-1
    }else{temp.pop(item)}
    console.log(temp)
    SetItems(temp)
}

const clearCartHandler=()=>{
    SetItems([])
    
}   

const cartContext={
    Items:items,
    addItem:AddItemHandler,
    RemoveItem:RemoveItemHandler,
    clearCart:clearCartHandler
    
}
    return (<>
    {alert && <Alert  variant='danger'>
            Item is already in Cart!
          </Alert>}
        <CartContext.Provider value={cartContext}>
            {props.children}
            
        </CartContext.Provider>
            </>

    )
}

export default CartProvider;