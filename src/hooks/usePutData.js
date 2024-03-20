import baseUrl from "../API/baseURL";

const usePutDataWithImage = async (url , params)=>{

    const config = {
        headers:{"content-type":"multipart/form-data" ,
        Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.put(url , params , config);
    return res;
}



const usePutData = async (url , params)=>{
    const config = {
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
    }
    const res = await baseUrl.put(url , params , config);

    return res;
}


export {usePutDataWithImage , usePutData};