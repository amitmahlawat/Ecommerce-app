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
        SetItems([...items,item])
    }else{
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 2000);
    }
    
    
    
}

const RemoveItemHandler=(item)=>{
    const temp=[...items]
    if(item){
        item.quantity=item.quantity-1
    }
    SetItems(temp)
}

const cartContext={
    Items:items,
    addItem:AddItemHandler,
    RemoveItem:RemoveItemHandler,
    
}
    return (<>
        <CartContext.Provider value={cartContext}>
            {props.children}
            
        </CartContext.Provider>
            {alert && <Alert  variant='danger'>
            Item is already in Cart!
          </Alert>}</>

    )
}

export default CartProvider;