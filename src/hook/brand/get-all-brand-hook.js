import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllBrand} from '../../redux/action/brandAction'

const GetAllBrandHook = () => {
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllBrand())
    },[])

    const res = useSelector(status => status.allBrand.brand)
    const loading = useSelector(status => status.allBrand.loading)


    return [res , loading]
}

export default GetAllBrandHook
