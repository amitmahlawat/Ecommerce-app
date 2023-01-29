import React,{useState,ReactDOM, useContext} from 'react';
import { Button, CloseButton, Container, Navbar, Nav,Row,Col,Card ,Stack} from 'react-bootstrap';
import './App.css';
import Items from './Components/Items';
import Cart from './Components/Cart';
import CartButton from './Components/CartButton';
import Modal from './Components/Modal';
import CartProvider from './Store/CartProvider'
import { Route,Switch,Redirect } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import { NavLink } from 'react-router-dom';
import Contact from './Components/Contact';
import ProductDetails from './Components/ProductDetails';
import Login from './Components/Login';
import AuthContext from './Components/auth-context';
import { AuthContextProvider } from './Components/auth-context';


function App() {

  const authCtx=useContext(AuthContext);
  console.log(authCtx)
  
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
const logoutHandler=()=>{
    authCtx.logout()
    console.log(authCtx.isLoggedIn)
}

  return (
    // <AuthContextProvider>
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
        
        <NavLink className='ms-5 active' to="/Home" >Home</NavLink>
        
      </Nav.Item>
      
      <Nav.Item >
        <NavLink className='ms-5' to='/store' >Store</NavLink>
        
      </Nav.Item>
      <Nav.Item>
      
        <NavLink className='ms-5' to='/About' >About</NavLink>
        
      </Nav.Item>
      <Nav.Item>
      
        <NavLink className='ms-5' to='/Contact' >Contact Us</NavLink>
        
      </Nav.Item>
      <Nav.Item>
      
       {!authCtx.isLoggedIn && <NavLink className='ms-5' to='/Login' >Login</NavLink>}
        
      </Nav.Item>
       
      <Nav.Item>
      {authCtx.isLoggedIn && <Button variant='dark' className='ms-5' onClick={logoutHandler} >Logout</Button>}
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
    <Switch>
      <Route path='/' exact>
      <Redirect to='/Home'/>
      </Route>
    <Route path='/About'>
    <About/>
    </Route>
    <Route path='/Home'>
    <Home/>
    </Route>
   {authCtx.isLoggedIn&&<Route path='/store' exact>
    <Items Items={cartElements}/>
    </Route>}
    <Route path='/Contact'> 
      <Contact/>
    </Route>
    <Route path='/store/:ProductId'>
      <ProductDetails/>
    </Route>
    <Route path='/Login'>
    <Login/>
    </Route>
    <Route path="*">
    <Redirect to='/'/>
    </Route>
    </Switch>
    
    <Modal open={isOpen} onClose={()=>SetIsOpen(false)}>
    <CloseButton variant='light' onClick={()=>SetIsOpen(false)}></CloseButton> 
    <Cart Items={cartElements}/>
    </Modal>
    {/* <Container className='justify-content-center'>
      <Row>
        <Col md={{ span: 6, offset: 4}}> */}
        <footer className='display-2 pb-2 pt-3 mt-3 mb-0' style={{backgroundColor:'skyblue', padding:"2rem",textAlign:"",color:"white",fontFamily:'fantasy'}}>The Generics</footer>
        
        {/* </Col>
      </Row>
    </Container> */}
    
    </CartProvider>
    // </AuthContextProvider>
    )}


    export default App;