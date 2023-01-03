import React,{useContext} from "react";
import { Container,Row,Col,Card, Table, Button, CardImg } from "react-bootstrap";
import CartContext from "../Store/CartContext";
const Items=(props)=>{
    const Items=props.Items
    const CartCntxt=useContext(CartContext)
    
    const addtoCarthandler=(item)=>{
        
        CartCntxt.addItem(item)
        // console.log(CartCntxt.Items)
        
        

    }
    console.log(CartCntxt.Items)

    return(
        <>
        
        <Container className="mt-3">
        
            <Row>
            
                {Items.map(item=>
                    <Col xs={3} >
                       
                    <Card >
                    
                        <CardImg src={item.imageUrl}></CardImg>
                        <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.price}</Card.Text>
                            <Button onClick={()=>addtoCarthandler(item)} variant="success">Add to Cart</Button>
                        </Card.Body>
                        
                    </Card>
                  
                    </Col>)}
                
            </Row>
        </Container>
        </>
    )
};

export default Items;