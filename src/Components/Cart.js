import React,{useContext} from "react";
import CartContext from "../Store/CartContext";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  CardImg,
  CloseButton,
} from "react-bootstrap";
import Modal from "./Modal";



const Cart = (props) => {
const CartCntxt=useContext(CartContext)
    
    let totalAmount=0
  const Items = props.Items;
  CartCntxt.Items.map(item=>{
    totalAmount=totalAmount+(item.price*item.quantity)
  })

  const RemoveItemHandler=async(item)=>{
    CartCntxt.RemoveItem(item)
    console.log(item,'msg')
    const Email= localStorage.getItem("Email");
       const plainEmail=Email.replace("@",'').replace(".",'')
 const response=await fetch(`https://react-http-c38c6-default-rtdb.firebaseio.com/cartItems/${plainEmail}/${item.key}.json`,{
      method:"DELETE",
      body:null,
      headers:{
        'Content-type':'application/json'
      }
    })
    const data=await response.json()
    console.log(data)
  }

  console.log(CartCntxt.Items)
  return (
  <>
  
    <Table className="table">
        
      <thead >
        <tr>
          
          <th>ITEM</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {CartCntxt.Items.map(item=>
         item.quantity>0 &&  <tr>
                <td><Row><Col xs={3}><img className="img-fluid" src={item.imageUrl} ></img></Col>{item.title}</Row></td>
                
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td><Button onClick={()=>RemoveItemHandler(item)} variant="danger">Remove</Button></td>
            </tr>
            )}
        
        
      </tbody>
    </Table>
    <h3>Total ${totalAmount}</h3>
    </>
   
  );
};

export default Cart;
