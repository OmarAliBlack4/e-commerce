import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllBrand, getAllBrandPage} from '../../redux/action/brandAction'

const HomeBrandHook = () => {
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllBrand(12))
    },[])

    const res = useSelector(status => status.allBrand.brand)
    const loading = useSelector(status => status.allBrand.loading)

    let numberOfPages = 0
    if (res.paginationResult) {
        numberOfPages = res.paginationResult.numberOfPages

    }

    const onPress =(num)=>{
        
        dispatch(getAllBrandPage(num))
    }


    return [res , loading , numberOfPages , onPress]
}

export default HomeBrandHook
