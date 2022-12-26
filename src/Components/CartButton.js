import React from "react";
import { Button, Container, Navbar, Stack, Box } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

const CartButton = (props) => {
  const Items = props.Items;
  let Quantity=0;
  Items.map(item => {
    Quantity = Quantity + item.quantity;
  });
  
  return (
    <div>
    <Button  onClick={props.onClick} variant=" btn-outline-info ">
      Cart
      
    </Button>
    <span style={{color:"yellowgreen"}}>{Quantity}</span>
    </div>
  );
};

export default CartButton;
