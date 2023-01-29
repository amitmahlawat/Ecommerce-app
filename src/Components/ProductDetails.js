import React from "react";
import { useParams } from "react-router-dom";
import {  Container, Row, Col } from "react-bootstrap";
import ReactImageMagnify from "react-image-magnify";


const ProductDetails = () => {
  const cartElements = [
    {
      title: "Colors",

      price: 200,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
      Reviews: <p>Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn’t ended.

      You fight like a younger man, there’s nothing held back. It’s admirable, but mistaken. When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city.
      
      It wasn’t considered an honor, it was a public service.</p>
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

      quantity: 3,
      Reviews: <p>Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn’t ended.

      You fight like a younger man, there’s nothing held back. It’s admirable, but mistaken. When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city.
      
      It wasn’t considered an honor, it was a public service.</p>
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
      Reviews: <p>Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn’t ended.

      You fight like a younger man, there’s nothing held back. It’s admirable, but mistaken. When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city.
      
      It wasn’t considered an honor, it was a public service.</p>
    },
  ];

  const params = useParams();
  console.log(params.ProductId);
  const Item = cartElements.find((item) => item.title === params.ProductId);
  console.log(Item);
  return (
    <section>
      <h1 className="display-2" style={{ textAlign: "center" }}>
        Product details
      </h1>
      <Container style={{width:512, height:800}}>
        <Row>
            <Col md={6}>
            <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: Item.imageUrl,
              key:Item.title
            },
            largeImage: {
              src: Item.imageUrl,
              width: 600,
              height: 800,
            },
          }}
        />
            </Col>
            <Col >
            <p>{Item.Reviews}</p>
            </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default ProductDetails;
