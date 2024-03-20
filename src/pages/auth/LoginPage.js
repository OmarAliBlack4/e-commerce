import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import LoginHook from '../../hook/auth/login-hook';

const LoginPage = () => {
    const [email , password , onCahngeEmail , onCahngPass , handelSubmit ] = LoginHook();
    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">Login</label>
                        <input
                        value={email}
                        onChange={ onCahngeEmail}
                            placeholder="Email..."
                            type="text"
                            className="user-input my-3 text-center mx-auto"
                        />
                        <input
                        value={password}
                        onChange={onCahngPass}
                            placeholder="Password..."
                            type="password"
                            className="user-input text-center mx-auto"
                        />
                        <button onClick={handelSubmit} className="btn-login mx-auto mt-4">Login</button>
                        <label className="mx-auto my-4">
                        Don't have an account?{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    Click here
                                </span>
                            </Link>
                        </label>
                        <label className="mx-auto ">
                            <Link to="/user/forget-password" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    Forget password
                                </span>
                            </Link>
                        </label>
                    </Col>








                            <label className="mx-auto my-4">
                            <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger">
                                    Admin
                                </span>
                            </Link>

                            <Link to="/user/allorders" style={{textDecoration:'none'}}>
                                <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                                    User
                                </span>
                            </Link>
                        </label>








                </Row>
                <ToastContainer/>
            </Container>
    )
}

export default LoginPage
