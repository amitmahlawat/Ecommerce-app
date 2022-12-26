import React from "react";
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
    let totalAmount=0
  const Items = props.Items;
  Items.map(item=>{
    totalAmount=totalAmount+item.price
  })
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
        {Items.map(item=>
            <tr>
                <td><Row><Col xs={3}><img className="img-fluid" src={item.imageUrl} ></img></Col>{item.title}</Row></td>
                
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td><Button variant="danger">Remove</Button></td>
            </tr>
            )}
        
        
      </tbody>
    </Table>
    <h3>Total ${totalAmount}</h3>
    </>
   
  );
};

export default Cart;
