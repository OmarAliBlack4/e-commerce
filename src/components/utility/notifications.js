import { toast } from 'react-toastify';

export const notify = (massage , type) =>{
    if (type === "error") {
        toast.error(massage ,{
            autoClose:2000,
            closeOnClick:true,
            pauseOnHover:false,
        });
    }else if (type === "success"){
        toast.success(massage , {
            autoClose:2000,
            closeOnClick:true,
            pauseOnHover:false,
        });
    }else if (type === "warn"){
        toast.warn(massage , {
            autoClose:2000,
            closeOnClick:true,
            pauseOnHover:false,
        });
    }
} 