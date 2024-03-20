import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import ChangePasswordHook from '../../hook/auth/change-password-hook';

const ResetPasswordPage = () => {
    const [email , newPassword , onCahngeEmail , onCahngNewPass , handelSubmit ] = ChangePasswordHook();
    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">Change password</label>
                        <input
                        value={email}
                        onChange={ onCahngeEmail}
                            placeholder="Email..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <input
                        value={newPassword}
                        onChange={onCahngNewPass}
                            placeholder="New Password..."
                            type="password"
                            className="user-input text-center mx-auto"
                        />
                        <button onClick={handelSubmit} className="btn-login mx-auto mt-4">Change password</button>
                    </Col>
                </Row>
                <ToastContainer/>
            </Container>
    )
}

export default ResetPasswordPage
