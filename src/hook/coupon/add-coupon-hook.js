import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCoupon, allCoupon } from "../../redux/action/couponAction"
import { notify } from "../../components/utility/notifications"

const AddCouponHook = () => {

    const dispatch = useDispatch()
    const res = useSelector(state => state.couponReducer.addCoupon)

    const [couponName ,setCouponName ] = useState("")
    const [couponExpire , setCouponExpire] = useState("")
    const [couponValue , setCouponouponValue] = useState("")
    const [loding , setLoding] = useState(true)


    const onChangeName =(e)=>{
        setCouponName(e.target.value)
    }
    const onChangeExpire =(e)=>{
        setCouponExpire(e.target.value)
    }
    const onChangeValue =(e)=>{
        setCouponouponValue(e.target.value)
    }

    const handelSubmit = async()=>{
        setLoding(true)
            await dispatch(addCoupon({
                name: couponName,
                expire: couponExpire,
                discount:couponValue
            }))
        setLoding(false)
    }

    useEffect(()=>{
        if (loding === false) {
            if(res.status === 201){
                notify("Coupon Created","success");
                setCouponName("")
                setCouponExpire("")
                setCouponouponValue("")
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            }else{
                notify(res.data.message,"error")
            }
        }
    },[loding])




    useEffect(()=>{
        const get =async()=>{

            await dispatch(allCoupon())
        }
        get()
        },[])
        
        const response = useSelector(status => status.couponReducer.allCoupons)
    
    
        let allCopons;
        try {
            if (response){
                allCopons = response;
            }
        } catch (error) {console.log(error);}
    

    return[couponName,couponExpire,couponValue,onChangeName,onChangeExpire,onChangeValue, handelSubmit , allCopons]
}

export default AddCouponHook
