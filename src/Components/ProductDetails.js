import React from "react";
import { useParams } from "react-router-dom";
import { Card ,CardImg, Container,Image,Row,Col} from "react-bootstrap";


const ProductDetails=()=>{
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 200,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]

    const params=useParams()
console.log(params.ProductId)
    const    Item=cartElements.find(item=>item.title===params.ProductId)
        console.log(Item)
    return(
        <section>
            <h1 className="display-2" style={{textAlign:'center'}}>Product details</h1>
            <Container>
            <Row>
                <Col md={{ offset:1}}>
                <Image style={{width:'345px',height:'513px'}} src={Item.imageUrl}></Image>
                </Col>
            </Row>
            
            
            </Container>
        </section>
    )
};

export default ProductDetails;