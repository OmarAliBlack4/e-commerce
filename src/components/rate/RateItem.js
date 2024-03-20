import { ToastContainer } from 'react-toastify'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import rate from '../../images/rate.png'
import DeleteReviewHook from "../../hook/review/delete-review-hook"
import EditReviewHook from '../../hook/review/edit-review-hook'
import ReactStars from "react-rating-stars-component";

const RateItem = ({ele}) => {
    let user = JSON.parse(localStorage.getItem("user"));
    let showOption = false;
    if (user){
        if(ele.user._id === user._id){
            showOption = true
        }
    }else{
        showOption = false
    }
    const [show,handleClose,handleShow,handelDelete] = DeleteReviewHook(ele)
    const [showEdit,handleCloseEdit,handleShowEdit,handelEdit  , onCahngeRateAve ,onCahngeRateText] = EditReviewHook(ele)




    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: ele.rating,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
        onCahngeRateAve(newValue)
        }
    };
    
    return (
        <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header >
                        <Modal.Title>Delete ?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure to <span style={{fontWeight:"bold", color:"red"}}>DELETE</span> your rate</Modal.Body>
                        <Modal.Footer>
                        <Button className='font' variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className='font' variant="danger" onClick={handelDelete}>
                            DELETE
                        </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={showEdit} onHide={handleCloseEdit}>
                        <Modal.Header >
                        <Modal.Title>Edit rate & comment</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <ReactStars {...setting} />
                        <input
                        value={ele.review}
                        onChange={onCahngeRateText}
                        />
                        </Modal.Body>
                        <Modal.Footer>
                        <Button className='font' variant="secondary" onClick={handleCloseEdit}>
                            Close
                        </Button>
                        <Button className='font' variant="primary" onClick={handelEdit}>
                            Edit
                        </Button>
                        </Modal.Footer>
                    </Modal>
            <Row className="mt-3">
                <Col className="d-felx me-5">
                    <div className="rate-name  d-inline ms-2">{ele.user.name}</div>
                    <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{ele.rating}</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} className="d-felx  me-4 pb-2">
                    <div className="rate-description  d-inline ms-2">
                        {ele.review}
                    </div>
                    {
                        showOption ? (
                            <div className="d-inline d-felx justify-content-end">
                                <p onClick={handleShowEdit} style={{color:"#0d6efd",cursor:"pointer"}}>Edite</p>
                                <p onClick={handleShow} style={{color:"red",cursor:"pointer"}}>Delete</p>
                            </div>
                        ) : null
                    }
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default RateItem
