import React from 'react'
import { Col, Row ,Button ,Modal } from 'react-bootstrap'
import { useState } from 'react';
import DeleteCouponHook from '../../hook/coupon/delete-coupon-hook';



const AdminCouponCard = ({coupons}) => {

        var timestampString = coupons.expire; // Example timestamp string
        var date = new Date(timestampString);
        
        // Format the date as desired
        var formattedDate = date.toLocaleDateString(); // This will give you a locale-specific date format without the time

    const [show ,handleClose ,handleShow ,handelDelete] = DeleteCouponHook(coupons)

    return (


        <Col sm="12" style={{backgroundColor: "rgb(39 39 39 / 15%)",padding: "15px",borderRadius: "20px",margin:" 20px 0",}}>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Delete ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to delete this coupon</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="danger " onClick={handelDelete}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>

        <div className="w-100">
            <Row className="justify-content-between">
                <Col sm="12" className=" d-flex flex-row justify-content-between">
                    <div style={{color:"#0d6efd",fontWeight:"bold", fontSize:"20px"}}>Coupon {coupons.discount} %</div>
                </Col>
            </Row>
            <Row className="justify-content-center mt-2">
                <Col sm="12" className=" d-flex flex-row justify-content-start">
                    <div >
                    Coupon name : {coupons.name}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" className=" d-flex">
                    <div>Coupon value : {coupons.discount} %</div>
                </Col>
            </Row>
            <Row className="justify-content-between">
                <Col sm="12" className=" d-flex flex-row justify-content-between">
                    <div className="d-inline pt-2 d-flex">
                        <div>Coupon expire : {formattedDate}</div>
                    </div>
                    <div className="d-inline pt-2 barnd-text">Edit</div>
                    <div onClick={handleShow} style={{cursor:"pointer"}} className="d-inline pt-2 barnd-text">Delete</div>
                </Col>
            </Row>
        </div>
    </Col>
    )
}

export default AdminCouponCard
