import React,{useRef,} from "react";
import { Card, Container, Form, FormControl ,Button} from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "./auth-context";
import { useHistory } from "react-router-dom";
const Login=()=>{
    const history=useHistory()
    const authCtx=useContext(AuthContext)
    // console.log(authCtx.isLoggedIn)
const EmailRef=useRef();
const passwordRef=useRef();

const SubmitHandler=(e)=>{
    // console.log('clicked')
    e.preventDefault();
 const   enteredEmail=EmailRef.current.value;
 const   enteredPassword=passwordRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClZNmJUMIdt_s-o4AAFKLhV7Ua1ptqeDw',
    {
        method:'POST',
        body:JSON.stringify(
            {
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken: true
            }
        ),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=>{
        if(res.ok){
            res.json().then(data=>{
                authCtx.login(data.idToken)
            console.log(data)
            history.replace('/')
                

            })
        }else{
            res.json().then(data=>{
                console.log(data)
            })
        }
    })
}

return(
    <Container className="offset-4" >
        <Card style={{width:'18rem'}} >
            <Card.Text className="display-5" style={{textAlign:'center'}}>Login</Card.Text>
            <Card.Body>
                <Form onSubmit={SubmitHandler}>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <FormControl id="email" ref={EmailRef}></FormControl>
                    <Form.Label htmlFor="password">password</Form.Label>
                    <FormControl id="password" ref={passwordRef}></FormControl>
                   <Button type="submit" className="mt-3">Login</Button> 
                </Form>
            </Card.Body>
        </Card>
    </Container>
)

};


export default Login;
