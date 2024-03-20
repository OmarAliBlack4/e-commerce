import React, { useEffect } from 'react'
import { getAllCategory, getAllCategoryPage } from '../../redux/action/catrgoryAction'
import { useDispatch, useSelector } from 'react-redux'

const HomeCategoryHook = () => {
           
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(getAllCategory(12))
    },[])
   
    const response = useSelector(status => status.allCategory.category)
    const loading = useSelector(status => status.allCategory.loading)


    let numberOfPages = 0
    if (response.paginationResult) {
        numberOfPages = response.paginationResult.numberOfPages

    }

    const onPress =(num)=>{
        
        dispatch(getAllCategoryPage(num))
    }
 
    return [response,loading,numberOfPages,onPress]
}

export default HomeCategoryHook
