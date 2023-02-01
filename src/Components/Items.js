import React,{useContext} from "react";
import { Container,Row,Col,Card, Table, Button, CardImg} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../Store/CartContext";
import ProductDetails from "./ProductDetails";
import { Route } from "react-router-dom";
const Items=(props)=>{
    const Items=props.Items
    const CartCntxt=useContext(CartContext)
    
    const addtoCarthandler=(item)=>{
        
        CartCntxt.addItem(item)
        const Email=localStorage.getItem('Email')
        const plainEmail=Email.replace('@','').replace('.','')
        fetch(`https://react-http-c38c6-default-rtdb.firebaseio.com/cartItems/${plainEmail}.json`,
        {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'COntent-Type':'application/json'
            }

        }).then(res=>{
            res.json().then(data=>{
                console.log(data)
            })
        })
        
        

    }
    console.log(CartCntxt.Items)

    return(
        <>
        
        <Container className="mt-3">
        
            <Row>
            
                {Items.map(item=>
                
                    <Col xs={3} >
                       
                    <Card  >
                    
                    <Link to={`/store/${item.title}`}><CardImg src={item.imageUrl}></CardImg></Link>
                        <Card.Body key={item.title}>
                            
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