import GetAllCatHook from '../category/get-all-category-hook';
import GetAllBrandHook from '../brand/get-all-brand-hook';
import { useEffect, useState } from 'react';
import GetProductSearchHook from '../product/get-product-search-hook';
import axios from 'axios';

const SideBarSearchHook = () => {

    //get all categorys and all brands
    const [data , pageNum , onPress ,getProduct ,totalProd]  = GetProductSearchHook();
    const [,response,] = GetAllCatHook();
    const [res , ] = GetAllBrandHook();

    //when user press any category
    var queryCat ="";
    const [catChecked , setCatChecked] = useState([])
    const checkCategory = (e) =>{
        let value = e.target.value;
        if (value === "") {
            setCatChecked([]);
        } else {
            if (e.target.checked === true) {
                setCatChecked([...catChecked, value]);
            }else if(e.target.checked === false){
                const newArray = catChecked.filter((e)=> e !== value);
                setCatChecked(newArray);
            }
        }
    }

    useEffect(()=>{
        queryCat = catChecked.map(val=> "category[in][]=" + val).join("&");
        localStorage.setItem("catChecked" ,queryCat)
        setTimeout(() => {
            getProduct()
        }, 1000);
    },[catChecked])


    //when user press any brand
    var queryBrand = ""
    const [brandCheck , setBrandCheck] = useState([])
    const brandCategory = (e) =>{
        let value = e.target.value;
        if (value === "") {
            setBrandCheck([]);
        } else {
            if (e.target.checked === true) {
                setBrandCheck([...brandCheck, value]);
            }else if(e.target.checked === false){
                const newArray = brandCheck.filter((e)=> e !== value);
                setBrandCheck(newArray);
            }
        }
    }

    useEffect(()=>{
        queryBrand = brandCheck.map(val=> "brand[in][]=" + val).join("&");
        localStorage.setItem("brandChecked" ,queryBrand)
        setTimeout(() => {
            getProduct()
        }, 1000);
    },[brandCheck])

//get range number 

        const numFrom = (e)=>{
            localStorage.setItem("numFrom" ,  e.target.value)
            setTimeout(() => {
                getProduct()
            }, 1000);
        }
        const numTo = (e)=>{
            localStorage.setItem("numTo" ,  e.target.value);
            setTimeout(() => {
                getProduct()
            }, 1000);
        }

        return [response , res , checkCategory , brandCategory ,numFrom ,numTo]
    }

export default SideBarSearchHook;