import React, { useRef, useState } from "react";
import { Card, Container, Form, FormControl, Button } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "./auth-context";
import { useHistory } from "react-router-dom";
import CartContext from "../Store/CartContext";

const Login = () => {
    
  const CartCtx = useContext(CartContext);
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  // console.log(authCtx.isLoggedIn)
  const EmailRef = useRef();
  const passwordRef = useRef();

  const SubmitHandler =async (e) => {
    // console.log('clicked')
    e.preventDefault();
    const enteredEmail = EmailRef.current.value;
    const enteredPassword = passwordRef.current.value;

 const res=await   fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClZNmJUMIdt_s-o4AAFKLhV7Ua1ptqeDw",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
     const data=await   res.json()
     console.log(data)
     authCtx.login(data.idToken);
    localStorage.setItem("Email", data.email);
    const Email = localStorage.getItem("Email");
    const plainEmail = Email.replace("@", "").replace(".", "");
    console.log(plainEmail);
    history.replace("/");
    const response=await fetch(`https://react-http-c38c6-default-rtdb.firebaseio.com/cartItems/${plainEmail}.json`
          )
          const data2=await response.json()
                console.log(data2,'message')
                const items=[]
              for (const key in data2) {
                // localStorage.setItem('key',key)
                {console.log(data2[key])}
                items.push({
                    key:key,
                  title: data2[key].title,

                  price: data2[key].price,

                  imageUrl:data2[key].imageUrl,

                  quantity: data2[key].quantity,
                })
                
              }
              
              items.map(item=>{
                CartCtx.addItem(item)
                console.log(item,'item with key')
              })
              
                
            
            localStorage.setItem('CartItems',JSON.stringify(items))
              
            }
           

  return (
    <Container className="offset-4">
      <Card style={{ width: "18rem" }}>
        <Card.Text className="display-5" style={{ textAlign: "center" }}>
          Login
        </Card.Text>
        <Card.Body>
          <Form onSubmit={SubmitHandler}>
            <Form.Label htmlFor="email">Email</Form.Label>
            <FormControl id="email" ref={EmailRef}></FormControl>
            <Form.Label htmlFor="password">password</Form.Label>
            <FormControl id="password" ref={passwordRef}></FormControl>
            <Button type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
