import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/admin/AdminSideBar'
import AdminAddCoupon from '../../components/admin/AdminAddCoupon'
import { ToastContainer } from 'react-toastify'


const AdminAddCouponPage = () => {
    return (
        <Container>
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    <AdminSideBar/>
                </Col> 
                <Col sm="9" xs="10" md="10">
                <AdminAddCoupon/>
                </Col>
            </Row>
            <ToastContainer/>
        </Container>
    )
}

export default AdminAddCouponPage
