import React, { useEffect, useState } from 'react'
import GetProductSearchHook from '../product/get-product-search-hook';
import {  useNavigate } from 'react-router';

const NavbarSearchHook = () => {

    const [data , pageNum , onPress ,getProduct] = GetProductSearchHook();

    const [searchWord , setSearchWord] = useState('')


    let navigate = useNavigate();
    const onChangeSearch =(e)=>{
        localStorage.setItem("searchWord" ,e.target.value)
        setSearchWord(e.target.value);

        const path = window.location.pathname;
        if (path !== "/products") {
            return navigate("/products");
        }
    }

    useEffect(()=>{
        setTimeout(() => {
            getProduct()
        }, 1000);
    },[searchWord])

    return [onChangeSearch , searchWord]
}

export default NavbarSearchHook
