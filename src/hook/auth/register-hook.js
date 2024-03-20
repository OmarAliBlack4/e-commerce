import { useEffect, useState } from "react"
import { notify } from '../../components/utility/notifications.js'
import { useDispatch, useSelector } from "react-redux"
import { createNewUser } from "../../redux/action/authAction.js"
import {  useNavigate } from 'react-router';

const RegisterHook = () => {

    const dispatch = useDispatch();
    const res = useSelector(state => state.authReducer.creatNewUser);
    const navigate = useNavigate();

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const [conPassword,setConPassword] = useState('')
    const [loading,setLoading] = useState(true)

    const onCahngeName = (e)=>{
        setName(e.target.value)
    }
    const onCahngeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const onCahngePhone = (e)=>{
        setPhone(e.target.value)
    }
    const onCahngPass = (e)=>{
        setPassword(e.target.value)
    }
    const onCahngeConPass = (e)=>{
        setConPassword(e.target.value)
    }





    const validatetion = ()=> {

        const validateEmail = (email) => {
            return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };

        if (name.length < 2 ) {
            notify("Name is required", "warn")
            return;
        }
        if (!validateEmail(email)) {
            notify("Check E-mail", "warn")
            return;
        }
        if (phone.length <= 10 ) {
            notify("Check Phone", "warn")
            return;
        }
        if (password.length < 10 ) {
            notify("Password must be > 10", "warn")
            return;
        }
        if (password !== conPassword ) {
            notify("Password must be = Confirm Pass", "warn")
            return;
        }

    }
    const handelSubmit=async ()=>{
        validatetion();
        setLoading(true)
        await dispatch(createNewUser({
            name,
            email,
            password,
            passwordConfirm:conPassword,
            phone
        }))
        setLoading(false)
    }

    useEffect(()=>{
        if (loading === false) {
            if (res) {
                if (res.data.token) {
                    localStorage.setItem("token" , res.data.token)
                    notify("Account created" ,"success")
                        setTimeout(() => {
                            navigate("/login")
                        }, 2000);
                }
                if (res.data.errors) {
                    notify(res.data.errors[0].msg ,"error")
                }
            }
        }
    },[loading])

    return [name ,email ,phone ,password ,conPassword ,onCahngeName ,onCahngeEmail ,onCahngePhone ,onCahngPass ,onCahngeConPass ,handelSubmit]
}

export default RegisterHook
