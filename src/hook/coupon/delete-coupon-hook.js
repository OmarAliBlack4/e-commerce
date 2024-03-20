import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../components/utility/notifications';
import { deleteCoupon } from '../../redux/action/couponAction';

const DeleteCouponHook = (coupons) => {
    

    const dispatch = useDispatch()
    const res = useSelector(state => state.couponReducer.deleteCoupon)



    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    
    const handelDelete = async()=>{
        setLoading(true);
        await dispatch(deleteCoupon(coupons._id));
        setLoading(false);
        handleClose();
    }

    useEffect(() => {
        if (loading === false) {
            if (res === "") {
                console.log(res);
                notify("Coupon deleted" , "success")
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            }else{
                notify("Error found" , "error")
            }
        }
    }, [loading])


    return[show ,handleClose ,handleShow ,handelDelete]
}

export default DeleteCouponHook
