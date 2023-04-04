import axios from 'axios'
import React, { useRef } from 'react'
import { Button, Container, Form, FormGroup } from 'react-bootstrap'

const Contect = () => {
    const nameRef=useRef()
    const emailRef=useRef()
    const phoneRef=useRef()

const uploadData=async(contect)=>{
    try {
        await axios.post('https://my-first-project-c381c-default-rtdb.firebaseio.com/contect_details.json',contect)
        
    } catch (error) {
        console.log(error);
    }
}

const submitHandler=(e)=>{
 e.preventDefault()

 const contect={
     name:nameRef.current.value,
     email:emailRef.current.value,
     phone:phoneRef.current.value
    }
    uploadData(contect)
    e.target.reset()
}



  return (
    <Container className='w-50'>
        <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number</Form.Label>
        <Form.Control ref={phoneRef} type="number" placeholder="Enter Phone Number" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default Contect