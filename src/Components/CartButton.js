import React,{useContext} from "react";
import { Button, Container, Navbar, Stack, Box, Badge } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import CartContext from "../Store/CartContext";
const CartButton = (props) => {
    const CartCntxt=useContext(CartContext)
  const Items = props.Items;
  let Quantity=0;
  CartCntxt.Items.map(item => {
    Quantity = Quantity + item.quantity;
  });
  
  return (
    <div>
    <Button className="position-relative" onClick={props.onClick} variant=" btn-outline-info ">
      Cart
      <Badge className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{color:"yellowgreen"}}>{Quantity}</Badge>
    </Button>
    
    </div>
  );
};

export default CartButton;
