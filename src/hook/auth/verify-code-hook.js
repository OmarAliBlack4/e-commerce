import { useEffect, useState } from "react"
import { notify } from "../../components/utility/notifications";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { codeEmail, forgetPassword } from "../../redux/action/authAction";


const VerifyCodeHook = () => {

    const dispatch = useDispatch();
    const res = useSelector(state => state.authReducer.codeEmail);
    const navigate = useNavigate();

    const [code , setCode] = useState('');
    const [loading , setLoading] = useState(true);

    const onCahngeCode=(e)=>{
        setCode(e.target.value)
    }


    const onsubmit = async()=>{
        if (code === '') {
            notify("Check Code", "warn")
            return;
        }
        setLoading(true);
        await dispatch(codeEmail({
            resetCode:code
        }))
        setLoading(false)
    }


    useEffect(()=>{
        if (loading === false) {
            if (res) {
            console.log(res);
            if (res.data.status === "success") {
                notify(res.data.message ,"success");
                    setTimeout(() => {
                        navigate('/user/reset-password')
                    }, 1500);
            }
                if (res.data.status === "error") {
                    notify(res.data.message, "error");
                }
                if (res.data.status === "fail") {
                    notify(res.data.message, "error");
                } 
            }
        }
    },[loading])


    return [code ,onCahngeCode, onsubmit];
}

export default VerifyCodeHook;
