import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, getProductsPage } from '../../redux/action/productAction';

const AllProductAdminHook = () => {


    const dispatch = useDispatch();
    const productData = useSelector(state => state.allProducts.allProducts)

    useEffect(()=>{
        dispatch(getProduct(9));
    },[])

    let data = []

    if (productData.data) {
        data = productData.data;
    }else{
        data = []
    }
    
    let paginationPage = []
    
    if (productData.data) {
        paginationPage = productData.paginationResult.numberOfPages;
    }else{
        paginationPage = []
    }



    const onPress = (num) =>{
        dispatch(getProductsPage(12 , num))
    }


    return [data , paginationPage , onPress]
}

export default AllProductAdminHook