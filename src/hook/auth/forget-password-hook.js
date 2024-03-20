import { useEffect, useState } from "react"
import { notify } from "../../components/utility/notifications";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { forgetPassword } from "../../redux/action/authAction";


const ForgetPasswordHook = () => {

    const dispatch = useDispatch();
    const res = useSelector(state => state.authReducer.forgetPassword);
    const navigate = useNavigate();

    const [email , setEmail] = useState('');
    const [loading , setLoading] = useState(true);

    const onCahngeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const validatetion = ()=> {

        const validateEmail = (email) => {
            return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };
        if (!validateEmail(email)) {
            notify("Check E-mail", "warn")
            return;
        }
    }

    const onsubmit = async()=>{
        validatetion();
        setLoading(true);
        await dispatch(forgetPassword({email}))
        setLoading(false)
    }


    useEffect(()=>{
        if (loading === false) {
            if (res) {
            console.log(res);
            if (res.data.status === "success") {
                notify(res.data.message ,"success");
                    setTimeout(() => {
                        navigate('/user/verify-code')
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


    return [email ,onCahngeEmail, onsubmit];
}

export default ForgetPasswordHook
