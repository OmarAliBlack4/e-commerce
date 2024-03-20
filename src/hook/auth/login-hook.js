import { useEffect, useState } from "react"
import { notify } from '../../components/utility/notifications.js'
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../redux/action/authAction.js"
import { useNavigate } from 'react-router';

const LoginHook = () => {

    const dispatch = useDispatch();
    const res = useSelector(state => state.authReducer.loginUser);
    const navigate = useNavigate();


    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(true)

    const onCahngeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const onCahngPass = (e)=>{
        setPassword(e.target.value)
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
        // if (password.length < 10 ) {
        //     notify("Password must be > 10", "warn")
        //     return;
        // }
    }
    
    const handelSubmit=async ()=>{
        validatetion();
        setLoading(true);
        await dispatch(loginUser({
            email,
            password,
        }))
        setLoading(false)
    }

    useEffect(()=>{
        if (loading === false) {
            if (res) {
                if (res.data.token) {
                    localStorage.setItem("token" , res.data.token);
                    localStorage.setItem("user" , JSON.stringify(res.data.data));
                    notify("You are login" ,"success");
                        setTimeout(() => {
                            window.location.href='/';
                        }, 1500);
                }else{
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                };

                if (res.data.status === "error") {
                    localStorage.removeItem("token") ;
                    localStorage.removeItem("user") ;
                    notify(res.data.message ,"error")
                }
            }
        }
    },[loading])




    return [email , password , onCahngeEmail , onCahngPass , handelSubmit ];
}

export default LoginHook
