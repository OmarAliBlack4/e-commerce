import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllReview } from "../../redux/action/reviewAction"
import AddRateHook from "./add-rate-hook"


const GetAllReviewHook = (id) => {

    const [,,,,,,CreatComment] = AddRateHook();

    const dispatch = useDispatch();
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        dispatch(getAllReview(id,1,6));
        setLoading(false);
    },[CreatComment])

    const res = useSelector(status => status.reviewReducer.allReview);

    let allReview;
    try {
        if (res){
            allReview = res;
        }
    } catch (error) {console.log(error);}

    const onPress=async(page)=>{
        await dispatch(getAllReview(id,page,6));

    }
    
    return [allReview , onPress]

}

export default GetAllReviewHook
