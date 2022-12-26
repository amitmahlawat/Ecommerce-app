import React from "react";
import { Container,Row,Col,Card, Table, Button, CardImg } from "react-bootstrap";

const Items=(props)=>{
    const Items=props.Items

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
                            <Button variant="success">Add to Cart</Button>
                        </Card.Body>
                        
                    </Card>
                    </Col>)}
                
            </Row>
        </Container>
        </>
    )
};

export default Items;