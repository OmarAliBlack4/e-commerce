import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GetAllCatHook from '../category/get-all-category-hook'
import GetAllBrandHook from '../brand/get-all-brand-hook'
import { getOneSupCategoury } from '../../redux/action/subCategoryAction'
import { notify } from '../../components/utility/notifications'
import { postProduct } from '../../redux/action/productAction'

const AddProductHook = () => {


    const dispatch = useDispatch()
    const subCat = useSelector(state => state.allSubCategory.subCategory)
    const product = useSelector(state => state.allProducts.product)
    
    //get all category
    const [,allCategory,] = GetAllCatHook();
    
    
    //get all barnd
    const [allBrand , ] = GetAllBrandHook();
    //manage state
    const [images, setImages] = useState([]);
    const [name , setName] = useState("");
    const [description , setDescription] = useState("");
    const [discount , setDiscount] = useState("");
    const [price , setPrice] = useState("");
    const [quantity , setQuantity] = useState("");
    const [category , setCategory] = useState('');
    const [brand , setBrand] = useState("");
    const [selectedID , setSelectedID] = useState([]);
    // Color state
    const [colors , setColors] = useState([])
    //open and close colors
    const [showColor , setShowColor] = useState(false)
    //options subCat
    const [options , setOptions] =useState([])
    const [loading ,setLoading] = useState(true);
    
    
    
    
    //set cat in state
    const onSelectCategory =async (e)=>{
        if (e.target.value !== 0){
            await dispatch(getOneSupCategoury(e.target.value));
        }

        setCategory(e.target.value)
    }
    useEffect(()=>{
        if (category !== 0){
            if (subCat.data) {
                setOptions(subCat.data)
            }
        }
    },[category])
    //set brand in state
    const onSelectBrand = (e)=>{
        setBrand(e.target.value)
    }
    //handel Open Color
    const handelOpenColor = ()=>{
        setShowColor(!showColor)
    }
    //when choose new color
    const handelComplete = (color)=>{
        setColors([...colors,color.hex])
        setShowColor(!showColor)
    }
    const handelDeleteColor =(color)=>{
        const vovo =colors.filter((e)=> e !== color);
        setColors(vovo);
    }


    
    const onSelect = (selectList) => {
        setSelectedID(selectList)
    }
    const onRemove = (selectList) => {
        setSelectedID(selectList)
    }

    //convert base64 to file function
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }


    const handelSubmt = async(e)=>{
        
        if (discount > price || images.length <= 0 || name === "" || description === "" || price <= 0 || category === 0 || brand === 0){
            notify("Complete Data" , "warn");
            return;
        }
        
        e.preventDefault();
        const imageCover = dataURLtoFile(images[0],Math.random() + ".png")

        const arrayAmg = Array.from(Array(Object.keys(images).length).keys()).map((item,index)=>{
            return dataURLtoFile(images[index],Math.random() + ".png")
        })



        const formData =new FormData();
        formData.append("title",name )
        formData.append("imageCover", imageCover)
        formData.append("category",category )
        formData.append("description",description )
        formData.append("quantity",quantity )
        formData.append("price",price )
        formData.append("brand",brand )
        colors.map((item)=>{
            return formData.append("availableColors",item )
        })
        selectedID.map((item)=>{
            return formData.append("subcategory", item._id )
        })
        arrayAmg.map((item)=>{
            return formData.append("images", item )
        })

        setLoading(true)
        await dispatch(postProduct(formData))
        setLoading(false)

    }




    useEffect(() => {

        if (loading === false) {
           // setCatID(0)
            setColors([])
            setImages([])
            setName('')
            setDescription('')
            setPrice('')
            setDiscount('')
            setCategory('')
            setBrand("")
            setOptions([])
            setSelectedID([])
            setQuantity("")
            setTimeout(() => setLoading(true), 1500)

            if (product) {
                if (product.status === 201) {
                    notify("success ", "success")
                } else {
                    notify("Error ", "error")
                }
            }
        }
    }, [loading])



    return [images , setImages, setName,name,description,setDescription,discount,setDiscount,price,setPrice,quantity,setQuantity,onSelectCategory,allCategory,options,onSelect,onRemove,onSelectBrand,allBrand,colors,handelDeleteColor,handelOpenColor,showColor,handelComplete,handelSubmt]
}

export default AddProductHook;