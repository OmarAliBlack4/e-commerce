import { useEffect, useState } from "react"
import { notify } from '../../components/utility/notifications.js'
import { useDispatch, useSelector } from "react-redux"
import {  loginUser, resetPassword } from "../../redux/action/authAction.js"
import {useNavigate } from 'react-router';

const ChangePasswordHook = () => {

    const dispatch = useDispatch();
    const res = useSelector(state => state.authReducer.resetPassword);
    const navigate = useNavigate();


    const [email,setEmail] = useState('')
    const [newPassword,setNewPassword] = useState('')
    const [loading,setLoading] = useState(true)

    const onCahngeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const onCahngNewPass = (e)=>{
        setNewPassword(e.target.value)
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
        if (newPassword.length < 10 ) {
            notify("Password must be > 10", "warn")
            return;
        }
    }



    const handelSubmit=async ()=>{
        validatetion();
        setLoading(true);
        await dispatch(resetPassword({
            email,
            newPassword,
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
                        navigate('/login')
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



    return [email , newPassword , onCahngeEmail , onCahngNewPass , handelSubmit ];
}

export default ChangePasswordHook;
