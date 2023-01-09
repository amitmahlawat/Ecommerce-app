import React,{useState,ReactDOM} from 'react';
import { Button, CloseButton, Container, Navbar, Nav,Row,Col,Card ,Stack} from 'react-bootstrap';
import './App.css';
import Items from './Components/Items';
import Cart from './Components/Cart';
import CartButton from './Components/CartButton';
import Modal from './Components/Modal';
import CartProvider from './Store/CartProvider'
import { Route } from 'react-router-dom';
import About from './Components/About';
import { NavLink } from 'react-router-dom';

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
    < CartProvider>
    <Navbar bg='dark' expand='sm'  variant='dark'>
      <Container>
        {/* <Nav className='justify-content-center'>
          <Nav.Item>
            <h3>Store</h3>
          </Nav.Item>
        </Nav> */}
    <Navbar.Brand href="/" >Generics</Navbar.Brand>
  
    <Nav className="d-flex justify-content-between" variant='pills' defaultActiveKey="/home"   >
      
      <Nav.Item >
        
        <NavLink activeClassName='' className='ms-5' to="/home" >Home</NavLink>
        
      </Nav.Item>
      
      <Nav.Item >
        <NavLink className='ms-5' to='/store' >Store</NavLink>
        
      </Nav.Item>
      <Nav.Item>
      
        <NavLink className='ms-5' to='/About' >About</NavLink>
        
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
    <Route path='/About'>
    <About/>
    </Route>
   <Route path='/store'>
    <Items Items={cartElements}/>
    </Route>
    
    <Modal open={isOpen} onClose={()=>SetIsOpen(false)}>
    <CloseButton variant='light' onClick={()=>SetIsOpen(false)}></CloseButton> 
    <Cart Items={cartElements}/>
    </Modal>
    </CartProvider>
    )}


    export default App;