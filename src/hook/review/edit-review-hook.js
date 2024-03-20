import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteReview, editReview } from '../../redux/action/reviewAction';
import { notify } from '../../components/utility/notifications';

const EditReviewHook = (ele) => {

    const dispatch = useDispatch();
    const res = useSelector(state => state.reviewReducer.editReview)

    const [loading , setLoading] = useState(true) 
    const [showEdit, setShowEdit] = useState(false);
    const [newText, setNewText] = useState(false);
    const [newRate, setNewRAte] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);



    const onCahngeRateAve = (value)=>{
        setNewRAte(value)
    }
    const onCahngeRateText = (e)=>{
        setNewText(e.targer.value)
    }
    const handelEdit = async()=>{
        setLoading(true);
        await dispatch(editReview(ele.product,{
            review: newText,
            rating: newRate
        }));   
        setLoading(false);
        handleCloseEdit();
    }

    useEffect(() => {
        if (loading === false) {
            if (res ) {
                console.log(res);
                notify("Rate edited" , "success")
                // setTimeout(() => {
                //     window.location.reload()
                // }, 1000);
            }else{
                notify("Error found" , "error")
            }
        }
    }, [loading])

    return  [showEdit,handleCloseEdit,handleShowEdit,handelEdit  , onCahngeRateAve ,onCahngeRateText];
}
export default EditReviewHook;
