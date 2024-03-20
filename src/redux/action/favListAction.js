import useGetData from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import  useDeleteData  from "../../hooks/useDeleteData";
import { NEW_COMMENT  } from "../types";

//Post FaveProduct Action
// export const createNewComment =(prodID , body)=> async(dispatch)=>{
//     try {
//         const response = await usePostData(`/api/v1/products/${prodID}/reviews` , body);
//         dispatch({
//                 type: NEW_COMMENT,
//                 payload:response,
//                 loding:true,
//             })
        
//     } catch (e) {
//         dispatch({
//             type:NEW_COMMENT,
//             payload: e.response,
//         })
//     }
// }
