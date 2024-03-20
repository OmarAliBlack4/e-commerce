import React, { useEffect, useState } from 'react'
import { notify } from '../../components/utility/notifications';
import { postSubCategoury } from '../../redux/action/subCategoryAction';
import GetAllCatHook from '../category/get-all-category-hook';
import { useDispatch, useSelector } from 'react-redux';

const AddSubCategoryHook = () => {

    const dispatch = useDispatch();
    const response = useSelector(status => status.allSubCategory.subCategory)

    const [,responseCat,] = GetAllCatHook();

    const [name , setName] = useState("")
    const [id , setId] = useState("0");
    const [loading , setLoading] = useState(true)

    const handelName = (e)=>{
        e.persist();
        setName(e.target.value)
    }
    const handelId =(e)=>{
        setId(e.target.value)
    }

    const handelSubmet = async (e)=>{
        e.preventDefault();
        if (name === "") {
            notify("Please add name .","warn")

            return;
        } else if(id === "0" ){
            notify("Please choose main category .","warn")

            return;
        }
        setLoading(true);
        await dispatch(postSubCategoury({
            name,
            category:id,
        }))
        setLoading(false)
    }


    useEffect(()=>{

        if (loading === false){
            setName("")
            setId("0")
        if (response.status === 201) {
            notify("Success .","success")
            
        } 
        else if(response === "ErrorAxiosError: Request failed with status code 400") {
            notify("The name already exists.","error")
            
        }

        setLoading(true)
    }

    },[loading])

    return [responseCat , name  ,handelName , handelId , handelSubmet ]
}

export default AddSubCategoryHook;