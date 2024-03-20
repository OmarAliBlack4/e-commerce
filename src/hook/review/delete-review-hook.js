import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview } from '../../redux/action/reviewAction';
import { notify } from '../../components/utility/notifications';

const DeleteReviewHook = (ele) => {

    const dispatch = useDispatch();
    const res = useSelector(state => state.reviewReducer.deleteReview)

    const [loading , setLoading] = useState(true) 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handelDelete = async()=>{
        setLoading(true);
        await dispatch(deleteReview(ele._id));
        setLoading(false);
        handleClose();
    }

    useEffect(() => {
        if (loading === false) {
            if (res === "") {
                notify("Rate deleted" , "success")
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }else{
                notify("Error found" , "error")
            }
        }
    }, [loading])

    return [show,handleClose,handleShow,handelDelete];
}

export default DeleteReviewHook;
