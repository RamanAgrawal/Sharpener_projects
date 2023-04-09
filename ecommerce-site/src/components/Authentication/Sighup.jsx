import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { AuthContext } from "../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
// import { useHistory } from 'react-router-dom';


export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = AuthContext()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    const email= emailRef.current.value
    try {

      setLoading(true)
      setError("")
      const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAyqFjwekzckK01VIQTo6f0bFFrPZrmDyI', {

        email: email,
        password: passwordRef.current.value,
        returnSecureToken: true
      })
      console.log(res);
      const token = (res.data.idToken);
      localStorage.setItem('email',email)
      login(token)
      history("/store")

    } catch {
      setError("Failed to sign in")
    }

    setLoading(false)
  }

  return (
    <>
      <Card className="w-25 m-auto">
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sigh Up
            </Button>
          </Form>
          {/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        already have an account? <Link to="/login">Login</Link>
      </div>
    </>
  )
}