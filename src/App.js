import React,{useState,ReactDOM} from 'react';
import { Button, CloseButton, Container, Navbar, Nav,Row,Col,Card ,Stack} from 'react-bootstrap';
import './App.css';
import Items from './Components/Items';
import Cart from './Components/Cart';
import CartButton from './Components/CartButton';
import Modal from './Components/Modal';

function App() {
  const[isOpen,SetIsOpen]=useState(false)
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

  return (
    <>
    <Navbar bg='dark' expand='sm'  variant='dark'>
      <Container>
        {/* <Nav className='justify-content-center'>
          <Nav.Item>
            <h3>Store</h3>
          </Nav.Item>
        </Nav> */}
    <Navbar.Brand href="/" >Generics</Navbar.Brand>
    
    <Nav className="justify-content-end" variant='tab' activeKey="/home" >
      <Nav.Item>
        <Nav.Link href="/home" >Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >Store</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >About</Nav.Link>
      </Nav.Item>
    </Nav>
    
   <CartButton Items={cartElements} onClick={()=>SetIsOpen(true)}/>
    
      </Container>
    </Navbar>
    {/* <Container className='container-fluid p-5 bg-secondary text-white' >
      <Row>
        <Col className='offset-5'> */}
        <h1 className='display-1 pb-5 pt-0' style={{backgroundColor:'grey', padding:"2rem",textAlign:"center",color:"white"}}>The Generics</h1>
        {/* </Col>
      </Row>
      
    </Container> */}
   
    <Items Items={cartElements}/>
    
    <Modal open={isOpen} onClose={()=>SetIsOpen(false)}>
    <CloseButton variant='light' onClick={()=>SetIsOpen(false)}></CloseButton> 
    <Cart Items={cartElements}/>
    </Modal>
    </>
    )}


    export default App;