import React, { useState } from 'react'
import { Col,Card,Row, Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom'
import { deleteProduct } from '../../redux/action/productAction';
const AdminAllProductsCard = ({item}) => {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    const handelDelete = async()=>{
        await dispatch(deleteProduct(item._id))
        setShow(false)
        window.location.reload()
    }


    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex"> 
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header >
                        <Modal.Title>Delete ?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure to <span style={{fontWeight:"bold", color:"red"}}>DELETE</span> "{item.title}"</Modal.Body>
                        <Modal.Footer>
                        <Button className='font' variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className='font' variant="danger" onClick={handelDelete}>
                            DELETE
                        </Button>
                        </Modal.Footer>
                    </Modal>
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div onClick={handleShow} className="d-inline item-delete-edit">Delete</div>
                        <Link to={`/admin/editproduct/${item._id}`} style={{ textDecoration: "none" }}>
                            <div className="d-inline item-delete-edit">Edit</div>
                        </Link>
                    </Col>
                </Row>
                <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                            {item.title}
                            </div>
                        </Card.Title>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">{item.ratingsQuantity}</div>
                                <div className="d-flex">
                                    <div className="card-currency mx-1">$</div>
                                    <div className="card-price">{item.price}</div>
                                </div>
                            </div>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard
