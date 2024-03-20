import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/action/catrgoryAction'
import { notify } from '../../components/utility/notifications'

const GetAllCatHook = () => {
    const categoryColor =  ["#F4DBA4" , "#F4DBA4" , "#0034FF" , "#F4DBA4" ,"#FF6262" ,"#F4DBA4"  ]
        
    const dispatch = useDispatch()
   
    useEffect(()=>{
       dispatch(getAllCategory())
    },[])
   
    const response = useSelector(status => status.allCategory.category)
    const loading = useSelector(status => status.allCategory.loading)

    return [categoryColor,response,loading]
}

export default GetAllCatHook
