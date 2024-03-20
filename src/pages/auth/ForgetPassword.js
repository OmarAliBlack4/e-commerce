import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../hook/auth/forget-password-hook';

const ForgetPassword = () => {
    const [email ,onCahngeEmail, onsubmit] = ForgetPasswordHook();
    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">Forget password</label>
                        <input
                        value={email}
                        onChange={ onCahngeEmail}
                            placeholder="Email..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <button onClick={onsubmit} className="btn-login mx-auto mt-2">Send code</button>
                    </Col>
                </Row>
                <ToastContainer/>
            </Container>
    )
}


export default ForgetPassword
