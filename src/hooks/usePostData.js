import baseUrl from "../API/baseURL";

const usePostDataNoText = async (url , params)=>{

    const config = {
        headers:{"content-type":"multipart/form-data" ,
        Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.post(url , params , config);
    return res;
}



const usePostData = async (url , params)=>{
    const config = {
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.post(url , params , config);

    return res;
}


export {usePostDataNoText , usePostData};