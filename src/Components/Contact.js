import React,{useRef, useState} from "react";
import { Button, Container, Form,Row,Col    } from "react-bootstrap";



const Contact=()=>{
const[name,SetName]=useState('')
const[email,SetEmail]=useState('')
const[phone,SetPhone]=useState('')

const NameRef=useRef('')
const EmailRef=useRef('')
const PhoneRef=useRef('')
    const SubmitHandler=async(event)=>{
        event.preventDefault()
     const   NewObj={
            Name:NameRef.current.value,
            Email:EmailRef.current.value,
            Phone:PhoneRef.current.value
        }
    const response=await fetch('https://react-http-c38c6-default-rtdb.firebaseio.com/Info.json/',{
        method:"POST",
    body:JSON.stringify(NewObj),
    headers:{
      'Content-type':'application/json'
    }
    })
    const data=await response.json()
    console.log(data)
    NameRef.current.value=''
    EmailRef.current.value=''
    PhoneRef.current.value=''


    }

return (<>
<h1 className="display-2" style={{textAlign:"center"}}>Get In Touch</h1>
<Container>
    <Row className="offset-3">
        <Col className="col-md-6">
        <Form onSubmit={SubmitHandler}>

    <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control  type="text" placeholder="Enter you name" ref={NameRef} required></Form.Control>
    </Form.Group>
    <Form.Group>
        <Form.Label>Email Id</Form.Label>
        <Form.Control type="email" placeholder="Enter you Email" ref={EmailRef} required></Form.Control>
    </Form.Group>
    <Form.Group >
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter you Phone" ref={PhoneRef} required></Form.Control>
    </Form.Group>
    <Button className="mt-3" variant="primary" type="submit">Submit</Button>
</Form>
        </Col>
    </Row>


</Container>
</>
)};


export default Contact;