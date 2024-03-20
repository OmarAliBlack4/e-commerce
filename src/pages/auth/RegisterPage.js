import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import RegisterHook from '../../hook/auth/register-hook'

const RegisterPage = () => {
  const [name ,email ,phone ,password ,conPassword ,onCahngeName ,onCahngeEmail ,onCahngePhone ,onCahngPass ,onCahngeConPass , handelSubmit] = RegisterHook();
    return (
        <Container  >
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">New Account</label>
            <input
            value={name}
            onChange={onCahngeName}
              placeholder="User name..."
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
            value={email}
            onChange={onCahngeEmail}
              placeholder="Email..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
            value={phone}
            onChange={onCahngePhone}
              placeholder="Phone..."
              type="phone"
              className="user-input  text-center mx-auto"
            />
            <input
            value={password}
            onChange={onCahngPass}
              placeholder="Password..."
              type="password"
              className="user-input my-3 text-center mx-auto"
            />
            <input
            value={conPassword}
            onChange={onCahngeConPass}
              placeholder="confirm Password..."
              type="password"
              className="user-input text-center mx-auto"
            />
            <button onClick={handelSubmit} className="btn-login mx-auto mt-4">Create account</button>
            <label className="mx-auto my-4">
            You already have an account?
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  Click here
                </span>
              </Link>
            </label>
          </Col>
          </Row>
          <ToastContainer/>
      </Container>
    )
}

export default RegisterPage
