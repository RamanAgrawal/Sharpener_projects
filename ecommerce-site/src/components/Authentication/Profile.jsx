import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const passwordRef = useRef()
    const [res, setRes] = useState("")
    const [loading, setLoading] = useState(false)
    const { token,login } = AuthContext()
    const history = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            setLoading(true)
            setRes("")
            const res=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAyqFjwekzckK01VIQTo6f0bFFrPZrmDyI`, {
                idToken: token,
                password: passwordRef.current.value,
                returnSecureToken: true
            })
            login(res.data.idToken)
            setRes('Success')
            history('/')
            alert('Password Changed Successfully..!')


        } catch (e) {
            console.log(e);
            setRes("Error")
        }

        setLoading(false)
    }

    return (
        <Card className="w-25 m-auto">
            <Card.Body>
                <h2 className="text-center mb-4">Reset Password</h2>
                {res && <Alert variant="danger">{res}</Alert>}
                <Form onSubmit={handleSubmit}>

                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Change
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default Profile