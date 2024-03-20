import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct, getProductQuery, getProductsPage } from '../../redux/action/productAction';

const GetProductSearchHook = () => {

    const limit = 12;
    const dispatch = useDispatch();
    const productData = useSelector(state => state.allProducts.allProducts)


//get all product with queryString
    const getProduct =async()=>{
        let word = "", queryCat = "" , queryBrand = "" , numberFrom = "" , numbrTo = "";
        if (localStorage.getItem("searchWord") != null ) {
            word = localStorage.getItem("searchWord")
        }
        if (localStorage.getItem("catChecked") != null ) {
            queryCat = localStorage.getItem("catChecked")
        }   
        if (localStorage.getItem("brandChecked") != null ) {
            queryBrand = localStorage.getItem("brandChecked")
        } 
        if (localStorage.getItem("numFrom") != null ) {
            numberFrom = localStorage.getItem("numFrom")
        } 
        if (localStorage.getItem("numTo") != null ) {
            numbrTo = localStorage.getItem("numTo")
        } 


            let priceF = "";
            if(numberFrom === "" || numberFrom <= 0){
                priceF = ""
            }else{
                priceF = `&price[gt]=${numberFrom}`
            }

            let priceT = "";
            if(numbrTo === "" || numbrTo <= 0){
                priceT = ""
            }else{
                priceT = `&price[lte]=${numbrTo}`
            }
        sortData()
        await dispatch(getProductQuery(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${queryBrand}${priceF}${priceT}`));
    }

    useEffect(()=>{
        getProduct();
    },[])



//get all product with queryString to pagination
    let data = []
    try {
        if (productData.data) {
            data = productData.data;
        }else{
            data = []
        }
    } catch (error) {console.log(error);}

    let pageNum = 0
    try {
        if (productData.paginationResult) {
            pageNum = productData.paginationResult.numberOfPages
        } else {
            pageNum = 0
        }
    } catch (error) {console.log(error);}

    let totalProd = 0;
    try {
        if (productData) {
            totalProd = productData.results
        } else {
            totalProd = 0
        }
    } catch (error) {console.log(error);}

    const onPress =(num)=>{
        let word = "",queryCat = "" , queryBrand = "" , numberFrom = "" , numbrTo = "";
        if (localStorage.getItem("searchWord") != null ) {
            word = localStorage.getItem("searchWord")
        }
        if (localStorage.getItem("catChecked") != null ) {
            queryCat = localStorage.getItem("catChecked")
        }
        if (localStorage.getItem("brandChecked") != null ) {
            queryBrand = localStorage.getItem("brandChecked")
        } 
        if (localStorage.getItem("numFrom") != null ) {
            numberFrom = localStorage.getItem("numFrom")
        } 
        if (localStorage.getItem("numTo") != null ) {
            numbrTo = localStorage.getItem("numTo")
        } 


        let priceF = "";
        if(numberFrom === "" || numberFrom <= 0){
            priceF = ""
        }else{
            priceF = `&price[gt]=${numberFrom}`
        }

        let priceT = "";
        if(numbrTo === "" || numbrTo <= 0){
            priceT = ""
        }else{
            priceT = `&price[lte]=${numbrTo}`
        }

        sortData();
        dispatch(getProductQuery(`sort=${sort}&limit=${limit}&page=${num}&keyword=${word}&${queryCat}&${queryBrand}${priceF}${priceT}`))
    }





// when user sort data
    let sortType ="" , sort;
    const sortData = ()=>{
        if (localStorage.getItem("sortType") !== null) {
            sortType = localStorage.getItem("sortType");
        }else{
            sortType = "";
        }

        if(sortType === "Price from lowest to highest"){
            sort = "+price";
        }
        else if(sortType === "Price from highest to lowest"){
            sort = "-price";
        }
        else if(sortType === ""){
            sort = "";
        }
        else if(sortType === "Best Sales"){
            sort = "-sold";
        }
        // else if(sortType === "Best Rate"){
        //     sort = "-ratingsQuantity";
        // }
        else if(sortType === "Best Rate"){
            sort = "-quantity";
        }
        
    }

    return [data , pageNum , onPress ,getProduct ,totalProd]
}

export default GetProductSearchHook;