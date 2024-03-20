import React, { useRef } from 'react'
import { Row,Col, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import AddCouponHook from '../../hook/coupon/add-coupon-hook'
import AdminCouponCard from './AdminCouponCard'

const AdminAddCoupon = () => {

    const [couponName,couponExpire,couponValue,onChangeName,onChangeExpire,onChangeValue, handelSubmit , allCopons]= AddCouponHook()





    const dateRef = useRef()
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add Coupon</div>
                <Col sm="8">

                <input
                value={couponName}
                onChange={onChangeName}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Coupon name"
                />
                <input
                value={couponExpire}
                onChange={onChangeExpire }
                ref = {dateRef}
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Coupon expire"
                onFocus={()=> dateRef.current.type = "date"}
                onBlur={()=> dateRef.current.type = "text"}
            />
                <input
                value={couponValue}
                onChange={onChangeValue}
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="Coupon value"
            />
                </Col>
            </Row>
            <Row>
            <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handelSubmit}  className="btn-save d-inline mt-2 ">Add coupon </button>
        </Col>
    </Row>
    <ToastContainer/>
        {
            allCopons.data ? (<h3 className="admin-content-text pb-4">{ allCopons.data.length} : Coupons</h3>) : <h3 className="admin-content-text pb-4"> Coupons</h3>
        }
        
        {
            allCopons.data ? allCopons.data.map((ele , index)=>{
                return(
                <AdminCouponCard key={index} coupons={ele}/>  
                )}): <h1>No coupons</h1>
        }
        </div>
    )
}

export default AdminAddCoupon
