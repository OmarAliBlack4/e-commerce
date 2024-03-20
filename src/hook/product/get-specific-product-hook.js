import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificProduct } from "../../redux/action/productAction";
import { getSameCategory, getSpecificCategory } from "../../redux/action/catrgoryAction";
import { getSpecificBrand } from "../../redux/action/brandAction";


const GetSpecificProductHook = (id) => {
    const dispatch = useDispatch();
    const productData = useSelector(state => state.allProducts.specificProduct)
    const categoryData = useSelector(state => state.allCategory.specificCategory)
    const brandData = useSelector(state => state.allBrand.specificBrand)
    const sameCategoryData = useSelector(state => state.allCategory.sameCategory)

    useEffect(()=>{
        dispatch(getSpecificProduct(id));
    },[])

    let data = []

    try {
        if (productData.data) {
            data = productData.data;
        }else{
            data = []
        }
    } catch (error) {
        console.log(error);
    }

    useEffect(()=>{
        if (data.category) {
            dispatch(getSpecificCategory(data.category))
        }
        if (data.brand) {
            dispatch(getSpecificBrand(data.brand))
        }
        if (data.category) {
            dispatch(getSameCategory(data.category))
        }
    },[data])


    
    let catData = []

    try {
        if (categoryData.data) {
            catData = categoryData.data;
        }else{
            catData = []
        }
    
    } catch (error) {
        console.log(error);
    }
    


    let brData = []
    try {
            
    if (brandData.data) {
        brData = brandData.data;
    }else{
        brData = []
    }

    } catch (error) {
        console.log(error);
    }
    


    let sameCat = [];

    if (sameCategoryData && sameCategoryData.data) {
        sameCat = sameCategoryData.data.slice(0, 4);
    } else {
        sameCat = [];
    }


    
    let images = []
    if(data.images){
        images = data.images.map((img)=>{return{original: img}})
    }else{
        images = [{original: ""}]
    }
    
    return [data, images ,catData , brData , sameCat];
}

export default GetSpecificProductHook;
