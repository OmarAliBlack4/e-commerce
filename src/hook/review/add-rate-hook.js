import { useEffect, useState } from "react"
import { notify } from "../../components/utility/notifications";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { codeEmail, forgetPassword } from "../../redux/action/authAction";
import { createNewComment } from "../../redux/action/reviewAction";


const AddRateHook = (id) => {

    const dispatch = useDispatch();
    const res = useSelector(state => state.reviewReducer.creatNewComment);
    const navigate = useNavigate();

    const [rateValue , setrateValue] = useState('');
    const [rateAver , setraterateAver] = useState(0);
    const [loading , setLoading] = useState(true);

    const onCahngeRateVal=(e)=>{
        setrateValue(e.target.value)
    }
    const onCahngeRateAve=(val)=>{
        setraterateAver(val)
    }

    var user = '';
    if (localStorage.getItem("user")){
        user = JSON.parse(localStorage.getItem("user"))
    }


    const handelSubmit =async()=>{
        if (rateValue === "" || null || undefined) {
            notify("Please Add comment","warn")
            return
        }
        if (rateAver < 1) {
            notify("Please Add Review","warn")
            return
        }
        setLoading(true)
        await dispatch(createNewComment(id ,
            {
                review: rateValue ,
                rating: rateAver 
            }))
        setLoading(false)
    }
    useEffect(()=>{
        if (loading === false){
            if (res) {
                if(res.status && res.status === 403){
                    notify(res.data.message , "warn")
                }
                else if (res.status && res.status === 400){
                    notify(res.data.errors[0].msg , "warn")
                }
                else if (res.status && res.status === 201){
                    notify("Comment created" , "success")
                }
            }
            setrateValue("")
            setraterateAver(0)
        }
    },[loading])

    return [rateValue , rateAver , onCahngeRateVal , onCahngeRateAve , user , handelSubmit , res]
}

export default AddRateHook;
